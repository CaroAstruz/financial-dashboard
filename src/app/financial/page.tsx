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
  const [yearString, setYearString] = useState("1");
  
  const dataY1 = [
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
    }
  ];
  const dataY2 = [
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
    {
      name: 'M+12',
      rnn: Math.floor(Math.random()*15000),
      ro: Math.floor(Math.random()*15000),
      rn: Math.floor(Math.random()*15000),
      rw: Math.floor(Math.random()*15000),
    },
    {
      name: 'M+13',
      rnn: Math.floor(Math.random()*15000),
      ro: Math.floor(Math.random()*15000),
      rn: Math.floor(Math.random()*15000),
      rw: Math.floor(Math.random()*15000),
    },
    {
      name: 'M+14',
      rnn: Math.floor(Math.random()*15000),
      ro: Math.floor(Math.random()*15000),
      rn: Math.floor(Math.random()*15000),
      rw: Math.floor(Math.random()*15000),
    },
    {
      name: 'M+15',
      rnn: Math.floor(Math.random()*15000),
      ro: Math.floor(Math.random()*15000),
      rn: Math.floor(Math.random()*15000),
      rw: Math.floor(Math.random()*15000),
    },
    {
      name: 'M+16',
      rnn: Math.floor(Math.random()*15000),
      ro: Math.floor(Math.random()*15000),
      rn: Math.floor(Math.random()*15000),
      rw: Math.floor(Math.random()*15000),
    },
    {
      name: 'M+17',
      rnn: Math.floor(Math.random()*15000),
      ro: Math.floor(Math.random()*15000),
      rn: Math.floor(Math.random()*15000),
      rw: Math.floor(Math.random()*15000),
    },
    {
      name: 'M+18',
      rnn: Math.floor(Math.random()*15000),
      ro: Math.floor(Math.random()*15000),
      rn: Math.floor(Math.random()*15000),
      rw: Math.floor(Math.random()*15000),
    },
    {
      name: 'M+19',
      rnn: Math.floor(Math.random()*15000),
      ro: Math.floor(Math.random()*15000),
      rn: Math.floor(Math.random()*15000),
      rw: Math.floor(Math.random()*15000),
    },
    {
      name: 'M+20',
      rnn: Math.floor(Math.random()*15000),
      ro: Math.floor(Math.random()*15000),
      rn: Math.floor(Math.random()*15000),
      rw: Math.floor(Math.random()*15000),
    },
    {
      name: 'M+21',
      rnn: Math.floor(Math.random()*15000),
      ro: Math.floor(Math.random()*15000),
      rn: Math.floor(Math.random()*15000),
      rw: Math.floor(Math.random()*15000),
    },
    {
      name: 'M+22',
      rnn: Math.floor(Math.random()*15000),
      ro: Math.floor(Math.random()*15000),
      rn: Math.floor(Math.random()*15000),
      rw: Math.floor(Math.random()*15000),
    },
    {
      name: 'M+23',
      rnn: Math.floor(Math.random()*15000),
      ro: Math.floor(Math.random()*15000),
      rn: Math.floor(Math.random()*15000),
      rw: Math.floor(Math.random()*15000),
    },
  ];
  const dataY3 = [
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
    {
      name: 'M+12',
      rnn: Math.floor(Math.random()*15000),
      ro: Math.floor(Math.random()*15000),
      rn: Math.floor(Math.random()*15000),
      rw: Math.floor(Math.random()*15000),
    },
    {
      name: 'M+13',
      rnn: Math.floor(Math.random()*15000),
      ro: Math.floor(Math.random()*15000),
      rn: Math.floor(Math.random()*15000),
      rw: Math.floor(Math.random()*15000),
    },
    {
      name: 'M+14',
      rnn: Math.floor(Math.random()*15000),
      ro: Math.floor(Math.random()*15000),
      rn: Math.floor(Math.random()*15000),
      rw: Math.floor(Math.random()*15000),
    },
    {
      name: 'M+15',
      rnn: Math.floor(Math.random()*15000),
      ro: Math.floor(Math.random()*15000),
      rn: Math.floor(Math.random()*15000),
      rw: Math.floor(Math.random()*15000),
    },
    {
      name: 'M+16',
      rnn: Math.floor(Math.random()*15000),
      ro: Math.floor(Math.random()*15000),
      rn: Math.floor(Math.random()*15000),
      rw: Math.floor(Math.random()*15000),
    },
    {
      name: 'M+17',
      rnn: Math.floor(Math.random()*15000),
      ro: Math.floor(Math.random()*15000),
      rn: Math.floor(Math.random()*15000),
      rw: Math.floor(Math.random()*15000),
    },
    {
      name: 'M+18',
      rnn: Math.floor(Math.random()*15000),
      ro: Math.floor(Math.random()*15000),
      rn: Math.floor(Math.random()*15000),
      rw: Math.floor(Math.random()*15000),
    },
    {
      name: 'M+19',
      rnn: Math.floor(Math.random()*15000),
      ro: Math.floor(Math.random()*15000),
      rn: Math.floor(Math.random()*15000),
      rw: Math.floor(Math.random()*15000),
    },
    {
      name: 'M+20',
      rnn: Math.floor(Math.random()*15000),
      ro: Math.floor(Math.random()*15000),
      rn: Math.floor(Math.random()*15000),
      rw: Math.floor(Math.random()*15000),
    },
    {
      name: 'M+21',
      rnn: Math.floor(Math.random()*15000),
      ro: Math.floor(Math.random()*15000),
      rn: Math.floor(Math.random()*15000),
      rw: Math.floor(Math.random()*15000),
    },
    {
      name: 'M+22',
      rnn: Math.floor(Math.random()*15000),
      ro: Math.floor(Math.random()*15000),
      rn: Math.floor(Math.random()*15000),
      rw: Math.floor(Math.random()*15000),
    },
    {
      name: 'M+23',
      rnn: Math.floor(Math.random()*15000),
      ro: Math.floor(Math.random()*15000),
      rn: Math.floor(Math.random()*15000),
      rw: Math.floor(Math.random()*15000),
    },
    {
      name: 'M+24',
      rnn: Math.floor(Math.random()*15000),
      ro: Math.floor(Math.random()*15000),
      rn: Math.floor(Math.random()*15000),
      rw: Math.floor(Math.random()*15000),
    },
    {
      name: 'M+25',
      rnn: Math.floor(Math.random()*15000),
      ro: Math.floor(Math.random()*15000),
      rn: Math.floor(Math.random()*15000),
      rw: Math.floor(Math.random()*15000),
    },
    {
      name: 'M+26',
      rnn: Math.floor(Math.random()*15000),
      ro: Math.floor(Math.random()*15000),
      rn: Math.floor(Math.random()*15000),
      rw: Math.floor(Math.random()*15000),
    },
    {
      name: 'M+27',
      rnn: Math.floor(Math.random()*15000),
      ro: Math.floor(Math.random()*15000),
      rn: Math.floor(Math.random()*15000),
      rw: Math.floor(Math.random()*15000),
    },
    {
      name: 'M+28',
      rnn: Math.floor(Math.random()*15000),
      ro: Math.floor(Math.random()*15000),
      rn: Math.floor(Math.random()*15000),
      rw: Math.floor(Math.random()*15000),
    },
    {
      name: 'M+29',
      rnn: Math.floor(Math.random()*15000),
      ro: Math.floor(Math.random()*15000),
      rn: Math.floor(Math.random()*15000),
      rw: Math.floor(Math.random()*15000),
    },
    {
      name: 'M+30',
      rnn: Math.floor(Math.random()*15000),
      ro: Math.floor(Math.random()*15000),
      rn: Math.floor(Math.random()*15000),
      rw: Math.floor(Math.random()*15000),
    },
    {
      name: 'M+31',
      rnn: Math.floor(Math.random()*15000),
      ro: Math.floor(Math.random()*15000),
      rn: Math.floor(Math.random()*15000),
      rw: Math.floor(Math.random()*15000),
    },
    {
      name: 'M+32',
      rnn: Math.floor(Math.random()*15000),
      ro: Math.floor(Math.random()*15000),
      rn: Math.floor(Math.random()*15000),
      rw: Math.floor(Math.random()*15000),
    },
    {
      name: 'M+33',
      rnn: Math.floor(Math.random()*15000),
      ro: Math.floor(Math.random()*15000),
      rn: Math.floor(Math.random()*15000),
      rw: Math.floor(Math.random()*15000),
    },
    {
      name: 'M+34',
      rnn: Math.floor(Math.random()*15000),
      ro: Math.floor(Math.random()*15000),
      rn: Math.floor(Math.random()*15000),
      rw: Math.floor(Math.random()*15000),
    },
    {
      name: 'M+35',
      rnn: Math.floor(Math.random()*15000),
      ro: Math.floor(Math.random()*15000),
      rn: Math.floor(Math.random()*15000),
      rw: Math.floor(Math.random()*15000),
    },
  ];

  let selectedDataRange: any = []

  switch(yearString){
    case "1":
      selectedDataRange = dataY1;
      break;
    case "2":
      selectedDataRange = dataY2;
      break;
    case '3':
      selectedDataRange = dataY3;
      break;
  }

  console.log(selectedDataRange)
  return (
    <div className="min-h-screen w-full py-12 flex justify-evenly items-center">
      <div className="relative w-full mx-auto text-white">
      <p className="font-extrabold text-5xl ml-48">KPIs</p>
        <div className="flex flex-row justify-evenly items-center">
          <Select onValueChange={setYearString}>
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
              <CardTitle>Utilisateurs année {yearString}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{Y1_USERS}</p>
            </CardContent>
          </Card>
          <Card className="w-max">
            <CardHeader>
              <CardTitle>Catalogue de jeux année {yearString}</CardTitle>
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
          <SalesComparison data={selectedDataRange}/>
        </div>
        
      </div>
    </div>
  );
};

export default Page;