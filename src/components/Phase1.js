import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ErrorMessages from './ErrorMessages';

function Phase1({ onChange, onValidate }) {
  const [formValid, setFormValid] = useState(false);
  const [phase1Data, setPhaseData] = useState({
    name: {
      value: '',
      errors: [],
      validations: {
        required: true,
        pattern: /[a-zA-Z]{2,}( )[a-zA-Z]{2,}/,
      },
    },

    email: {
      value: '',
      errors: [],
      validations: {
        required: true,
        pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      },
    },
    dob: {
      value: '',
      errors: [],
      validations: {
        required: true,
      },
    },
  })

  const history = useHistory();
  const handleClick = () => {

    if (formValid) {
      const formValues = { name: phase1Data.name.value, email: phase1Data.email.value, dob: phase1Data.dob.value };
      localStorage.setItem('phase1', JSON.stringify(formValues));
      history.push('/Phase2')
    }
  }


  const submitHandler = e => {
    e.preventDefault();

    for (const input in phase1Data) {
      onValidate(
        { target: { name: [input], value: phase1Data[input].value } },
        phase1Data,
        setPhaseData
      );
    }
  };

  useEffect(() => {
    for (const input in phase1Data) {
      if (!phase1Data[input].valid) {
        setFormValid(false);
        return;
      }
    }
    setFormValid(true);
  }, [phase1Data]);



  return (
    <Form onSubmit={(e) => submitHandler(e)}>
      <Form.Group className='mb-3' controlId='formName'>
        <Form.Label>Name</Form.Label>
        <Form.Control type='text' name='name' placeholder='Enter Name'
          value={phase1.name.value}
          onChange={(e) => onChange(e, phase1Data, setPhaseData)}
          onBlur={(e) => onValidate(e, phase1Data, setPhaseData)} />
        <ErrorMessages errors={phase1Data.name.errors} />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formEmail'>
        <Form.Label>Email address</Form.Label>
        <Form.Control type='email' placeholder='Enter email' name='email'
          value={phase1.email.value}
          onChange={(e) => onChange(e, phase1Data, setPhaseData)}
          onBlur={(e) => onValidate(e, phase1Data, setPhaseData)} />
        <ErrorMessages errors={phase1Data.email.errors} />
      </Form.Group>

      <Form.Group controlId='formFile' className='mb-3'>
        <Form.Label>Date of Birth:</Form.Label>
        <Form.Control type='date' name='dob'
          value={phase1.dob.value}
          onChange={(e) => onChange(e, phase1Data, setPhaseData)}
          onBlur={(e) => onValidate(e, phase1Data, setPhaseData)} />
        <ErrorMessages errors={phase1Data.dob.errors} />
      </Form.Group>

      <Button variant='primary' type='submit' onClick={handleClick}>
        Next
      </Button>
    </Form>
  );
}
export default Phase1;
