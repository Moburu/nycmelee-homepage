import { NextRequest, NextResponse } from "next/server";

type EventData = {
  tournament: {
    name: string;
  };
  name: string;
  numEntrants: number;
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (!slug || typeof slug !== "string") {
    // Handle missing or invalid slug
    console.error("API Error: Missing or invalid slug parameter.");
    return NextResponse.json(
      { error: "Missing or invalid event slug." },
      { status: 400 },
    );
  }

  try {
    // Start.gg GraphQL API endpoint
    const startGgApiUrl = "https://api.start.gg/gql/alpha";

    // Check if API token is present
    const apiToken = process.env.STARTGG_API_TOKEN;
    if (!apiToken) {
      console.error("STARTGG_API_TOKEN environment variable is not set");
      return NextResponse.json(
        {
          error:
            "API token not configured. Please add STARTGG_API_TOKEN to .env.local",
        },
        { status: 500 },
      );
    }

    const query = `
      query EventQuery($slug: String!) {
        event(slug: $slug) {
          id
          name
          numEntrants
          tournament {
            id
            name
          }
        }
      }
    `;

    // Start.gg expects full slug format: tournament/{tournament-slug}/event/{event-slug}
    // If only partial slug provided (e.g., "nyse"), you may need to construct the full path
    console.log(`Fetching event data for slug: ${slug}`);

    // Map short slugs to full Start.gg event slugs
    const slugMap: Record<string, string> = {
      nyse: "nycmelee-s-stock-exchange-28/event/melee-singles",
      // Add more events as needed
    };

    const fullSlug = slugMap[slug] || slug; // Use mapped slug or pass through as-is

    const startGgRes = await fetch(startGgApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiToken}`,
      },
      body: JSON.stringify({
        query,
        variables: { slug: fullSlug },
      }),
    });

    const startGgData = await startGgRes.json();

    // Log the response for debugging
    console.log(`Start.gg response status: ${startGgRes.status}`, startGgData);

    // Check for GraphQL errors in the response (these come with 200 status)
    if (startGgData.errors) {
      console.error(
        `Start.gg GraphQL error for slug ${slug}:`,
        startGgData.errors,
      );
      return NextResponse.json(
        { error: "Invalid slug or GraphQL error", details: startGgData.errors },
        { status: 400 },
      );
    }

    if (!startGgRes.ok) {
      // Handle non-2xx responses from Start.gg API
      console.error(
        `Start.gg API responded with status ${startGgRes.status}:`,
        startGgData,
      );
      return NextResponse.json(
        {
          error: "Failed to fetch data from Start.gg",
          details: startGgData.errors || "Unknown error",
        },
        { status: 502 },
      );
    }

    const event = startGgData?.data?.event;
    if (!event) {
      console.warn(`No event data found for slug: ${slug}`);
      return NextResponse.json({ error: "Event not found." }, { status: 404 });
    }

    // Map Start.gg response to your desired EventData structure
    const formattedEventData: EventData = {
      tournament: {
        name: event.tournament.name,
      },
      name: event.name,
      numEntrants: event.numEntrants,
    };

    return NextResponse.json(formattedEventData, { status: 200 });
  } catch (error) {
    // Catch any unexpected errors during the process
    console.error("API Error fetching event data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
