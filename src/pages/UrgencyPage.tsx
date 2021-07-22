import ComposedCard from "../components/cards/ComposedCard";
import MapTemp from "../assets/map-temp.jpg";
import GridLayout from "../layouts/GridLayout";
import AuthenticatedRoute from "../layouts/AuthenticatedRoute";

export default function Urgency() {
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
      </GridLayout>
    </AuthenticatedRoute>
  );
}
