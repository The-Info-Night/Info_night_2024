import React from 'react';
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from 'recharts';

interface WindRoseProps {
  windSpeed: number;
  windDirection?: number;
}

export function WindRose({ windSpeed, windDirection = 0 }: WindRoseProps) {
  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SO', 'O', 'NO'];
  const data = directions.map((direction, index) => {
    const angle = (index * 45 + windDirection) % 360;
    const intensity = Math.cos((angle - windDirection) * Math.PI / 180);
    return {
      direction,
      speed: Math.max(0, windSpeed * (0.5 + 0.5 * intensity))
    };
  });

  return (
    <div className="w-full h-64 bg-white/20 rounded-xl backdrop-blur-md p-4">
      <h3 className="text-xl font-semibold text-white mb-4">Rose des vents</h3>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data}>
          <PolarGrid stroke="rgba(255,255,255,0.2)" />
          <PolarAngleAxis
            dataKey="direction"
            stroke="white"
            tick={{ fill: 'white' }}
          />
          <PolarRadiusAxis
            angle={90}
            domain={[0, windSpeed * 1.2]}
            stroke="white"
            tick={{ fill: 'white' }}
          />
          <Radar
            name="Vitesse du vent"
            dataKey="speed"
            stroke="#60A5FA"
            fill="#60A5FA"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}