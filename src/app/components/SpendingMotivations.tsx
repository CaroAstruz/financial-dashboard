import { Badge } from "@/components/ui/badge";
import { CardHeader, CardTitle, CardContent, Card } from "@/components/ui/card";
import React from "react";
import { RadialBarChart, RadialBar, Legend } from "recharts";
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
    <span style={{ width: "50%" }} className="flex-child">
      <Card className="w-[360px] h-fit mt-8 border-dark-blue border-opacity-25 bg-cream">
        <CardContent>
          <p>80%</p>
        </CardContent>
        <CardHeader>
          <CardTitle>
            Joueurs sur PC
            <br />
            <Badge>
              Sur la masse totale incluant téléphone/consoles/PC
            </Badge>
          </CardTitle>
        </CardHeader>
      </Card>
      <Card className="w-[360px] h-fit mt-8 border-dark-blue border-opacity-25 bg-cream">
        <CardHeader>
          <CardTitle>
            Achetant à prix réduits
            <Badge>Réductions ou site tiers en grey market</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>50%</p>
        </CardContent>
      </Card>
      <Card className="w-[360px] h-fit mt-8 border-dark-blue border-opacity-25 bg-cream">
        <CardHeader>
          <CardTitle>
            Dépensant par dons
            <Badge>Volonté de soutien aux développeurs</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>25%</p>
        </CardContent>
      </Card>
    </span>
  );
};

export default SpendingMotivations;
