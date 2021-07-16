import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Responsive as ResponsiveGridLayout } from "react-grid-layout";

import Test from "../components/Test";

// TODO: delete me! it's a test
const TextPrimary = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
`;

const Div = styled.div`
  border: 1px solid red;
`;

export default function HomePage() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
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
    <div>
      <TextPrimary>Zeta Luti Enterprise - homepage</TextPrimary>
      <ResponsiveGridLayout
        width={width}
        rowHeight={30}
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4 }}
      >
        <Div key="a">
          <Test />
        </Div>

        <Div key="b">d</Div>
        <Div key="c">c</Div>
      </ResponsiveGridLayout>
    </div>
  );
}
