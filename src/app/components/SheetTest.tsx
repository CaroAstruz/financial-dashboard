"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Brush,
} from "recharts";
import React from "react";

const SheetTest = (selectedDataRange: any) => {
  const [opacity, setOpacity] = React.useState({
    rn: 1,
    rnn: 1,
    ro: 1,
    rw: 1,
  });

  const handleMouseEnter = (o: any) => {
    const { dataKey } = o;

    setOpacity((op) => ({ ...op, [dataKey]: 0.5 }));
  };

  const handleMouseLeave = (o: any) => {
    const { dataKey } = o;

    setOpacity((op) => ({ ...op, [dataKey]: 1 }));
  };

  console.log(selectedDataRange.data);

  return (
    <div style={{ width: "100%" }} className="flex-parent">
      <h2>Revenus sans marché de l'occasion</h2>
      <ResponsiveContainer height={200} className="flex-child">
        <LineChart
          width={500}
          height={300}
          data={selectedDataRange.data}
          syncId="sales"
          margin={{
            top: 5,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" className="text-xs" />
          <YAxis tickCount={4} tickLine={false} className="text-xs" />
          
          <Line
            type="monotone"
            name="Revenus"
            dataKey="rnn"
            strokeOpacity={opacity.rnn}
            stroke="#82ca9d"
          />
          <Tooltip labelStyle={{ color: "black" }} />
        </LineChart>
      </ResponsiveContainer>
      <h2>Revenus Why Not Games</h2>
      <ResponsiveContainer height={200} className="flex-child">
        <LineChart
          width={500}
          height={300}
          data={selectedDataRange.data}
          syncId="sales"
          margin={{
            top: 5,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" className="text-xs" />
          <YAxis tickCount={4} tickLine={false} className="text-xs" />
          <Tooltip labelStyle={{ color: "black" }} />
          
          <Line
            type="monotone"
            name="Revenus"
            dataKey="rw"
            strokeOpacity={opacity.rw}
            stroke="#FF5900"
          />
        </LineChart>
      </ResponsiveContainer>
      <h2>Détails revenus neuf et occasion</h2>
      <ResponsiveContainer height={200} className="flex-child">
        <LineChart
          width={500}
          height={300}
          data={selectedDataRange.data}
          syncId="sales"
          margin={{
            top: 5,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" className="text-xs" />
          <YAxis tickCount={4} tickLine={false} className="text-xs" />
          <Tooltip labelStyle={{ color: "black" }} />
          <Legend
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <Line
            type="monotone"
            name="Neuf"
            dataKey="rn"
            strokeOpacity={opacity.rn}
            stroke="#FFBD99"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            name="Occasion"
            dataKey="ro"
            strokeOpacity={opacity.ro}
            stroke="#D566AF"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SheetTest;
