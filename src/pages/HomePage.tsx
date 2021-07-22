import styled from "styled-components";
import AuthenticatedRoute from "../layouts/AuthenticatedRoute";

const HighlightText = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.25rem;
  line-height: 2rem;
`;

const BoldText = styled.span`
  font-weight: bold;
`;

export default function HomePage() {
  const date = new Date().toLocaleDateString("fr-FR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  return (
    <AuthenticatedRoute>
      <div>
        <HighlightText>Bienvenue sur votre tableau de bord,</HighlightText>
        <p>
          Nous sommes actuellement le <BoldText>{date}</BoldText>
        </p>
      </div>
    </AuthenticatedRoute>
  );
}
