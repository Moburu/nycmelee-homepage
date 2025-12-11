// This file runs entirely on the server
import { NextResponse } from "next/server";

// Get the private token directly using process.env
const API_TOKEN = process.env.STARTGG_API_TOKEN;

// The GraphQL Query
const query = `
query GetEventDetails($slug: String!) {
  event(slug: $slug) {
    name
    numEntrants
    tournament {
      name
    }
  }
}
`;

export async function GET(request) {
  // We can safely use the slug from the environment or get it from the request URL
  const slug =
    new URL(request.url).searchParams.get("slug") ||
    process.env.NEXT_PUBLIC_STARTGG_SLUG;

  if (!API_TOKEN) {
    return NextResponse.json(
      { error: "API token not configured" },
      { status: 500 },
    );
  }

  try {
    const response = await fetch("https://api.start.gg/gql/alpha", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Use the token securely on the server
        Authorization: `Bearer ${API_TOKEN}`,
      },
      body: JSON.stringify({
        query,
        variables: { slug },
      }),
    });

    const data = await response.json();

    if (data.errors) {
      // Handle GraphQL errors
      return NextResponse.json({ error: data.errors }, { status: 500 });
    }

    // Return the clean data to the client
    return NextResponse.json(data.data.event);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch data from start.gg" },
      { status: 500 },
    );
  }
}
