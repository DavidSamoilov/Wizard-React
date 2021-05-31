import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Container } from "react-bootstrap";
import Phase1 from "./components/Phase1";
import Phase2 from "./components/Phase2";
import Phase3 from "./components/Phase3";
import "./App.css";
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Phase1">Phase1</Link>
            </li>
            <li>
              <Link to="/Phase2">Phase2</Link>
            </li>
            <li>
              <Link to="/Phase3">Phase3</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Phase1">
            <Phase1 />
          </Route>
          <Route path="/Phase2">
            <Phase2 />
          </Route>
          <Route path="/Phase3">
            <Phase3 />
          </Route>
        </Switch>
      </div>
    </Router>
  );

  function Home() {
    return <h2>Home</h2>;
  }

  function About() {
    return <h2>About</h2>;
  }

  function Users() {
    return <h2>Users</h2>;
  }
}

export default App;
