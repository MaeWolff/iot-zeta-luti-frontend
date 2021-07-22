import React from 'react'
import Card from "../Card";
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['9h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h', '18h'],
  datasets: [
    {
      data: [12, 19, 13, 14, 8, 21, 17, 15, 11, 3],
      label: 'salles ouvertes',
      fill: false,
      backgroundColor: '#4F46E5',
      borderColor: '#4F46E520',
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
        callback: (value: number) => `${value} salles`, 
      }
    }
  }
}

export default function PeopleChart() {
  return (
    <Card title='Nombre de salle ouvertes dans la journée par heure' label="Établissement" isCalendar>
      <Line data={data} options={options} />
    </Card>
  );
}
