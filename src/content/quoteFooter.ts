import Papa from 'papaparse';
// Import the CSV content as a raw string using Vite's ?raw import syntax
import csvRawContent from '../assets/quotes.csv?raw'; 

// Define the structure matching your CSV headers
export interface QuoteItem {
  Author: string;
  Book: string;
  Quote: string;
}

export const getRandomQuote = (): QuoteItem | null => {
  // Parse the raw CSV string synchronously
  const parsed = Papa.parse<QuoteItem>(csvRawContent, {
    header: true,         // Uses "Author", "Book", "Quote" as object keys
    skipEmptyLines: true,
  });

  const quotes = parsed.data;

  if (quotes.length === 0) {
    return null;
  }

  // Pick a random index from the parsed array
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};
