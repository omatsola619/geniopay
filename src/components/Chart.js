import React from "react";
import {
  ResponsiveContainer,
  Tooltip,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  AreaChart,
} from "recharts";

const data = [
  { name: "Jan", value: "4", uv: "4" },
  { name: "Feb", value: "3", uv: "3" },
  { name: "Mar", value: "3.5", uv: "4" },
  { name: "Apr", value: "3", uv: "3" },
  { name: "May", value: "2", uv: "2" },
  { name: "Jun", value: "3.5", uv: "3" },
  { name: "Jul", value: "3", uv: "4" },
];

function Chart() {
  return (
    <>
      <ResponsiveContainer width="100%" height={273}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#017189" stopOpacity={0.3} />
              <stop offset="30%" stopColor="#017189" stopOpacity={0.03} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="value"
            stroke="#017189"
            strokeWidth={5}
            fill="url(#color)"
          />
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis
            dataKey="uv"
            axisLine={false}
            tickLine={false}
            tickFormatter={(number) => `$${number}K`}
          />
          <Tooltip />
          <CartesianGrid
            opacity={0.3}
            horizontal={false}
            strokeDasharray="15 15"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
}

export default Chart;
