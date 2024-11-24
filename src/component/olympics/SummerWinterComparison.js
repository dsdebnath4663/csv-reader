import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import JSONViewerMap from '../JSONViewerMap';
import JSONViewer from '../JSONViewer';

const processSummerWinterComparison = (data) => {

};


// Function to find the top sport by medal count for each country
const processTopSportsByCountry = (data) => {
  // Object to store the number of medals won by each country in different sports
  const sportsByCountry = {};

  data.forEach(entry => {
    if (entry.Medal !== 'No medal') {
      if (!sportsByCountry[entry.Team]) {
        sportsByCountry[entry.Team] = {};
      }

      if (!sportsByCountry[entry.Team][entry.Sport]) {
        sportsByCountry[entry.Team][entry.Sport] = 0;
      }

      sportsByCountry[entry.Team][entry.Sport]++;
    }
  });
  const result = Object.entries(sportsByCountry).map(([country, sports]) => {
    const topSport = Object.entries(sports).sort((a, b) => b[1] - a[1])[0];
    return {
      country: country,
      sport: topSport[0], 
      count: topSport[1] 
    };
  });

  // Return the final array of countries and their top sports
  return result;
};


const SummerWinterComparison = ({ data }) => {
  const sportsByCountry = processTopSportsByCountry(data);


  return (


    <JSONViewerMap jsonData={sportsByCountry} />


  );
};

export default SummerWinterComparison;
