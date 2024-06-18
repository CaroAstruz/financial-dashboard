"use client"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Brush } from 'recharts';
import React from 'react';
import { Weight } from 'lucide-react';

const SalesComparison = (selectedDataRange: any) => {
  const [opacity, setOpacity] = React.useState({
    rn: 1,
    rnn: 1,
    ro: 1,
    rw: 1
  });

  const handleMouseEnter = (o: any) => {
    const { dataKey } = o;

    setOpacity((op) => ({ ...op, [dataKey]: 0.5 }));
  };

  const handleMouseLeave = (o: any) => {
    const { dataKey } = o;

    setOpacity((op) => ({ ...op, [dataKey]: 1 }));
  };

  console.log(selectedDataRange.data)

  return (

    <div style={{ width: '100%' }} className="flex-parent">
      <ResponsiveContainer height={300} className="flex-child">
        <LineChart
          width={500}
          height={300}
          data={selectedDataRange.data}
          syncId="sales"
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
          <Line type="monotone" name="Revenus sans marché de l'occasion" dataKey="rnn" strokeOpacity={opacity.rnn} stroke="#82ca9d" />
          <Tooltip labelStyle={{ color: "black", 'font-weight': "bold" }} />
        </LineChart>
      </ResponsiveContainer>
      <ResponsiveContainer height={300} className="flex-child" >
        <LineChart
          width={500}
          height={300}
          data={selectedDataRange.data}
          syncId="sales"
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip labelStyle={{ color: "black", 'font-weight': "bold" }} />
          <Legend onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
          <Line type="monotone" name='Revenus neuf' dataKey="rn" strokeOpacity={opacity.rn} stroke="#FFBD99" activeDot={{ r: 8 }} />
          <Line type="monotone" name="Revenus d'occasion" dataKey="ro" strokeOpacity={opacity.ro} stroke="#D566AF" />
          <Line type="monotone" name="Revenus WNG" dataKey="rw" strokeOpacity={opacity.rw} stroke="#FF5900" />
        </LineChart>
      </ResponsiveContainer>
    </div>

  );
};


export default SalesComparison;