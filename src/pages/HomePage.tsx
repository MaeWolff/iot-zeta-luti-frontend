import Card from "../components/Card";
import MapTemp from "../assets/map-temp.jpg";

import AuthenticatedRoute from "../layouts/AuthenticatedRoute";

export default function HomePage() {
  return (
    <AuthenticatedRoute>
      <div>
        <Card title="Température actuelle" label="27°C en moyenne" isCalendar>
          <img src={MapTemp} alt="mapTemp" />
        </Card>
      </div>
    </AuthenticatedRoute>
  );
}
