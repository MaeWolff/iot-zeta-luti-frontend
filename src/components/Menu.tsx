import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import Electricity from "../assets/svg/Electricity";
import Temperature from "../assets/svg/Temperature";
import Admin from "../assets/svg/Admin";
import Urgency from "../assets/svg/Urgency";
import People from "../assets/svg/People";
import Locking from "../assets/svg/Locking";
import Home from "../assets/svg/Home";
import Spacer from "./Spacer";

const Container = styled.header`
  display: grid;
  grid-template-rows: 1em auto;
  grid-gap: 4em;
  align-self: center;
  height: 100vh;
  width: 100%;
  background-color: white;
  box-shadow: 1px 0px 6px rgba(185, 175, 175, 0.1);

  p {
    margin-left: 1em;
  }
  ul {
    width: 100%;
  }
`;

const Logo = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: bold;
  text-decoration: ${({ theme }) => theme.colors.primary} wavy underline;
`;

const Item = styled.li<{ isActive: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  padding: 1em 0;
  background-color: ${({ isActive }) => isActive && "#4F46E520"};

  p {
    line-height: 0.75rem;
    font-size: 0.75rem;
  }

  svg {
    width: 1.5em;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.primaryLight};
    transition: background 0.2s;
  }
`;

const itemsOfMenu = [
  {
    path: "/",
    Icon: Home,
    text: "Acceuil",
  },
  {
    path: "/temperature",
    Icon: Temperature,
    text: "Température",
  },
  {
    path: "/people",
    Icon: People,
    text: "Présence",
  },
  {
    path: "/electricity",
    Icon: Electricity,
    text: "Eléctricité",
  },
  {
    path: "/locking",
    Icon: Locking,
    text: "Vérouillage",
  },
  {
    path: "/urgency",
    Icon: Urgency,
    text: "Urgence",
  },
  {
    path: "/admin",
    Icon: Admin,
    text: "Admin",
  },
];

export default function Menu() {
  const location = useLocation();

  return (
    <Container>
      <div>
        <Spacer axis="vertical" size={1} />

        <Logo>ZetaLuti.</Logo>
      </div>

      <ul>
        {itemsOfMenu.map(({ path, Icon, text }) => (
          <Link to={path} key={`item-${path}`}>
            <Item isActive={location.pathname === path}>
              <Spacer axis="horizontal" size={1} />

              <Icon />

              <p>{text}</p>
            </Item>
          </Link>
        ))}
      </ul>
    </Container>
  );
}
