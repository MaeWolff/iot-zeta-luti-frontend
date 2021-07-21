import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import Electricity from "../assets/svg/Electricity";
import Temperature from "../assets/svg/Temperature";
import Urgency from "../assets/svg/Urgency";
import People from "../assets/svg/People";
import Locking from "../assets/svg/Locking";
import Humidity from "../assets/svg/Humidity";
import Spacer from "./Spacer";

const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  height: 100vh;
  width: 100%;
  background-color: white;
  box-shadow: 1px 0px 6px rgba(185, 175, 175, 0.1);

  ul {
    width: 100%;
  }
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
    margin-top: 1em;
    font-size: 0.75rem;
    color: black;
  }
`;

const itemsOfMenu = [
  {
    path: "/",
    Icon: Humidity,
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
];

export default function Menu() {
  const location = useLocation();

  return (
    <Container>
      <ul>
        {itemsOfMenu.map(({ path, Icon, text }) => (
          <Link to={path} key={`item-${path}`}>
            <Item isActive={location.pathname === path}>
              <Spacer axis="horizontal" size={1} />

              <Icon />

              <Spacer axis="horizontal" size={0.5} />

              <p>{text}</p>
            </Item>
          </Link>
        ))}
      </ul>
    </Container>
  );
}
