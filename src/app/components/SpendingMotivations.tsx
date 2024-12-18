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
    <ResponsiveContainer>
    <div className="flex flex-col items-start justify-evenly lg:flex-row">
        <Card className=" h-fit m-2 border-darkblue border-opacity-25 bg-cream">
          <CardHeader>
            <CardTitle>
              <h2>Joueurs sur PC</h2>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>80%</p>
          </CardContent>
        </Card>
        <Card className="  h-fit m-2 border-dark-blue border-opacity-25 bg-cream">
          <CardHeader>
            <CardTitle>
            <h2> Achetant à prix réduits</h2>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>50%</p>
          </CardContent>
        </Card>
        <Card className="  h-fit m-2 border-dark-blue border-opacity-25 bg-cream">
          <CardHeader>
            <CardTitle>
            <h2> Dépensant par dons</h2>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>25%</p>
          </CardContent>
        </Card>
    </div>
    </ResponsiveContainer>
  );
};

export default SpendingMotivations;