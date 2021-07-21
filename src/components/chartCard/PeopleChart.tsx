import React from 'react'
import Card from "../Card";
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['9h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h', '18h'],
  datasets: [
    {
      data: [12, 19, 13, 14, 8, 21, 17, 15, 11, 3],
      label: 'Nombre de personnes',
      fill: false,
      backgroundColor: '#A5B4FC',
      borderColor: '#A5B4FC20',
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
        callback: (value: number) => `${value} pers.`, 
      }
    }
  }
}

export default function PeopleChart() {
  return (
    <Card title='Nombre de personnes moyenne par salle' label="Salle C102" isCalendar>
      <Line data={data} options={options} />
    </Card>
  );
}
