"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SalesComparison from "./components/SalesComparison";
import BuyingHabits from "./components/BuyingHabits";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import SpendingMotivations from "./components/SpendingMotivations";
import { Badge } from "@/components/ui/badge";
import { Cell, Pie, PieChart, Tooltip } from "recharts";
const Page = () => {
  const Y1_USERS = "15 000 total users";
  const [yearString, setYearString] = useState("1");

  const dataY1 = [
    {
      name: "M",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+1",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+2",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+3",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+4",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+5",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+6",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+7",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+8",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+9",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+10",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+11",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
  ];
  const dataY2 = [
    {
      name: "M",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+1",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+2",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+3",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+4",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+5",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+6",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+7",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+8",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+9",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+10",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+11",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+12",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+13",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+14",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+15",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+16",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+17",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+18",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+19",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+20",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+21",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+22",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+23",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
  ];
  const dataY3 = [
    {
      name: "M",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+1",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+2",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+3",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+4",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+5",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+6",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+7",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+8",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+9",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+10",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+11",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+12",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+13",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+14",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+15",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+16",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+17",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+18",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+19",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+20",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+21",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+22",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+23",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+24",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+25",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+26",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+27",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+28",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+29",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+30",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+31",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+32",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+33",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+34",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
    {
      name: "M+35",
      rnn: Math.floor(Math.random() * 15000),
      ro: Math.floor(Math.random() * 15000),
      rn: Math.floor(Math.random() * 15000),
      rw: Math.floor(Math.random() * 15000),
    },
  ];

  const salesSplitWNGused = [
    {
      name: "Utilisateurs",
      value: 75,
    },
    {
      name: "Développeurs",
      value: 15,
    },
    {
      name: "Why Not Games",
      value: 10,
    },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  let selectedDataRange: any = [];

  switch (yearString) {
    case "1":
      selectedDataRange = dataY1;
      break;
    case "2":
      selectedDataRange = dataY2;
      break;
    case "3":
      selectedDataRange = dataY3;
      break;
  }

  console.log(selectedDataRange);
  return (
    <div className="min-h-screen w-full py-12 flex justify-evenly items-center">
      <div className="relative w-full mx-auto text-black">
        <div className="flex flex-row justify-evenly">
          <span>
            <Card className="w-full h-full p-8 border-dark-blue border-opacity-25 bg-cream">
              <p className="font-extrabold text-5xl mb-10">
                Habitudes utilisateurs
              </p>
              <div className="flex flex-row h-auto items-center justify-evenly flex-parent">
                <SpendingMotivations />
                <BuyingHabits />
              </div>
            </Card>
          </span>
          <span>
            <Card className="w-full h-full p-8 border-dark-blue border-opacity-25 bg-cream">
              <p className="font-extrabold text-5xl mb-10">
                Répartitions du prix de vente
              </p>
              <div className="flex flex-row h-auto items-center justify-between">
                <span className="flex flex-col items-center">
                  <p>Why Not Games</p>
                  <PieChart width={300} height={250}>
                    <Pie
                      data={salesSplitWNGused}
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                      label
                    >
                      {salesSplitWNGused.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Pie
                      data={salesSplitWNGused}
                      innerRadius={30}
                      outerRadius={50}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"  
                    >
                      {salesSplitWNGused.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </span>
                <span className="flex flex-col items-center">
                  <p>Steam </p>
                  <PieChart width={300} height={250}>
                    <Pie
                      data={salesSplitWNGused}
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                      label
                    >
                      {salesSplitWNGused.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </span>
                <span className="flex flex-col items-center">
                  <p>Epic Games</p>
                  <PieChart width={300} height={250}>
                    <Pie
                      data={salesSplitWNGused}
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                      label
                    >
                      {salesSplitWNGused.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </span>
              </div>
            </Card>
          </span>
        </div>
        <Separator className="my-10 bg-dark-blue bg-opacity-25" />

        <p className="font-extrabold text-5xl ml-24 mb-10">
          Courbes de revenus
        </p>
        <div className="h-[160px] flex flex-row items-center justify-evenly m-16">
        <Card className="w-[360px] h-full">
              <CardHeader>
                <CardTitle>Utilisateurs année {yearString}</CardTitle>
              </CardHeader>
              <CardContent>
              </CardContent>
            </Card>
            <Card className="w-[360px] h-full ">
              <CardHeader>
                <CardTitle>Catalogue de jeux année {yearString}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{Y1_USERS}</p>
              </CardContent>
            </Card>
            </div>
        <div className="flex flex-col items-center justify-evenly">
        <Select onValueChange={setYearString}>
              <SelectTrigger className="w-auto ">
                <SelectValue placeholder="Sélectionnez une durée" />
              </SelectTrigger>
              <SelectContent position="popper" side='bottom' sticky="always" avoidCollisions={false}>
                  <SelectItem value="1">N+1</SelectItem>
                  <SelectItem value="2">N+2</SelectItem>
                  <SelectItem value="3">N+3</SelectItem>
              </SelectContent>
            </Select>
           <div className=" ml-8 h-auto flex flex-col justify-around items-center">
          </div>
                  <SalesComparison data={selectedDataRange} />
        </div>
      </div>
    </div>
  );
};

export default Page;
