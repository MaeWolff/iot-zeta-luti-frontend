import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Page imports
// please name the pages with the `Page` mention in component naming
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
