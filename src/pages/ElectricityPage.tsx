import Card from "../components/Card";
import ElectricityChart from "../components/chartCard/ElectricityChart";
import GridLayout from "../layouts/GridLayout";
import AuthenticatedRoute from "../layouts/AuthenticatedRoute";
import MapTemp from '../assets/map-temp.jpg';

export default function ElectricityPage() {
  return (
    <AuthenticatedRoute>
      <GridLayout>
        <Card title='Nombre de salle éclairée' label="27 en ce moment" isCalendar>
          <img src={MapTemp} alt="mapTemp"/>
        </Card>

        <ElectricityChart/>
        
      </GridLayout>
    </AuthenticatedRoute>
  );
}