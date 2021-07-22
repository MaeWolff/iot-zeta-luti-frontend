import React, { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  background: white;
  height: fit-content;
  padding: 1.25em;
  box-shadow: 0px 0px 3px rgba(230, 232, 249, 0.25);
  border-radius: 0.5em;
`;

type BaseCardProps = {
  children: ReactNode | JSX.Element;
  className?: string;
};
export default function BaseCard({ children, className }: BaseCardProps) {
  return <Container className={className}>{children}</Container>;
}
