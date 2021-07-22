import ComposedCard from "../components/cards/ComposedCard";
import PeopleChart from "../components/chartCard/PeopleChart";
import AuthenticatedRoute from "../layouts/AuthenticatedRoute";
import GridLayout from "../layouts/GridLayout";
import MapTemp from "../assets/map-temp.jpg";

export default function PeoplePage() {
  return (
    <AuthenticatedRoute>
      <GridLayout>
        <ComposedCard
          title="Nombre de personne dans l’établissement"
          label="270 en ce moment"
          isCalendar
        >
          <img src={MapTemp} alt="mapTemp" />
        </ComposedCard>

        <PeopleChart />
      </GridLayout>
    </AuthenticatedRoute>
  );
}
