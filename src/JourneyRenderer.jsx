import React from "react";
import { TrainSegment, WalkSegment, StationSegment } from "./segments";

export default function JourneyRenderer({ journey }) {
  return (
    <div className="max-w-md mx-auto p-4 space-y-4">
      <h2 className="text-xl font-bold text-center">Reis van {journey.meta.departure} tot {journey.meta.arrival}</h2>
      <div className="text-sm text-gray-500 text-center">
        {journey.meta.transfers} overstap · {journey.meta.duration} · {journey.meta.price}
      </div>
      <div className="space-y-6">
        {journey.segments.map((segment, index) => {
          switch (segment.type) {
            case "departure":
              return <StationSegment key={index} data={segment} />;
            case "train":
              return <TrainSegment key={index} data={segment} />;
            case "walk":
              return <WalkSegment key={index} data={segment} />;
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
}