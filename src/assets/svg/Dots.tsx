import React from "react";

type Props = {
  className?: string;
};

export default function Dots({ className }: Props) {
  return (
    <svg
      width="5"
      height="19"
      viewBox="0 0 5 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="2.75931" cy="9.50003" r="2.24075" fill="#D1D5DB" />
      <circle cx="2.75931" cy="3.09793" r="2.24075" fill="#D1D5DB" />
      <circle cx="2.75931" cy="15.9021" r="2.24075" fill="#D1D5DB" />
    </svg>
  );
}
