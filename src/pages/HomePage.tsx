import Card from "../components/Card";
import MapTemp from "../assets/map-temp.jpg";

import AuthenticatedRoute from "../layouts/AuthenticatedRoute";
import { useUser } from "../common/hooks/useUser";


export default function HomePage() {
  const { user } = useUser();

  return (
    <AuthenticatedRoute>
      <div>
        <p>{user?.email}</p>
        <Card title='Température actuelle' label="27°C en moyenne" isCalendar>
        <img src={MapTemp} alt="mapTemp"/>
      </Card>


      </div>
    </AuthenticatedRoute>
  );
}
