import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { Container } from 'react-bootstrap';
import Phase1 from './components/Phase1';
import Phase2 from './components/Phase2';
import Phase3 from './components/Phase3';
import DisplayData from './components/DisplayData';
import './App.css';
function App() {
  const [formData, setFormData] = useState({
    name: {
      value: '',
      errors: [],
      valid: false,
      validations: {
        required: true,
        pattern: /[a-zA-Z]{2,}( )[a-zA-Z]{2,}/,
      },
    },
    email: {
      value: '',
      errors: [],
      valid: false,
      validations: {
        required: true,
        pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      },
    },
    dob: {
      value: '',
      errors: [],
      valid: false,
      validations: {
        required: true,
      },
    },
    street: {
      value: '',
      errors: [],
      validations: {
        required: true,
        pattern: /^.{1,35}$/,
      },
    },
    city: {
      value: '',
      errors: [],
      validations: {
        required: true,
        pattern: /^.{1,35}$/,
      },
    },
    number: {
      value: '',
      errors: [],
      validations: {
        required: true,
        pattern: '^[0-9][0-9]*$',
      },
    },
    image: {
      value: '',
      errors: [],
      valid: false,
      validations: {
        required: true,
        pattern: /(https?:\/\/.*\.(?:png|jpg))/i,
      },
    },

    hobbies: {
      value: '',
      errors: [],
      valid: false,
      validations: {
        required: false,
      },
    },
  });

  useEffect(() => {
    if (localStorage.getItem('formData')) {
      setFormData(JSON.parse(localStorage.getItem('formData')));
    }
  }, []);

  const inputChangeHandler = ({ target: { name, value } }) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        value: value,
      },
    }));
  };

  const validateInput = ({ target: { name, value } }) => {
    const newErrors = [];

    if (!value && formData[name].validations.required) {
      newErrors.push(`${name} is required!`);
    } else if (value && !value.match(formData[name].validations.pattern)) {
      newErrors.push(`Invalid ${name} value!`);
    }

    setFormData(prevState => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        valid: !newErrors.length,
        errors: newErrors,
      },
    }));
  };

  return (
    <Container>
      <Router>
        <Switch>
          <Route path='/' exact>
            <Phase1
              onChange={inputChangeHandler}
              onValidate={validateInput}
              formData={formData}
            />
          </Route>
          <Route path='/Phase2' exact>
            <Phase2
              onChange={inputChangeHandler}
              onValidate={validateInput}
              formData={formData}
            />
          </Route>
          <Route path='/Phase3' exact>
            <Phase3
              onChange={inputChangeHandler}
              onValidate={validateInput}
              formData={formData}
            />
          </Route>
          <Route path='/home'>
            <DisplayData userDetails={formData} />
          </Route>
          <Route path='*'>
            <Redirect to='/home'></Redirect>
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
