import React from "react";
import ComposedCard from "../cards/ComposedCard";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["9h", "10h", "11h", "12h", "13h", "14h", "15h", "16h", "17h", "18h"],
  datasets: [
    {
      data: [12, 19, 13, 14, 8, 21, 17, 15, 11, 3],
      label: "Nombre de personnes",
      fill: false,
      backgroundColor: "#4F46E5",
      borderColor: "#4F46E520",
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    yAxis: {
      ticks: {
        beginAtZero: true,
        callback: (value: number) => `${value} pers.`,
      },
    },
  },
};

export default function PeopleChart() {
  return (
    <ComposedCard
      title="Nombre de personnes moyenne par salle"
      label="Salle C102"
      isCalendar
    >
      <Line data={data} options={options} />
    </ComposedCard>
  );
}
