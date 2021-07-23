import styled from "styled-components";
import AuthenticatedRoute from "../layouts/AuthenticatedRoute";
import BaseCard from "../components/cards/BaseCard";
import Spacer from "../components/Spacer";

const HighlightText = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.25rem;
  line-height: 2rem;
`;

const BoldText = styled.span`
  font-weight: bold;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const BiggerText = styled.p`
  font-size: 2rem;
  display: flex;
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

        <Spacer axis="vertical" size={2} />

        <FlexRow>
          <BaseCard>
            <p>Nombre de personnes dans l’établissement</p>

            <Spacer axis="vertical" size={1} />

            <BiggerText>
              <span>👫</span>
              <Spacer axis="horizontal" size={0.5} />
              344
            </BiggerText>
          </BaseCard>

          <Spacer axis="horizontal" size={1} />

          <BaseCard>
            <p>Température moyenne</p>

            <Spacer axis="vertical" size={1} />

            <BiggerText>
              <span>🔥</span>
              <Spacer axis="horizontal" size={0.5} />
              24°C
            </BiggerText>
          </BaseCard>

          <Spacer axis="horizontal" size={1} />

          <BaseCard>
            <p>Taux d'humidité moyen</p>

            <Spacer axis="vertical" size={1} />

            <BiggerText>
              <span>💧</span>
              <Spacer axis="horizontal" size={0.5} />
              70%
            </BiggerText>
          </BaseCard>
        </FlexRow>
      </div>
    </AuthenticatedRoute>
  );
}
