import React, { ReactNode } from "react";
import styled from "styled-components";
import Menu from "../components/Menu";
import { useLocation } from "react-router-dom";
import { useUser } from "../common/hooks/useUser";
import Spacer from "../components/Spacer";
import Logout from "../assets/svg/Logout";

const Container = styled.main<{ withMenu?: boolean }>`
  display: grid;
  grid-template-columns: ${({ withMenu }) => (withMenu ? "12em auto" : "1fr")};
  height: 100vh;
`;

const TextBold = styled.h1`
  font-size: 1.25rem;
  font-weight: bold;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  margin-bottom: 1em;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5em;
  height: 2.5em;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
`;

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const InteractiveWrapper = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

const Wrapper = styled.div`
  padding: 1em 2em;
`;

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  const location = useLocation();
  const { user } = useUser();

  // NOTE: add the paths where we don't want to display the menu
  const pathWithoutMenu = ["/signin"];
  const isMenuDisplayed = !pathWithoutMenu.includes(location.pathname);

  const firstLetterOfEmail = user?.email.charAt(0).toUpperCase();

  function handleLogout() {
    // axios.get(`${apiHost}/auth/logout`);
    localStorage.removeItem("userToken");

    window.location.reload();
  }

  return (
    <Container withMenu={isMenuDisplayed}>
      {isMenuDisplayed && <Menu />}

      <Wrapper>
        {isMenuDisplayed && (
          <Header>
            <TextBold>Tableau de bord - Admin</TextBold>

            <FlexRow>
              <p>{user?.email}</p>

              <Spacer axis="horizontal" size={1} />

              <Profile>{firstLetterOfEmail}</Profile>

              <Spacer axis="horizontal" size={1} />

              <InteractiveWrapper onClick={handleLogout}>
                <Logout />
              </InteractiveWrapper>
            </FlexRow>
          </Header>
        )}

        {children}
      </Wrapper>
    </Container>
  );
}
