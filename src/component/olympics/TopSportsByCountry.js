import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import JSONViewer from "../JSONViewer";
import JSONViewerMap from "../JSONViewerMap";


const processTopSportsByCountry = (data) => {
  const sportsByCountry = {};

  data.forEach(entry => {
    if (entry.Medal !== 'No medal') {
      if (!sportsByCountry[entry.Team]) {
        sportsByCountry[entry.Team] = {};
        console.log("sportsByCountry : ", sportsByCountry)
      }
      if (!sportsByCountry[entry.Team][entry.Sport]) {
        sportsByCountry[entry.Team][entry.Sport] = 0;
      }
      sportsByCountry[entry.Team][entry.Sport]++;
    }
  });

  return Object.entries(sportsByCountry).map(([country, sports]) => {
    const topSport = Object.entries(sports).sort((a, b) => b[1] - a[1])[0];
    return { country, sport: topSport[0], count: topSport[1] };
  });

}


const TopSportsByCountry = ({ data }) => {

  const topSportsData = processTopSportsByCountry(data);

  return (

    <>
      {/* <JSONViewerMap jsonData={topSportsData} limit={1} /> */}

      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={topSportsData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="country" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer></>
  );
}
export default TopSportsByCountry;


