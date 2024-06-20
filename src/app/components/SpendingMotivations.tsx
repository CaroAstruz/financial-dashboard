import { Badge } from "@/components/ui/badge";
import { CardHeader, CardTitle, CardContent, Card } from "@/components/ui/card";
import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "Joueurs PC",
    uv: 85,
    fill: "#8884d8",
  },
  {
    name: "Achètent leurs jeux à prix réduit",
    fill: "#8dd1e1",
  },
  {
    name: "Dépensent par don",
    fill: "#83a6ed",
  },
];

const SpendingMotivations = () => {
  return (
    <div style={{ width: "50%" }} className="flex-parent">
      <ResponsiveContainer height={150} className="flex-child">
        <Card className="w-[360px] h-fit mt-8 border-dark-blue border-opacity-25 bg-cream">
          <CardContent>
            <p>80%</p>
          </CardContent>
          <CardHeader>
            <CardTitle>
              Joueurs sur PC
            </CardTitle>
          </CardHeader>
        </Card>
        </ResponsiveContainer>
        <ResponsiveContainer height={150} className="flex-child">
        <Card className="w-[360px] h-fit mt-8 border-dark-blue border-opacity-25 bg-cream">
          <CardHeader>
            <CardTitle>
              Achetant à prix réduits
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>50%</p>
          </CardContent>
        </Card>
        </ResponsiveContainer>
        <ResponsiveContainer height={150} className="flex-child">
        <Card className="w-[360px] h-fit mt-8 border-dark-blue border-opacity-25 bg-cream">
          <CardHeader>
            <CardTitle>
              Dépensant par dons
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>25%</p>
          </CardContent>
        </Card>
      </ResponsiveContainer>
    </div>
  );
};

export default SpendingMotivations;
