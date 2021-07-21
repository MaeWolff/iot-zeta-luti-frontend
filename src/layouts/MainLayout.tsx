import React, { ReactNode } from "react";
import styled from "styled-components";
import Menu from "../components/Menu";
import { useLocation } from "react-router-dom";

const Container = styled.main<{ withMenu?: boolean }>`
  display: grid;
  grid-template-columns: ${({ withMenu }) => (withMenu ? "10% auto" : "1fr")};
  height: 100%;
`;

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  const location = useLocation();

  // NOTE: add the paths where we don't want to display the menu
  const pathWithoutMenu = ["/signin"];
  const isMenuDisplayed = !pathWithoutMenu.includes(location.pathname);

  return (
    <Container withMenu={isMenuDisplayed}>
      {isMenuDisplayed && <Menu />}
      {children}
    </Container>
  );
}
