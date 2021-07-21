import React, { ReactNode } from "react";
import styled from "styled-components";
import Menu from "../components/Menu";

const Container = styled.main`
  display: grid;
  grid-template-columns: 10% auto;
  height: 100%;
`;

const Wrapper = styled.div`
  padding: 1em 2em;
`;

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <Container>
      <Menu />
      <Wrapper>
        {children}
      </Wrapper>
    </Container>
  );
}
