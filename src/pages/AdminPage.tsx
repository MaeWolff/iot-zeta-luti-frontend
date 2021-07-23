import AuthenticatedRoute from "../layouts/AuthenticatedRoute";
import GridLayout from "../layouts/GridLayout";
import Spacer from "../components/Spacer";
import BaseCard from "../components/cards/BaseCard";
import styled from "styled-components";
import Admin from "../assets/svg/Admin";
import Urgency from "../assets/svg/Urgency";
import ComposedCard from "../components/cards/ComposedCard";

const AdminWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid black;
  padding: 20px;
  border-radius: 6px;
`;

const UrgencySvg = styled(Urgency)`
  width: 2em;
  min-width: 2em;
`;
const NewProfilForm = styled.form`
  display: flex;
  flex-direction: column;
  div {
    margin-bottom: 1.5em;
  }
`;

const FullName = styled.div`
  display: flex;

  div:nth-child(2) {
    margin-left: 3em;
  }
`;

const DeleteProfil = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const IncidenciesList = [
  {
    type: "dangerous",
    text: "Abscence le 21/03 à 15h00",
  },
  {
    type: "dangerous",
    text: "Abscence le 12/02 à 9h00",
  },
  {
    type: "dangerous",
    text: "Abscence le 18/12 à 11h00",
  },
  {
    type: "warning",
    text: "Retard le 10/12 à 9h00",
  },
  {
    type: "warning",
    text: "Retard le 29/09 à 16h00",
  },
];

export default function AdminPage() {
  return (
    <AuthenticatedRoute>
      <GridLayout>
        <ComposedCard
          title="Gestion des abscences par élève"
          label={"Marco De Amorin"}
        >
          <div>
            {IncidenciesList.map(({ type, text }) => (
              <>
                <BaseCard>
                  <AdminWrapper>
                    <UrgencySvg
                      color={type === "dangerous" ? "#FF3737" : "#FF9900"}
                    />
                    <Spacer axis="horizontal" size={1} />
                    <p>{text}</p>
                  </AdminWrapper>
                </BaseCard>
                {/*                 <Spacer axis="vertical" size={1} />
                 */}{" "}
              </>
            ))}
          </div>
        </ComposedCard>
        <div>
          <ComposedCard title="Créer un nouveau profil" label="Rôle : Étudiant">
            <div>
              <NewProfilForm>
                <FullName>
                  <div>
                    <label htmlFor="">Prénom : </label>
                    <input type="text" placeholder="Ex: Marco" />
                  </div>
                  <div>
                    <label htmlFor="">Nom : </label>
                    <input type="text" placeholder="Ex: De Amorin" />
                  </div>
                </FullName>
                <div>
                  <label htmlFor="">Adresse e-mail : </label>
                  <input type="e-mail" placeholder="exemple@exemple.com" />
                </div>
                <div>
                  <label htmlFor="">Mot de passe : </label>
                  <input type="password" placeholder="" />
                </div>
                <div>
                  <label htmlFor="">Promo : </label>
                  <input type="text" placeholder="Ex: Web 2" />
                </div>

                <input type="submit" value="Créer" />
              </NewProfilForm>
            </div>
          </ComposedCard>

          <Spacer axis="vertical" size={1} />

          <ComposedCard title="Supprimer un profil" label="Rôle : Étudiant">
            <DeleteProfil>
              <div>
                <label htmlFor="">Nom et prénom</label>
                <input type="text" placeholder="Ex: Marco De Amorin" />
              </div>

              <Spacer axis="vertical" size={1} />

              <input type="submit" value="Supprimer" />
            </DeleteProfil>
          </ComposedCard>
        </div>
      </GridLayout>
    </AuthenticatedRoute>
  );
}
