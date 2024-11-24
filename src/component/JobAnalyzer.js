import React, { useState, useEffect } from 'react';

function JobAnalyzer({ csvData }) {
  const [yearlyStats, setYearlyStats] = useState([]);
  const rowLimit = 10;

  useEffect(() => {
    if (csvData.length > 0) {
      const yearStats = csvData.reduce((acc, item) => {
        const year = item.work_year;
        const salary = parseFloat(item.salary_in_usd);

        if (!acc[year]) {
          acc[year] = { totalJobs: 0, totalSalary: 0 };
        }

        acc[year].totalJobs += 1;
        acc[year].totalSalary += salary;

        return acc;
      }, {});

      // Calculate averages
      const updatedYearStats = Object.keys(yearStats).map(year => {
        const { totalJobs, totalSalary } = yearStats[year];
        return {
          year,
          totalJobs,
          averageSalary: (totalSalary / totalJobs).toFixed(2), // Format average salary to 2 decimal places
        };
      });

      setYearlyStats(updatedYearStats); // Store processed data in state
    }
  }, [csvData]);

  return (
    <div>
      <h1>Employee Data Table</h1>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Jobs</th>
            <th>Average Salary (USD)</th>
          </tr>
        </thead>
        <tbody>
          {yearlyStats.length > 0 && yearlyStats.slice(0, rowLimit).map((item, index) => (
            <tr key={index}>
              <td>{item.year}</td>
              <td>{item.totalJobs}</td>
              <td>{item.averageSalary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default JobAnalyzer;
