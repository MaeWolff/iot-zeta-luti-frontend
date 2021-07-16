import React from "react";
import styled from "styled-components";

// TODO: delete me! it's a test
const TextPrimary = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
`;

export default function HomePage() {
  return (
    <div>
      {/* TODO: delete me! */}
      <TextPrimary>Zeta Luti Enterprise - homepage</TextPrimary>
    </div>
  );
}
