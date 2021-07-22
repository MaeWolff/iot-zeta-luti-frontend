import Card from "../components/Card";
import MapTemp from '../assets/map-temp.jpg';
import GridLayout from "../layouts/GridLayout";
import AuthenticatedRoute from "../layouts/AuthenticatedRoute";

export default function Urgency() {
  return (
    <AuthenticatedRoute>
        <GridLayout>
          <Card title='Nombre d’incident en cours' label="2 en ce moment" isCalendar>
              <img src={MapTemp} alt="mapTemp"/>
          </Card>
        
        </GridLayout>
    </AuthenticatedRoute>
  );
}