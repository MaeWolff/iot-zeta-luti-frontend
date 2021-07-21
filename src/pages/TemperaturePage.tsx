import Card from "../components/Card";
import TemperatureChart from "../components/chartCard/TemperatureChart";
import MapTemp from '../assets/map-temp.jpg';

export default function TemperaturePage() {
  return (
    <div>
      <Card title="Température actuelle dans l'établissement" label="27°C en moyenne" isCalendar>
        <img src={MapTemp} alt="mapTemp"/>
      </Card>

      <TemperatureChart/>
      
    </div>
  );
}