"use client";

import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title);

const PopulationChart = ({ population }: { population: { year: number; value: number }[] }) => {
  const years = population ? population.map((data) => data.year) : [];
  const values = population ? population.map((data) => data.value) : [];

  const chartData = {
    labels: years,
    datasets: [
      {
        label: 'Population',
        data: values,
        backgroundColor: 'rgba(180, 111, 254)',
        borderColor: 'rgba(153, 28, 155)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="population-chart-container">
      <Bar
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Population',
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: 'Year',
              },
            },
            y: {
              title: {
                display: true,
                text: 'Population',
              },
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
};

export default PopulationChart;
