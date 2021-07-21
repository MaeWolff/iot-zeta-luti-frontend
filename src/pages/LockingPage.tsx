import Card from "../components/Card";
import LockingChart from "../components/chartCard/LockingChart";
import AuthenticatedRoute from "../layouts/AuthenticatedRoute";
import MapTemp from '../assets/map-temp.jpg';

export default function LockingPage() {
  return (
    <AuthenticatedRoute>
      <div>
        <Card title='Statut des salles vérouillées ou ouvertes' label="5 ouvertes en ce moment" isCalendar>
          <img src={MapTemp} alt="mapTemp"/>
        </Card>

        <LockingChart/>
        
      </div>
    </AuthenticatedRoute>
  );
}