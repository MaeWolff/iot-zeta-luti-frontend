import Card from "../components/Card";
import ElectricityChart from "../components/chartCard/ElectricityChart";
import AuthenticatedRoute from "../layouts/AuthenticatedRoute";
import MapTemp from '../assets/map-temp.jpg';

export default function ElectricityPage() {
  return (
    <AuthenticatedRoute>
      <div>
        <Card title='Nombre de salle éclairée' label="27 en ce moment" isCalendar>
          <img src={MapTemp} alt="mapTemp"/>
        </Card>

        <ElectricityChart/>
        
      </div>
    </AuthenticatedRoute>
  );
}