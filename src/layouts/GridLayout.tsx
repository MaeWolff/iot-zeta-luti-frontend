import React, { ReactNode } from 'react'
import styled from "styled-components";

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  grid-gap: 2em;
  height: 100%;
`;

type Props = {
    children: ReactNode;
};

export default function GridLayout({ children }: Props) {
    return (
        <GridWrapper>
            {children}
        </GridWrapper>
    )
}
