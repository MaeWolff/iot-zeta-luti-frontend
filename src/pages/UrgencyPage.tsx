import ComposedCard from "../components/cards/ComposedCard";
import MapTemp from "../assets/map-temp.jpg";
import GridLayout from "../layouts/GridLayout";
import BaseCard from "../components/cards/BaseCard";
import Urgency from "../assets/svg/Urgency";
import AuthenticatedRoute from "../layouts/AuthenticatedRoute";
import styled from "styled-components";
import Spacer from "../components/Spacer";

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
    text: "Température élevée (C102)",
  },
  {
    type: 'dangerous',
    text: "Température élevée (A100)",
  },
  {
    type: 'dangerous',
    text: "Salle ouverte hors horraire d'ouvertue (C010)",
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
          label="2 en ce moment"
          isCalendar
        >
          <img src={MapTemp} alt="mapTemp" />
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