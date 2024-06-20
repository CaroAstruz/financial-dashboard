"use client";

import {
  Bar,
  ComposedChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const BuyingHabits = () => {
  return (
    <div style={{ width: "100%"}} className="flex-parent">
      <ResponsiveContainer height={300} className="flex-child">
        <ComposedChart
          data={[
            {
              name: "Ne lanceront jamais le jeu",
              uv: 22,
            },
            {
              name: "Arrêteront à la moitié du jeu",
              uv: 58,
            },
            {
              name: "Finiront le jeu",
              uv: 70,
            },
          ]}
          height={300}
          margin={{
            bottom: 20,
            left: 20,
            right: 20,
            top: 20,
          }}
          width={600}
        >
          <Legend />
          <Tooltip />
          <XAxis dataKey="name" />
          <YAxis tickCount={6} ticks={[20, 40, 60, 80, 100]} unit={"%"} />
          <Bar
            activeBar={{
              fill: "#ff9b66",
              radius: 10,
              stroke: "#ff5900",
              strokeWidth: 2,
            }}
            data={[]}
            dataKey="uv"
            name="Consommateurs"
            fill="#ff5900"
            maxBarSize={40}
            minPointSize={0}
            radius={5}
            stackId={1}
            stroke="#ff5900"
            strokeWidth={2}
            unit="%"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BuyingHabits;
