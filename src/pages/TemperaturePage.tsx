import Card from "../components/Card";
import TemperatureChart from "../components/chartCard/TemperatureChart";
import AuthenticatedRoute from "../layouts/AuthenticatedRoute";
import GridLayout from "../layouts/GridLayout";
import MapTemp from '../assets/map-temp.jpg';

export default function TemperaturePage() {
  return (
    <AuthenticatedRoute>
        <GridLayout>
        <Card title="Température actuelle dans l'établissement" label="27°C en moyenne" isCalendar>
            <img src={MapTemp} alt="mapTemp"/>
        </Card>

        <TemperatureChart/>
        
        </GridLayout>
    </AuthenticatedRoute>
  );
}