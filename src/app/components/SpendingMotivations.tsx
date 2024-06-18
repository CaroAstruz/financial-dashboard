import React from "react";
import { RadialBarChart, RadialBar, Legend } from "recharts";

const data = [
  {
    name: "Joueur PC",
    uv: 85,
    pv: 2400,
    fill: "#8884d8",
  },
  {
    name: "Achète ses jeux à prix réduit",
    uv: 80,
    pv: 1398,
    fill: "#8dd1e1",
  },
  {
    name: "Dépense par don",
    uv:25,
    pv: 4567,
    fill: "#83a6ed",
  },

];

const style = {
  top: 0,
  left: 350,
  lineHeight: "24px",
};

const SpendingMotivations = () => {
  return (
    <div style={{width:'50%'}} className="flex-child">
    <RadialBarChart
      width={500}
      height={300}
      cx={150}
      cy={150}
      innerRadius={20}
      outerRadius={140}
      barSize={30}
      data={data}
    >
      <RadialBar
        label={{ position: "outside", fill: "#fff" }}
        background
        dataKey="uv"
        
      />
      <Legend
        iconSize={10}
        width={200}
        height={140}
        layout="vertical"
        verticalAlign="middle"
        wrapperStyle={style}
      />
    
    </RadialBarChart>
    </div>
  );
}

export default SpendingMotivations