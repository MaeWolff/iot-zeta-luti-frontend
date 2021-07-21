import styled from "styled-components";
import Card from "../components/Card";
import MapTemp from '../assets/map-temp.jpg';


// TODO: delete me! it's a test
const TextPrimary = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
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
