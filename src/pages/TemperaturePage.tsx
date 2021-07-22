import ComposedCard from "../components/cards/ComposedCard";
import TemperatureChart from "../components/chartCard/TemperatureChart";
import AuthenticatedRoute from "../layouts/AuthenticatedRoute";
import GridLayout from "../layouts/GridLayout";
import MapTemp from "../assets/map-temp.jpg";

export default function TemperaturePage() {
  return (
    <AuthenticatedRoute>
      <GridLayout>
        <ComposedCard
          title="Température actuelle dans l'établissement"
          label="27°C en moyenne"
          isCalendar
        >
          <img src={MapTemp} alt="mapTemp" />
        </ComposedCard>

        <TemperatureChart />
      </GridLayout>
    </AuthenticatedRoute>
  );
}
