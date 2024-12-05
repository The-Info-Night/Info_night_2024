import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface HumidityChartProps {
  humidity: number;
}

export function HumidityChart({ humidity }: HumidityChartProps) {
  const data = Array.from({ length: 24 }, (_, i) => {
    const variation = Math.sin(i / 3) * 10;
    return {
      hour: i,
      humidity: Math.max(0, Math.min(100, humidity + variation)),
    };
  });

  return (
    <div className="w-full h-64 bg-white/20 rounded-xl backdrop-blur-md p-4">
      <h3 className="text-xl font-semibold text-white mb-4">Humidité sur 24h</h3>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="humidityGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#60A5FA" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#60A5FA" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
          <XAxis 
            dataKey="hour" 
            stroke="white"
            tickFormatter={(hour) => `${hour}h`}
          />
          <YAxis 
            stroke="white"
            domain={[0, 100]}
            tickFormatter={(value) => `${value}%`}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(255,255,255,0.9)',
              border: 'none',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}
            formatter={(value: number) => [`${value.toFixed(1)}%`, 'Humidité']}
            labelFormatter={(hour) => `${hour}h`}
          />
          <Area
            type="monotone"
            dataKey="humidity"
            stroke="#60A5FA"
            fillOpacity={1}
            fill="url(#humidityGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}