// MedalTrendChart.js

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const ROW_LIMIT = 10;

const processData = (data) => {
  // Create an empty object to store medal counts
  const medalCounts = {};
  // Define the maximum number of rows to display
  // Loop through each entry in the data
  data.forEach(entry => {
    // Check if the entry has a medal (not 'No medal')
    if (entry.Medal !== 'No medal') {
      // Initialize the year object if it doesn't exist
      if (!medalCounts[entry.Year]) {
        medalCounts[entry.Year] = {};
      }

      // Initialize the team count if it doesn't exist
      if (!medalCounts[entry.Year][entry.Team]) {
        medalCounts[entry.Year][entry.Team] = 0;
      }

      // Increment the medal count for the team
      medalCounts[entry.Year][entry.Team]++;
    }
  });

  // Format the medal counts into an array of objects
  const formattedData = [];

  // Loop through each year in medalCounts
  for (const year in medalCounts) {
    // Create an object for each year with the team counts
    const yearData = { year };

    // Add team counts to the yearData object
    for (const team in medalCounts[year]) {
      yearData[team] = medalCounts[year][team];
    }

    // Add the yearData object to the formattedData array
    formattedData.push(yearData);
  }

  return formattedData;
};


const MedalTrendChart = ({ data }) => {

  const processedData = processData(data);

  // Check if data is loading or empty
  if (data.length === 0) {
    return <div>Loading data, please wait...</div>;
  }

  if (processedData.length === 0) {
    return <div>No medal data available.</div>;
  }
  const years = Object.keys(data);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Country/Team</th>
            <th>Medal Count</th>
          </tr>
        </thead>
        <tbody>
          {years.slice(0, ROW_LIMIT).map(year => (
            Object.entries(data[year]).map(([team, count]) => (
              <tr key={`${year}-${team}`}>
                <td>{year}</td>
                <td>{team}</td>
                <td>{count}</td>
              </tr>
            ))
          ))}
        </tbody>
      </table>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={processedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          {Object.keys(processedData[0] || {}).filter(key => key !== 'year').map(team => (
            <Line key={team} type="monotone" dataKey={team} stroke="#8884d8" />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div >
  );
};

export default MedalTrendChart;
