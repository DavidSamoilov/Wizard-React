import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import ErrorMessages from './ErrorMessages';

function Phase1({ onChange, onValidate }) {
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
    // for (const prop in phase1Data) {
    //   if (!phase1Data[prop].value) {
    //     return false;
    //   }
    // };

    if (true) {
      localStorage.setItem('Phase1', JSON.stringify(phase1Data));
      history.push('/Phase2')
    }
  }

  return (
    <Form>
      <Form.Group className='mb-3' controlId='formName'>
        <Form.Label>Name</Form.Label>
        <Form.Control type='text' name='name' placeholder='Enter Name'
          onChange={(e) => onChange(e, phase1Data, setPhaseData)}
          onBlur={(e) => onValidate(e, phase1Data, setPhaseData)} />
        <ErrorMessages errors={phase1Data.name.errors} />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formEmail'>
        <Form.Label>Email address</Form.Label>
        <Form.Control type='email' placeholder='Enter email' name='email'
          onChange={(e) => onChange(e, phase1Data, setPhaseData)}
          onBlur={(e) => onValidate(e, phase1Data, setPhaseData)} />
        <ErrorMessages errors={phase1Data.email.errors} />
      </Form.Group>

      <Form.Group controlId='formFile' className='mb-3'>
        <Form.Label>Date of Birth:</Form.Label>
        <Form.Control type='date' name='dob'
          onChange={(e) => onChange(e, phase1Data, setPhaseData)}
          onBlur={(e) => onValidate(e, phase1Data, setPhaseData)} />
        <ErrorMessages errors={phase1Data.dob.errors} />
      </Form.Group>

      <Button variant='primary' onClick={handleClick}>
        Next
      </Button>
    </Form>
  );
}
export default Phase1;
