"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SalesComparison from "../components/SalesComparison";
import BuyingHabits from "../components/BuyingHabits";
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
import { Noto_Serif_Yezidi } from "next/font/google";
import { Separator } from "@/components/ui/separator";
import SpendingMotivations from "../components/SpendingMotivations";

const Page = () => {
  const Y1_USERS = "15 000 total users";
  const [year, setYear] = useState("1");

  return (
    <div className="min-h-screen w-full py-12 flex justify-evenly items-center">
      <div className="relative w-full mx-auto text-white">
      <p className="font-extrabold text-5xl ml-48">KPIs</p>
        <div className="flex flex-row justify-evenly items-center">
          <Select onValueChange={setYear}>
            <SelectTrigger className="w-[240px]">
              <SelectValue placeholder="Sélectionnez une année" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Année</SelectLabel>
                <SelectItem value="1">N+1</SelectItem>
                <SelectItem value="2">N+2</SelectItem>
                <SelectItem value="3">N+3</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Card className="w-max">
            <CardHeader>
              <CardTitle>Utilisateurs année {year}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{Y1_USERS}</p>
            </CardContent>
          </Card>
          <Card className="w-max">
            <CardHeader>
              <CardTitle>Catalogue de jeux année {year}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{Y1_USERS}</p>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-10" />

        <p className="font-extrabold text-5xl ml-48">Habitudes utilisateurs</p>
        <div className="flex flex-row h-auto items-center">
          <SpendingMotivations />
          <BuyingHabits />
        </div>
        <Separator className="my-10" />

        <div className="flex flex-row h-auto items-center">
          <SalesComparison />
        </div>
        
      </div>
    </div>
  );
};

export default Page;
