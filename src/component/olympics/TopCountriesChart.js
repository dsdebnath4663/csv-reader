import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import JSONViewer from '../JSONViewer';

const processTopCountries = (data) => {
  const medalCounts = {};
  data.forEach(entry => {
    if (entry.Medal !== 'No medal' && entry.Year >= '2014' && entry.Year <= '2024') {
      if (!medalCounts[entry.Team]) {
        medalCounts[entry.Team] = 0;
      }
      medalCounts[entry.Team]++;
    }
  });
  const sortedCountries = Object.entries(medalCounts)
    .map(([country, count]) => ({ country, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);


  return sortedCountries;

};
const TopCountriesChart = ({ data }) => {

  const topCountries = processTopCountries(data);

  // Check if data is loading or empty
  if (data.length === 0) {
    return <div>Loading data, please wait...</div>;
  }

  if (topCountries.length === 0) {
    return <div>No country data available.</div>;
  }


  return (
    <JSONViewer jsonData={topCountries} />

    // <ResponsiveContainer width="100%" height={400}>
    //   <BarChart data={topCountries}>
    //     <CartesianGrid strokeDasharray="3 3" />
    //     <XAxis dataKey="country" />
    //     <YAxis />
    //     <Tooltip />
    //     <Legend />
    //     <Bar dataKey="count" fill="#8884d8" />
    //   </BarChart>
    // </ResponsiveContainer>

  );

};



export default TopCountriesChart;