import React from "react";

type Props = {
  key?: string | number;
  dataGrid?: any;
  className?: string;
};

export default function Test({ key, dataGrid, className }: Props) {
  return (
    <div
      className={className}
      key={key}
      data-grid={dataGrid}
      style={{ backgroundColor: "red" }}
    >
      a
    </div>
  );
}
