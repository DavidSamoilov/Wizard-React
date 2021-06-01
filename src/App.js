import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Container } from 'react-bootstrap';
import Phase1 from './components/Phase1';
import Phase2 from './components/Phase2';
import Phase3 from './components/Phase3';
import './App.css';
function App() {
  const inputChangeHandler = (
    { target: { name, value } },
    formState,
    setFormState
  ) => {
    setFormState({
      ...formState,
      [name]: {
        ...formState[name],
        value: value,
      },
    });
  };

  const validateInput = (
    { target: { name, value } },
    formState,
    setFormState
  ) => {
    const newErrors = [];

    if (!value && formState[name].validations.required) {
      newErrors.push(`${name} is required!`);
    } else if (
      value &&
      !formState[name].value.match(formState[name].validations.pattern)
    ) {
      newErrors.push(`Invalid ${name} value!`);
    }

    setFormState({
      ...formState,
      [name]: {
        ...formState[name],
        errors: newErrors,
      },
    });
  };

  return (
    <Container>
      <Router>
        <Switch>
          <Route path='/' exact>
            <Phase1 onChange={inputChangeHandler} onValidate={validateInput} />
          </Route>
          <Route path='/Phase2'>
            <Phase2 onChange={inputChangeHandler} onValidate={validateInput} />
          </Route>
          <Route path='/Phase3'>
            <Phase3 onChange={inputChangeHandler} onValidate={validateInput} />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
