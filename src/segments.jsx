import React from "react";

export function StationSegment({ data }) {
  return (
    <div className="flex items-center space-x-3">
      <span className="text-2xl">🏢</span>
      <div>
        <div className="font-semibold">{data.station}</div>
        <div className="text-xs text-gray-500">Perron {data.platform}</div>
      </div>
    </div>
  );
}

export function TrainSegment({ data }) {
  return (
    <div className="flex items-start space-x-3">
      <span className="text-2xl">🚆</span>
      <div>
        <div className="font-medium">{data.operator} richting {data.direction}</div>
        <div className="text-xs text-gray-500">
          {data.departure} – {data.arrival} · {data.duration} · {data.stops} stops
        </div>
      </div>
    </div>
  );
}

export function WalkSegment({ data }) {
  return (
    <div className="flex items-start space-x-3">
      <span className="text-2xl">🚶</span>
      <div>
        <div className="font-medium">Overstap (lopen)</div>
        <div className="text-xs text-gray-500">
          Van perron {data.fromPlatform} naar {data.toPlatform} · {data.duration}
          {data.map && <div className="mt-1 underline text-blue-500 cursor-pointer">Toon kaart</div>}
        </div>
      </div>
    </div>
  );
}