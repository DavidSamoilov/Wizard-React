import React, { useState } from 'react';

import { Container } from 'react-bootstrap';
import Phase1 from './components/Phase1';
import Phase2 from './components/Phase2';
import Phase3 from './components/Phase3';
import './App.css';
function App() {
  const [formDetails, setFormDetails] = useState({
    name: {
      value: '',
      errors: [],
      validations: {
        required: true,
        pattern: '',
      },
    },
    email: {
      value: '',
      errors: [],
      validations: {
        required: true,
        pattern: '',
      },
    },
    dateOfBirth: {
      value: '',
      errors: [],
      validations: {
        required: true,
        pattern: '',
      },
    },
    city: {
      value: '',
      errors: [],
      validations: {
        required: true,
        pattern: '',
      },
    },
    street: {
      value: '',
      errors: [],
      validations: {
        required: true,
        pattern: '',
      },
    },
    number: {
      value: '',
      errors: [],
      validations: {
        required: false,
        pattern: '',
      },
    },
    image: {
      value: '',
      errors: [],
      validations: {
        required: true,
        pattern: '',
      },
    },
    hobbies: {
      value: '',
      errors: [],
      validations: {
        required: false,
        pattern: '',
      },
    },
  });

  const inputChangeHandler = ({ target: { name, value } }) => {
    setFormDetails({
      ...formDetails,
      [name]: {
        ...formDetails[name],
        value: value,
      },
    });
  };

  const validateInputHandler = ({ target: { name, value } }) => {
    const newErrors = [];

    if (!value && formDetails[name].validations.required) {
      newErrors.push(`${[name]} is required`);
    }

    if (value && !value.match(formDetails[name].validations.pattern)) {
      newErrors.push('Invalid input!');
    }

    setFormDetails({
      ...formDetails,
      [name]: {
        ...formDetails[name],
      },
    });
  };

  const submitHandler = () => {
    console.log(formDetails);
  };
  return (
    <Container className='text-center'>
      <Phase1
        onInputChange={inputChangeHandler}
        onValidateInput={validateInputHandler}
        onSubmit={submitHandler}
      />
      <Phase2
        onInputChange={inputChangeHandler}
        onValidateInput={validateInputHandler}
        onSubmit={submitHandler}
      />
      <Phase3
        onInputChange={inputChangeHandler}
        onValidateInput={validateInputHandler}
        onSubmit={submitHandler}
      />
    </Container>
  );
}

export default App;
