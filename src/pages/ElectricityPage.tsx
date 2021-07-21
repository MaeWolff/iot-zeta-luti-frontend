import Card from "../components/Card";
import ElectricityChart from "../components/chartCard/ElectricityChart";
import MapTemp from '../assets/map-temp.jpg';

export default function ElectricityPage() {
  return (
    <div>
      <Card title='Nombre de salle éclairée' label="27 en ce moment" isCalendar>
        <img src={MapTemp} alt="mapTemp"/>
      </Card>

      <ElectricityChart/>
      
    </div>
  );
}