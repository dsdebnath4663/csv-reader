import { useEffect } from 'react';
import Papa from 'papaparse';

function CSVReader({ csvFilePath, onDataParsed }) {
  useEffect(() => {
    const fetchCSV = async () => {
      try {
        const response = await fetch(csvFilePath); // Fetch the CSV from the provided path
        const csvText = await response.text();

        Papa.parse(csvText, {
          header: true, // Treat the first row as headers
          complete: function (results) {
            onDataParsed(results.data); // Pass parsed data to parent
          },
          error: function (error) {
            console.error('Error parsing CSV file:', error);
          },
        });
      } catch (error) {
        console.error('Error fetching CSV file:', error);
      }
    };

    fetchCSV(); // Call the function on component load
  }, [csvFilePath, onDataParsed]);

  return null; // This component does not render anything
}

export default CSVReader;
