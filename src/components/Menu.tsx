import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Electricity from "../assets/svg/Electricity";
import Temperature from "../assets/svg/Temperature";
import Urgency from "../assets/svg/Urgency";
import People from "../assets/svg/People";
import Locking from "../assets/svg/Locking";
import Humidity from "../assets/svg/Humidity";

const Header = styled.header`
  border: 1px solid red;
  height: 100vh;
  width: 7%;
  transition: width 0.3s ease-in;
  &:hover {
    width: 15%;
  }
`;

export default function Menu() {
  return (
    <Header>
      <ul>
        <li>
          <Link to="/1">
            <Humidity />
          </Link>
        </li>
        <li>
          <Link to="/1">
            <Temperature />
          </Link>
        </li>
        <li>
          <Link to="/1">
            <People />
          </Link>
        </li>
        <li>
          <Link to="/1">
            <Electricity />
          </Link>
        </li>
        <li>
          <Link to="/1">
            <Locking />
          </Link>
        </li>
        <li>
          <Link to="/1">
            <Urgency />
          </Link>
        </li>
      </ul>
    </Header>
  );
}
