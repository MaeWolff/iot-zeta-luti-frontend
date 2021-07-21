import React from 'react'
import Card from "../Card";
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['19/07', '20/07', '21/07', '22/07', '23/07', '24/07', '25/07'],
  datasets: [
    {
      data: [1893, 2100, 2200, 2250, 1943, 670, 1034],
      label: 'Consomation électrique en kWh',
      fill: false,
      backgroundColor: '#A5B4FC',
      borderRadius: 6
    },
  ],
};
  
const options = {
  plugins: {
    legend: {
      display: false,
    }
  },
  scales: {
    yAxis: {
      ticks: {
        beginAtZero: true,
        callback: (value: number) => `${value} kWh`, 
      }
    }
  }
}

export default function PeopleChart() {
  return (
    <Card title='Consommation d’électricité moyenne hebdomadaire' label="Établissement" isCalendar>
      <Bar data={data} options={options} />
    </Card>
  );
}
