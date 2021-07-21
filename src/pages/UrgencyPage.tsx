import Card from "../components/Card";
import MapTemp from '../assets/map-temp.jpg';

export default function Urgency() {
  return (
    <div>
      <Card title='Nombre d’incident en cours' label="2 en ce moment" isCalendar>
        <img src={MapTemp} alt="mapTemp"/>
      </Card>
      
    </div>
  );
}