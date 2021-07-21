import styled from "styled-components";

import Test from "../components/Test";
import GridLayout from "../components/GridLayout";
import Menu from "../components/Menu";

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
      <Menu/>
      <TextPrimary>Zeta Luti Enterprise - homepage</TextPrimary>
      <GridLayout>
        <Div key="a">
          <Test />
        </Div>

        <Div key="b">d</Div>
        <Div key="c">c</Div>
      </GridLayout>
    </div>
  );
}
