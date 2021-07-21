import styled from "styled-components";

import Test from "../components/Test";
import Card from "../components/Card";
import MapTemp from '../assets/map-temp.jpg';


// TODO: delete me! it's a test
const TextPrimary = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
`;

const Div = styled.div`
  border: 1px solid red;
`;

export default function HomePage() {
  return (
    <div>

      <TextPrimary>Zeta Luti Enterprise - homepage</TextPrimary>
      <Card title='Température actuelle' label="27 totos en moyenne">
        <img src={MapTemp}/>
      </Card>
    </div>
  );
}
