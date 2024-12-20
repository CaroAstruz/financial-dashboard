"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import React, { useEffect, useState } from "react";
import { fetchGoogleSheetData } from "@/services/googleSheetsService";
interface SalesComparisonProps {
  selectedDataRange: number;
}

const SalesComparison: React.FC<SalesComparisonProps> = ({ selectedDataRange }) => {
  const [data, setData] = useState<any[]>([]);
  const [opacity, setOpacity] = useState({
    rn: 1,
    rnn: 1,
    ro: 1,
    rw: 1,
  });

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
      } catch (error) {
        console.error("Error fetching data from Google Sheets:", error);
      }
    };

    getData();
  }, []);

  const selectedData = data.map((row: any) => {
    return {
      name: "M+" + row.NB, // X-axis data
      rnn: parseInt(row.Revenue_No_Used, 10), // Line data for 'Revenus sans marché de l'occasion'
      rw: parseInt(row.Revenue_WNG, 10),      // Line data for 'Revenus Why Not Games'
      rn: parseInt(row.revenue_New, 10),      // Line data for 'Neuf'
      ro: parseInt(row.Revenue_Used, 10),     // Line data for 'Occasion'
    };
  });


  const splicedData = selectedData.splice(0, selectedDataRange)

  const handleMouseEnter = (o: any) => {
    const { dataKey } = o;
    setOpacity((op) => ({ ...op, [dataKey]: 0.5 }));
  };

  const handleMouseLeave = (o: any) => {
    const { dataKey } = o;
    setOpacity((op) => ({ ...op, [dataKey]: 1 }));
  };

  return (
    <div style={{ width: "100%" }} className="flex-parent">
      <h2>Revenus sans marché de l'occasion</h2>
      <ResponsiveContainer height={200} className="flex-child">
        <LineChart
          width={500}
          height={300}
          data={splicedData}
          syncId="sales"
          margin={{
            top: 5,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" className="text-xs" />
          <YAxis tickCount={4} tickLine={false} className="text-xs" />
          <Line
            type="monotone"
            name="Revenus"
            dataKey="rnn"
            strokeOpacity={opacity.rnn}
            stroke="#82ca9d"
          />
          <Tooltip labelStyle={{ color: "black" }} />
        </LineChart>
      </ResponsiveContainer>
      <h2>Revenus Why Not Games</h2>
      <ResponsiveContainer height={200} className="flex-child">
        <LineChart
          width={500}
          height={300}
          data={splicedData}
          syncId="sales"
          margin={{
            top: 5,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" className="text-xs" />
          <YAxis tickCount={4} tickLine={false} className="text-xs" />
          <Tooltip labelStyle={{ color: "black" }} />
          <Line
            type="monotone"
            name="Revenus"
            dataKey="rw"
            strokeOpacity={opacity.rw}
            stroke="#FF5900"
          />
        </LineChart>
      </ResponsiveContainer>
      <h2>Détails revenus neuf et occasion</h2>
      <ResponsiveContainer height={200} className="flex-child">
        <LineChart
          width={500}
          height={300}
          data={splicedData}
          syncId="sales"
          margin={{
            top: 5,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" className="text-xs" />
          <YAxis tickCount={4} tickLine={false} className="text-xs" />
          <Tooltip labelStyle={{ color: "black" }} />
          <Legend
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <Line
            type="monotone"
            name="Neuf"
            dataKey="rn"
            strokeOpacity={opacity.rn}
            stroke="#FFBD99"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            name="Occasion"
            dataKey="ro"
            strokeOpacity={opacity.ro}
            stroke="#D566AF"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesComparison;
