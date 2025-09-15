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
import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import SpendingMotivations from "./components/SpendingMotivations";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { fetchGoogleSheetData } from "@/services/googleSheetsService";

const Page = () => {
  const [data, setData] = useState<any[]>([]);
  const [Y1_SALES_NEW, setY1_SALES_NEW] = useState("");
  const [Y1_SALES_USED, setY1_SALES_USED] = useState("");
  const [Y2_SALES_NEW, setY2_SALES_NEW] = useState("");
  const [Y2_SALES_USED, setY2_SALES_USED] = useState("");
  const [Y3_SALES_NEW, setY3_SALES_NEW] = useState("");
  const [Y3_SALES_USED, setY3_SALES_USED] = useState("");
  const [Y1_USERS, setY1_USERS] = useState("");
  const [Y2_USERS, setY2_USERS] = useState("");
  const [Y3_USERS, setY3_USERS] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const sheetData = await fetchGoogleSheetData();

        if (sheetData.length === 0) {
          console.error("No data fetched from Google Sheets");
          return;
        }

        // Assuming the first row is the header and the rest are data rows
        const headers = sheetData[0];

        const dataRows = sheetData.slice(1).map((row: any[], index: number) => {
          const obj: any = {};
          headers.forEach((header: string, colIndex: number) => {
            // Convert string values to integers
            const value = row[colIndex]?.toString().replace(/,/g, '');
            obj[header] = isNaN(value) ? value : parseInt(value, 10);
          });
          return obj;
        });

        setData(dataRows);
        // Met à jour Y1_SALES avec la valeur Nb_Sales_Used de la ligne 12 si elle existe
        if (dataRows.length > 11 && dataRows[11]) {
          const used = dataRows[11]["Nb_Sales_Used"] ?? "";
          const newSales = dataRows[11]["Nb_Sales_New"] ?? "";
          setY1_SALES_USED(used);
          setY1_SALES_NEW(newSales);
          const users = dataRows[11]["NB_utilisateur"] ?? "";
          setY1_USERS(users);
        }
        // Met à jour Y1_SALES avec la valeur Nb_Sales_Used de la ligne 12 si elle existe
        if (dataRows.length > 23 && dataRows[23]) {
          const used = dataRows[23]["Nb_Sales_Used"] ?? "";
          const newSales = dataRows[23]["Nb_Sales_New"] ?? "";
          setY2_SALES_USED(used);
          setY2_SALES_NEW(newSales);
          const users = dataRows[23]["NB_utilisateur"] ?? "";
          setY2_USERS(users);
        }
        // Met à jour Y1_SALES avec la valeur Nb_Sales_Used de la ligne 12 si elle existe
        if (dataRows.length >= 35 && dataRows[35]) {
          const used = dataRows[35]["Nb_Sales_Used"] ?? "";
          const newSales = dataRows[35]["Nb_Sales_New"] ?? "";
          setY3_SALES_USED(used);
          setY3_SALES_NEW(newSales);
          const users = dataRows[35]["NB_utilisateur"] ?? "";
          setY3_USERS(users);
        }
      } catch (error) {
        console.error("Error fetching data from Google Sheets:", error);
      }
    };

    getData();
  }, []);
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

  let selectedDataRange = 12;

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

  // Sélection dynamique des valeurs selon l'année
  let users, salesNew, salesUsed;
  switch (yearString) {
    case "1":
      users = Y1_USERS;
      salesNew = Y1_SALES_NEW;
      salesUsed = Y1_SALES_USED;
      break;
    case "2":
      users = Y2_USERS;
      salesNew = Y2_SALES_NEW;
      salesUsed = Y2_SALES_USED;
      break;
    case "3":
      users = Y3_USERS;
      salesNew = Y3_SALES_NEW;
      salesUsed = Y3_SALES_USED;
      break;
    default:
      users = Y1_USERS;
      salesNew = Y1_SALES_NEW;
      salesUsed = Y1_SALES_USED;
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
        <div className="flex-parent flex flex-row">        <h1 className="flex-child">Courbes de revenus : </h1>
          <div className="flex-child ml-4"><Select onValueChange={setYearString} defaultValue="1">
            <SelectTrigger className="w-32" >
              <SelectValue placeholder="Sélectionnez une durée" />
            </SelectTrigger>
            <SelectContent
              side="bottom"
              avoidCollisions={true}
            >
              <SelectItem value="1">N+1</SelectItem>
              <SelectItem value="2">N+2</SelectItem>
              <SelectItem value="3">N+3</SelectItem>
            </SelectContent>
          </Select></div></div>

        <div className="flex-parent flex flex-row mb-4 ">
          <ResponsiveContainer className="flex-child p-1 lg:p-2">
            <Card className="max-h-full">
              <CardHeader>
                <CardTitle>
                  <h2>Utilisateurs</h2>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {" "}
                <p>{users}</p>
              </CardContent>
            </Card>
          </ResponsiveContainer>
          <ResponsiveContainer className="flex-child p-1 lg:p-2">
            <Card>
              <CardHeader>
                <CardTitle>
                  <h2>Copies neuves vendues</h2>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{salesNew}</p>
              </CardContent>
            </Card>
          </ResponsiveContainer>
          <ResponsiveContainer className="flex-child p-1 lg:p-2">
            <Card>
              <CardHeader>
                <CardTitle>
                  <h2>Copies d'occasions vendues</h2>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{salesUsed}</p>
              </CardContent>
            </Card>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-col items-center justify-evenly">


          <SalesComparison selectedDataRange={selectedDataRange} />


        </div>
      </div>
    </div>
  );
};

export default Page;


