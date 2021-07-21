import Card from "../components/Card";
import PeopleChart from "../components/chartCard/PeopleChart";
import AuthenticatedRoute from "../layouts/AuthenticatedRoute";
import MapTemp from '../assets/map-temp.jpg';

export default function PeoplePage() {
  return (
    <AuthenticatedRoute>
      <div>
        <Card title='Nombre de personne dans l’établissement' label="270 en ce moment" isCalendar>
          <img src={MapTemp} alt="mapTemp"/>
        </Card>

        <PeopleChart/>
        
      </div>
    </AuthenticatedRoute>
  );
} 