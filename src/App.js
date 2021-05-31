import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Container } from 'react-bootstrap';
import Phase1 from './components/Phase1';
import Phase2 from './components/Phase2';
import Phase3 from './components/Phase3';
import './App.css';
function App() {
  return (
    <Container>
      <Router>
        <Switch>
          <Route path='/' exact>
            <Phase1 />
          </Route>
          <Route path='/Phase2'>
            <Phase2 />
          </Route>
          <Route path='/Phase3'>
            <Phase3 />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
