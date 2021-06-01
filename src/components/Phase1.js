import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

// {
//   image: {
//     value: '',
//       errors: [],
//         validations: {
//       required: true,
//         pattern:
//       '/^(?:(?:https?|ftp)://)(?:S+(?::S*)?@)?(?:(?!(?:10|127)(?:.d{1,3}){3})(?!(?:169.254|192.168)(?:.d{1,3}){2})(?!172.(?:1[6-9]|2d|3[0-1])(?:.d{1,3}){2})(?:[1-9]d?|1dd|2[01]d|22[0-3])(?:.(?:1?d{1,2}|2[0-4]d|25[0-5])){2}(?:.(?:[1-9]d?|1dd|2[0-4]d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:.(?:[a-z\u00a1-\uffff]{2,})).?)(?::d{2,5})?(?:[/?#]S*)?$/i',
//       },
//   },

//   hobbies: {
//     value: '',
//       errors: [],
//         validations: {
//       required: false,
//       },
//   },
// }

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
        required: false,
        pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      },
    },
    dateOfBirth: {
      value: '',
      errors: [],
      validations: {
        required: false,
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
      </Form.Group>

      <Form.Group className='mb-3' controlId='formEmail'>
        <Form.Label>Email address</Form.Label>
        <Form.Control type='email' placeholder='Enter email' name='email'
          onChange={(e) => onChange(e, phase1Data, setPhaseData)}
          onBlur={(e) => onValidate(e, phase1Data, setPhaseData)} />
      </Form.Group>

      <Form.Group controlId='formFile' className='mb-3'>
        <Form.Label>Date of Birth:</Form.Label>
        <Form.Control type='date' name='dateOfBirth'
          onChange={(e) => onChange(e, phase1Data, setPhaseData)}
          onBlur={(e) => onValidate(e, phase1Data, setPhaseData)} />
      </Form.Group>

      <Button variant='primary' onClick={handleClick}>
        Next
      </Button>
    </Form>
  );
}
export default Phase1;
