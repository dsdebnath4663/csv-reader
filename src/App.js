import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';

function App() {
  const [file, setFile] = useState(null); // State to store the file
  const [csvData, setCsvData] = useState([]); // State to store parsed data

  // File change handler
  const handleFileChange = (event) => {
    setFile(event.target.files[0]); // Set the selected file to state
  };

  // useEffect to parse the file whenever it changes
  useEffect(() => {
    if (file) {
      Papa.parse(file, {
        header: true, // Treat the first row as headers
        complete: function (results) {
          setCsvData(results.data); // Store parsed data in state
        },
        error: function (error) {
          console.error('Error reading CSV file:', error);
        },
      });
    }
  }, [file]); // Effect depends on `file`

  return (
    <div>
      <h1>CSV File Reader</h1>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <h2>CSV Data:</h2>
      <pre>{JSON.stringify(csvData, null, 2)}</pre>
    </div>
  );
}

export default App;
