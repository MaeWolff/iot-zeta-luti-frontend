import ComposedCard from "../components/cards/ComposedCard";
import GridLayout from "../layouts/GridLayout";
import BaseCard from "../components/cards/BaseCard";
import Urgency from "../assets/svg/Urgency";
import AuthenticatedRoute from "../layouts/AuthenticatedRoute";
import styled from "styled-components";
import Spacer from "../components/Spacer";
import UrgencyMap from "../assets/svg/UrgencyMap";

const UrgencyWrapper = styled.div`
  display: flex;
  align-items: center;
`

const UrgencySvg = styled(Urgency)`
    width: 2em;
    min-width: 2em;
`;

const IncidenciesList = [
  {
    type: 'dangerous',
    text: "Température élevée (A002)",
  },
  {
    type: 'dangerous',
    text: "Température élevée (B003)",
  },
  {
    type: 'dangerous',
    text: "Salle ouverte hors horraire d'ouvertue (C005)",
  },
  {
    type: 'warning',
    text: "Lumière allumée hors periode d’ouverture (A008)",
  },
  {
    type: 'warning',
    text: "Lumière allumée hors periode d’ouverture (B101)",
  },
];

export default function UrgencyPage() {
  return (
    <AuthenticatedRoute>
      <GridLayout>
        <ComposedCard
          title="Nombre d’incident en cours"
          label="3 en ce moment"
          isCalendar
        >
          <UrgencyMap />
        </ComposedCard>

        <div>

        {IncidenciesList.map(({ type, text }) => (
          <>
            <BaseCard>
              <UrgencyWrapper>
                <UrgencySvg color={type === "dangerous" ? "#FF3737" : "#FF9900"}/>
                <Spacer axis="horizontal" size={1} />
                <p>{text}</p>
              </UrgencyWrapper>
            </BaseCard>

            <Spacer axis="vertical" size={1} />
          </>
        ))}

        </div>
      </GridLayout>
    </AuthenticatedRoute>
  );
}