// src/components/GoogleSheetData.tsx
import React, { useEffect, useState } from 'react';
import { fetchGoogleSheetData } from '../../services/googleSheetsService'

const GoogleSheetData: React.FC = () => {
  const [data, setData] = useState<string[][]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const sheetData = await fetchGoogleSheetData();
        setData(sheetData);
      } catch (error) {
        setError('Failed to fetch data from Google Sheets');
      }
    };

    getData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }
console.log(data)
  return (
    <div>
      <h1>Google Sheet Data</h1>
      <table>
        <thead>
          <tr>
            {data[0] && data[0].map((header, index) => <th key={index}>{header}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.slice(1).map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GoogleSheetData;
