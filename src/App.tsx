import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Layout
import MainLayout from "./layouts/MainLayout";

// Page imports
// please name the pages with the `Page` mention in component naming
import HomePage from "./pages/HomePage";
import SigninPage from "./pages/SigninPage";
import LockingPage from "./pages/LockingPage";
import PeoplePage from "./pages/PeoplePage";
import ElectricityPage from "./pages/ElectricityPage";
import UrgencyPage from "./pages/UrgencyPage";
import TemperaturePage from "./pages/TemperaturePage";

function App() {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signin" component={SigninPage} />
          <Route exact path="/locking" component={LockingPage} />
          <Route exact path="/people" component={PeoplePage} />
          <Route exact path="/electricity" component={ElectricityPage} />
          <Route exact path="/urgency" component={UrgencyPage} />
          <Route exact path="/temperature" component={TemperaturePage} />
        </Switch>
      </MainLayout>
    </Router>
  );
}

export default App;
