import React, { useState, useEffect, ReactNode } from "react";
import { Responsive as ResponsiveGridLayout } from "react-grid-layout";

type Props = {
  // NOTE: https://stackoverflow.com/questions/58123398/when-to-use-jsx-element-vs-reactnode-vs-reactelement
  children: ReactNode;
};

export default function GridLayout({ children }: Props) {
  // NOTE: `- window.innerWidth * 0.1` represents the width of menu (10%)
  const [width, setWidth] = useState(
    window.innerWidth - window.innerWidth * 0.1
  );

  useEffect(() => {
    const handleResize = () =>
      setWidth(window.innerWidth - window.innerWidth * 0.1);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  const layouts = {
    lg: [
      { i: "a", x: 0, y: 0, w: 1, h: 1 },
      { i: "b", x: 1, y: 0, w: 3, h: 2 },
      { i: "c", x: 4, y: 0, w: 1, h: 2 },
    ],
    md: [
      { i: "a", x: 0, y: 0, w: 1, h: 5 },
      { i: "b", x: 1, y: 0, w: 3, h: 2 },
      { i: "c", x: 4, y: 0, w: 1, h: 2 },
    ],
    sm: [
      { i: "a", x: 0, y: 0, w: 1, h: 1 },
      { i: "b", x: 1, y: 0, w: 3, h: 2 },
      { i: "c", x: 4, y: 0, w: 1, h: 2 },
    ],
  };

  return (
    <ResponsiveGridLayout
      width={width}
      rowHeight={30}
      layouts={layouts}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4 }}
    >
      {children}
    </ResponsiveGridLayout>
  );
}
