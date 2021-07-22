import ComposedCard from "../components/cards/ComposedCard";
import ElectricityChart from "../components/chartCard/ElectricityChart";
import GridLayout from "../layouts/GridLayout";
import AuthenticatedRoute from "../layouts/AuthenticatedRoute";
import MapTemp from "../assets/map-temp.jpg";

export default function ElectricityPage() {
  return (
    <AuthenticatedRoute>
      <GridLayout>
        <ComposedCard
          title="Nombre de salle éclairée"
          label="27 en ce moment"
          isCalendar
        >
          <img src={MapTemp} alt="mapTemp" />
        </ComposedCard>

        <ElectricityChart />
      </GridLayout>
    </AuthenticatedRoute>
  );
}
