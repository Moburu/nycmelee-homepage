"use client";
import React, { useEffect, useState } from "react";

// Access the public variable prefixed with NEXT_PUBLIC_
const EVENT_SLUG = "nyse";

interface EventData {
  tournament: {
    name: string;
  };
  name: string;
  numEntrants: number;
}

export default function StartGGEventInfo() {
  const [eventData, setEventData] = useState<EventData | null>(null);

  useEffect(() => {
    async function fetchData() {
      // Fetch data from your secure Next.js API route
      const res = await fetch(`/api/event-data?slug=${EVENT_SLUG}`);
      const data = await res.json();
      setEventData(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Next.js Start.gg Event Viewer</h1>
      {eventData ? (
        <>
          <h2>Tournament: {eventData.tournament.name}</h2>
          <h3>Event: {eventData.name}</h3>
          <p>Entrants: **{eventData.numEntrants}**</p>
        </>
      ) : (
        <p>Loading event data...</p>
      )}
    </div>
  );
}
