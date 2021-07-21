import React from "react";

type Props = {
  key?: string | number;
  dataGrid?: any;
  className?: string;
};

// TODO: remove this file or replace by the real component
export default function Test({ key, dataGrid, className }: Props) {
  return (
    <div
      className={className}
      key={key}
      data-grid={dataGrid}
      style={{width: '600px'}}
    >
      a
    </div>
  );
}
