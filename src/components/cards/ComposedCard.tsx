import React, { ReactNode } from "react";
import styled from "styled-components";
import Calendar from "../../assets/svg/Calendar";
import Dots from "../../assets/svg/Dots";
import Spacer from "../Spacer";
import BaseCard from "./BaseCard";

const Container = styled(BaseCard)`
  img {
    height: 100%;
    width: 100%;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  background: white;
`;

const Title = styled.p`
  padding-bottom: 0.5em;
`;

const Label = styled.div`
  width: max-content;
  color: #f0544f;
  background: #f0544f20;
  border-radius: 0.5em;
  padding: 0.5em 0.75em;
  font-size: 0.75rem;
`;

const Aside = styled.aside`
  min-height: 100%;
  display: flex;
  align-items: center;
`;

const DotsStyled = styled(Dots)`
  margin-left: 1em;
`;

type Props = {
  children: ReactNode;
  title?: string;
  label?: string;
  isCalendar?: boolean;
};

export default function ComposedCard({
  children,
  title,
  label,
  isCalendar,
}: Props) {
  return (
    <Container>
      <Header>
        <div>
          <Title>{title}</Title>
          <Label>{label}</Label>
        </div>
        <Aside>
          {isCalendar && <Calendar />}
          <DotsStyled />
        </Aside>
      </Header>

      <Spacer axis="vertical" size={1} />

      {children}
    </Container>
  );
}
