import React from 'react';
import { Bar, Doughnut, Bubble } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the elements
ChartJS.register(
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const Dashboard = () => {
  // Data for the charts
  const barData = {
    labels: ['Jan-Feb', 'Mar-Apr', 'May-Jun', 'Jul-Aug', 'Sep-Oct', 'Nov-Dec'],
    datasets: [
      {
        label: 'United States',
        data: [12000, 15000, 13000, 14000, 10000, 9000],
        backgroundColor: 'rgba(255, 206, 86, 0.6)',
      },
      {
        label: 'Australia',
        data: [5000, 7000, 6000, 8000, 4000, 6000],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Canada',
        data: [4000, 6000, 7000, 5000, 4000, 5000],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
      {
        label: 'United Kingdom',
        data: [7000, 8000, 9000, 7000, 8000, 10000],
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
      },
    ],
  };

  const doughnutData = {
    labels: ['Referral', 'Direct', 'Organic Search'],
    datasets: [
      {
        data: [300, 150, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const bubbleData = {
    datasets: [
      {
        label: 'United States',
        data: [{ x: 200, y: 12, r: 25 }],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
      {
        label: 'Australia',
        data: [{ x: 400, y: 10, r: 15 }],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
      {
        label: 'Canada',
        data: [{ x: 600, y: 8, r: 20 }],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'United Kingdom',
        data: [{ x: 800, y: 14, r: 30 }],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
    ],
  };

  return (
    <div className="dashboard">
      <h2>Executive Dashboard</h2>
      <div className="filters">
        {/* Filters for date range, services, posts */}
      </div>
      <div className="dashboard-grid">
        <div className="card">
          <h3>New Wins</h3>
          <p>230</p>
          <p><span className="increase">↑ 25%</span> vs previous 30 days</p>
        </div>
        <div className="card">
          <h3>Trial: Win Rate</h3>
          <p>9.86%</p>
          <p><span className="increase">↑ 25%</span> vs previous 30 days</p>
        </div>
        <div className="card">
          <h3>New MRR</h3>
          <p>$25,690</p>
          <p><span className="increase">↑ 8.7%</span> vs previous 30 days</p>
        </div>
        <div className="card">
          <h3>Page Views</h3>
          <Doughnut data={doughnutData} />
        </div>
        <div className="card">
          <h3>MRR Stats by Country</h3>
          <Bubble data={bubbleData} />
        </div>
        <div className="card">
          <h3>MRR</h3>
          <Bar data={barData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
