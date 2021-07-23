import ComposedCard from "../components/cards/ComposedCard";
import LockingChart from "../components/chartCard/LockingChart";
import AuthenticatedRoute from "../layouts/AuthenticatedRoute";
import GridLayout from "../layouts/GridLayout";
import LockingyMap from "../assets/svg/LockingMap";


export default function LockingPage() {
  return (
    <AuthenticatedRoute>
      <GridLayout>
        <ComposedCard
          title="Statut des salles vérouillées ou ouvertes"
          label="5 ouvertes en ce moment"
          isCalendar
        >
          <LockingyMap/>
        </ComposedCard>

        <LockingChart />
      </GridLayout>
    </AuthenticatedRoute>
  );
}
