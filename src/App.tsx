import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Layout
import MainLayout from "./layouts/MainLayout";

// Page imports
// please name the pages with the `Page` mention in component naming
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </MainLayout>
    </Router>
  );
}

export default App;
