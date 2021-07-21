import Card from "../components/Card";
import MapTemp from '../assets/map-temp.jpg';
import AuthenticatedRoute from "../layouts/AuthenticatedRoute";

export default function Urgency() {
  return (
    <AuthenticatedRoute>
        <div>
        <Card title='Nombre d’incident en cours' label="2 en ce moment" isCalendar>
            <img src={MapTemp} alt="mapTemp"/>
        </Card>
        
        </div>
    </AuthenticatedRoute>
  );
}