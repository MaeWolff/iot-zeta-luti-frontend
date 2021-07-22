import React from "react";
import ComposedCard from "../cards/ComposedCard";
import { Bar } from "react-chartjs-2";

const data = {
  labels: ["9h", "10h", "11h", "12h", "13h", "14h", "15h", "16h", "17h", "18h"],
  datasets: [
    {
      data: [12, 19, 13, 14, 8, 21, 17, 15, 11, 3],
      label: "Température en °C",
      fill: false,
      backgroundColor: "#4F46E5",
      borderRadius: 6,
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
        callback: (value: number) => `${value} °C`,
      },
    },
  },
};

export default function PeopleChart() {
  return (
    <ComposedCard title="Température moyenne" label="Établissement" isCalendar>
      <Bar data={data} options={options} />
    </ComposedCard>
  );
}
