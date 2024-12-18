// src/services/googleSheetsService.ts
import axios from 'axios';

const API_KEY = 'AIzaSyDNFRXtQLAsBKPaXbPu61MJEEU4kdttjrM';
const SPREADSHEET_ID = '1thZICYiZYWBFLk3vxX_DF9pOjf8T29KtKiGeGC4eI2I';
const SHEET_NAME = 'Price evolution';

export const fetchGoogleSheetData = async () => {
  try {
    const response = await axios.get(
      `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`
    );
    return response.data.values;
  } catch (error) {
    console.error('Error fetching data from Google Sheets:', error);
    throw error;
  }
};
