"use client";
import React, { useEffect, useState } from "react";

// Access the public variable prefixed with NEXT_PUBLIC_
const EVENT_SLUG = "nyse";

interface EventData {
  tournament?: {
    name: string;
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
    <div>
      <h1>Next.js Start.gg Event Viewer</h1>
      {error ? (
        <p style={{ color: "red" }}>Error: {error}</p>
      ) : eventData && eventData.tournament && eventData.name ? (
        <>
          <h2>Tournament: {eventData.tournament.name}</h2>
          <h3>Event: {eventData.name}</h3>
          <p>Entrants: {eventData.numEntrants}</p>
        </>
      ) : (
        <p>Loading event data...</p>
      )}
    </div>
  );
}
