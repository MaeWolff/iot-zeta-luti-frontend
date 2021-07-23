import ComposedCard from "../components/cards/ComposedCard";
import TemperatureChart from "../components/chartCard/TemperatureChart";
import AuthenticatedRoute from "../layouts/AuthenticatedRoute";
import GridLayout from "../layouts/GridLayout";
import TemperatureMap from "../assets/svg/TemperatureMap";


export default function TemperaturePage() {
  return (
    <AuthenticatedRoute>
      <GridLayout>
        <ComposedCard
          title="Température actuelle dans l'établissement"
          label="27°C en moyenne"
          isCalendar
        >
          <TemperatureMap/>
        </ComposedCard>

        <TemperatureChart />
      </GridLayout>
    </AuthenticatedRoute>
  );
}
