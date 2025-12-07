import React from "react";

interface StartggEventRegEmbedProps {
  tournamentSlug: string;
}

export default function StartggEventRegEmbed({
  tournamentSlug,
}: StartggEventRegEmbedProps) {
  const embedUrl = `https://start.gg/tournament/${tournamentSlug}/register/embed`;

  return (
    <div style={{ width: "500px" }}>
      <iframe
        src={embedUrl}
        height="600"
        width="100%"
        title={`start.gg registration for ${tournamentSlug}`}
      ></iframe>
    </div>
  );
}
