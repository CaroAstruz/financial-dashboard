"use client"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Brush } from 'recharts';
import React from 'react';

const data = [
  {
    name: 'M',
    rnn: Math.floor(Math.random()*15000),
    ro: Math.floor(Math.random()*15000),
    rn: Math.floor(Math.random()*15000),
    rw: Math.floor(Math.random()*15000),
  },
  {
    name: 'M+1',
    rnn: Math.floor(Math.random()*15000),
    ro: Math.floor(Math.random()*15000),
    rn: Math.floor(Math.random()*15000),
    rw: Math.floor(Math.random()*15000),
  },
  {
    name: 'M+2',
    rnn: Math.floor(Math.random()*15000),
    ro: Math.floor(Math.random()*15000),
    rn: Math.floor(Math.random()*15000),
    rw: Math.floor(Math.random()*15000),
  },
  {
    name: 'M+3',
    rnn: Math.floor(Math.random()*15000),
    ro: Math.floor(Math.random()*15000),
    rn: Math.floor(Math.random()*15000),
    rw: Math.floor(Math.random()*15000),
  },
  {
    name: 'M+4',
    rnn: Math.floor(Math.random()*15000),
    ro: Math.floor(Math.random()*15000),
    rn: Math.floor(Math.random()*15000),
    rw: Math.floor(Math.random()*15000),
  },
  {
    name: 'M+5',
    rnn: Math.floor(Math.random()*15000),
    ro: Math.floor(Math.random()*15000),
    rn: Math.floor(Math.random()*15000),
    rw: Math.floor(Math.random()*15000),
  },
  {
    name: 'M+6',
    rnn: Math.floor(Math.random()*15000),
    ro: Math.floor(Math.random()*15000),
    rn: Math.floor(Math.random()*15000),
    rw: Math.floor(Math.random()*15000),
  },
  {
    name: 'M+7',
    rnn: Math.floor(Math.random()*15000),
    ro: Math.floor(Math.random()*15000),
    rn: Math.floor(Math.random()*15000),
    rw: Math.floor(Math.random()*15000),
  },
  {
    name: 'M+8',
    rnn: Math.floor(Math.random()*15000),
    ro: Math.floor(Math.random()*15000),
    rn: Math.floor(Math.random()*15000),
    rw: Math.floor(Math.random()*15000),
  },
  {
    name: 'M+9',
    rnn: Math.floor(Math.random()*15000),
    ro: Math.floor(Math.random()*15000),
    rn: Math.floor(Math.random()*15000),
    rw: Math.floor(Math.random()*15000),
  },
  {
    name: 'M+10',
    rnn: Math.floor(Math.random()*15000),
    ro: Math.floor(Math.random()*15000),
    rn: Math.floor(Math.random()*15000),
    rw: Math.floor(Math.random()*15000),
  },
  {
    name: 'M+11',
    rnn: Math.floor(Math.random()*15000),
    ro: Math.floor(Math.random()*15000),
    rn: Math.floor(Math.random()*15000),
    rw: Math.floor(Math.random()*15000),
  },
];

const SalesComparison = () => {
  const [opacity, setOpacity] = React.useState({
    rn: 1,
    rnn: 1,
    ro: 1,
    rw: 1
  });

  const handleMouseEnter = (o) => {
    const { dataKey } = o;

    setOpacity((op) => ({ ...op, [dataKey]: 0.5 }));
  };

  const handleMouseLeave = (o) => {
    const { dataKey } = o;

    setOpacity((op) => ({ ...op, [dataKey]: 1 }));
  };

  return (
    <div style={{width: '100%'}}className="flex-parent">
      <ResponsiveContainer height={300} className="flex-child">
        <LineChart
          width={500}
          height={300}
          data={data}
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
          <Tooltip />
          <Legend onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
          <Line type="monotone" name="Revenus sans marché de l'occasion" dataKey="rnn" strokeOpacity={opacity.rnn} stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
      <ResponsiveContainer height={300} className="flex-child" >
        <LineChart
          width={500}
          height={300}
          data={data}
          syncId="sales"
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <Brush height={20} travellerWidth={2}/>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
          <Line type="monotone" name='Revenus neuf' dataKey="rn" strokeOpacity={opacity.rn} stroke="#FFBD99" activeDot={{ r: 8 }} />
          <Line type="monotone" name="Revenus d'occasion" dataKey="ro" strokeOpacity={opacity.ro} stroke="#D566AF" />
          <Line type="monotone" name="Revenus WNG" dataKey="rw" strokeOpacity={opacity.rw} stroke="#FF5900" />
          <Brush height={20} travellerWidth={2}/>
        </LineChart>
      </ResponsiveContainer>
  </div>
  );
};


export default SalesComparison;