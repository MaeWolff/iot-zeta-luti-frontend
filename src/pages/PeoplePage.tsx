import ComposedCard from "../components/cards/ComposedCard";
import PeopleChart from "../components/chartCard/PeopleChart";
import AuthenticatedRoute from "../layouts/AuthenticatedRoute";
import GridLayout from "../layouts/GridLayout";
import PeopleMap from "../assets/svg/PeopleMap";

export default function PeoplePage() {
  return (
    <AuthenticatedRoute>
      <GridLayout>
        <ComposedCard
          title="Nombre de personne dans l’établissement"
          label="270 en ce moment"
          isCalendar
        >
          <PeopleMap />
        </ComposedCard>

        <PeopleChart />
      </GridLayout>
    </AuthenticatedRoute>
  );
}
