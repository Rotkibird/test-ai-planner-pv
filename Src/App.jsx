import React from "react";
import JourneyRenderer from "./JourneyRenderer";
import journey from "./journey.json";

export default function App() {
  return (
    <main className="bg-gray-50 min-h-screen p-4">
      <JourneyRenderer journey={journey} />
    </main>
  );
}