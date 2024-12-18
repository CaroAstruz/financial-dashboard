"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SalesComparison from "./components/SalesComparison";
import BuyingHabits from "./components/BuyingHabits";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import SpendingMotivations from "./components/SpendingMotivations";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import SheetTest from "./components/SheetTest";
import GoogleSheetData from "./components/GoogleSheetData";

const Page = () => {
  const Y1_USERS = "10000 total users";
  const Y2_USERS = "";
  const Y3_USERS = "";
  const [yearString, setYearString] = useState("1");


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

  let selectedDataRange: number;

  switch (yearString) {
    case "1":
      selectedDataRange = 12;
      break;
    case "2":
      selectedDataRange = 24;
      break;
    case "3":
      selectedDataRange = 36;
      break;
  }

  return (
    <div className="min-h-screen w-full flex justify-evenly items-center">
      <div className="relative w-full mx-auto text-black">
        <div className="flex flex-col lg:flex-row justify-evenly">
        <ResponsiveContainer className="flex-child p-1 lg:p-2">
            <Card className="w-full h-full p-8 border-dark-blue border-opacity-25 bg-cream">
              <h1>Habitudes utilisateurs</h1>
              <div className="flex flex-col h-auto items-center justify-evenly flex-parent">
                <SpendingMotivations />
                <BuyingHabits />
              </div>
            </Card>
          </ResponsiveContainer>
          <ResponsiveContainer className="flex-child p-1 lg:p-2">
            <Card className="w-full h-full p-8 border-dark-blue border-opacity-25 bg-cream">
              <h1>Répartitions du prix de vente</h1>
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
          </ResponsiveContainer>
        </div>
        <Separator className="my-10 bg-dark-blue bg-opacity-25" />
        <h1>Courbes de revenus</h1>
        <div className="flex-parent flex flex-row mb-4 ">
          <ResponsiveContainer className="flex-child p-1 lg:p-2">
            <Card className="max-h-full">
              <CardHeader>
                <CardTitle>
                  <h2>Année {yearString}</h2>
                  <h2>Utilisateurs</h2>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {" "}
                <p>{Y1_USERS}</p>
              </CardContent>
            </Card>
          </ResponsiveContainer>
          <ResponsiveContainer className="flex-child p-1 lg:p-2">
            <Card>
              <CardHeader>
                <CardTitle>
                  <h2>Année {yearString}</h2>
                  <h2>Jeux </h2>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{Y1_USERS}</p>
              </CardContent>
            </Card>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-col items-center justify-evenly">
          <Select onValueChange={setYearString}>
            <SelectTrigger className="w-auto ">
              <SelectValue placeholder="Sélectionnez une durée" />
            </SelectTrigger>
            <SelectContent
              position="popper"
              side="bottom"
              sticky="always"
              avoidCollisions={false}
            >
              <SelectItem value="1">N+1</SelectItem>
              <SelectItem value="2">N+2</SelectItem>
              <SelectItem value="3">N+3</SelectItem>
            </SelectContent>
          </Select>

          <SalesComparison selectedDataRange={selectedDataRange}/>

        
        </div>
      </div>
    </div>
  );
};

export default Page;
