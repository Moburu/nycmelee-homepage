"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import MapIcon from "@mui/icons-material/Map";

// Access the public variable prefixed with NEXT_PUBLIC_
const EVENT_SLUG = "nyse";

interface EventData {
  tournament?: {
    name: string;
    venueAddress?: string;
  };
  name?: string;
  numEntrants?: number;
  error?: string;
  details?: unknown;
}

export default function StartGGEventInfo() {
  const [eventData, setEventData] = useState<EventData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch data from your secure Next.js API route
        const res = await fetch(`/api/event-data?slug=${EVENT_SLUG}`);
        const data = await res.json();

        console.log("API Response:", data);

        if (!res.ok || data.error) {
          setError(data.error || `HTTP ${res.status}`);
          setEventData(null);
        } else {
          setEventData(data);
          setError(null);
        }
      } catch (err) {
        const errorMsg = err instanceof Error ? err.message : "Unknown error";
        console.error("Fetch error:", errorMsg);
        setError(errorMsg);
        setEventData(null);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="event-info">
      {error ? (
        <div className="error-message">
          <div className="rounded-lg bg-red-50 border border-red-200 p-4">
            <p className="text-red-700 font-semibold flex items-center gap-2">
              <span className="text-lg">⚠️</span>
              <span>Error: {error}</span>
            </p>
          </div>
        </div>
      ) : eventData?.tournament?.name && eventData?.name ? (
        <div className="event-details">
          <Link href="https://www.start.gg/nyse" className="event-link">
            <span className="flex items-center gap-2">
              <OpenInNewIcon fontSize="large" />
              <h2 className="text-4xl">{eventData.tournament.name}</h2>
            </span>
          </Link>
          {eventData.numEntrants && (
            <p className="text-2xl">
              {eventData.numEntrants.toLocaleString()} entrants
            </p>
          )}
          {eventData?.tournament.venueAddress && (
            <span className="flex items-center gap-2">
              <MapIcon fontSize="large" />
              <Link
                href={`http://maps.google.com/?q=${encodeURIComponent(eventData?.tournament.venueAddress)}`}
                className="map-link"
              >
                <p className="text-2xl">{eventData.tournament.venueAddress}</p>
              </Link>
            </span>
          )}
        </div>
      ) : (
        <div className="loading">
          <p>Loading event data...</p>
        </div>
      )}
    </div>
  );
}
