import Card from "../components/Card";
import PeopleChart from "../components/chartCard/PeopleChart";
import AuthenticatedRoute from "../layouts/AuthenticatedRoute";
import GridLayout from "../layouts/GridLayout";
import MapTemp from '../assets/map-temp.jpg';

export default function PeoplePage() {
  return (
    <AuthenticatedRoute>
      <GridLayout>
        <Card title='Nombre de personne dans l’établissement' label="270 en ce moment" isCalendar>
          <img src={MapTemp} alt="mapTemp"/>
        </Card>

        <PeopleChart/>
        
      </GridLayout>
    </AuthenticatedRoute>
  );
} 