import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';


function Phase1() {
  const [phase1Data, setPhaseData] = useState({
    name: '',
    email: '',
    dateOfBirth: ''
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
          onChange={(e) => {
            setPhaseData({ ...phase1Data, name: e.target.value });
          }} />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formEmail'>
        <Form.Label>Email address</Form.Label>
        <Form.Control type='email' placeholder='Enter email' name='email'
          onChange={(e) => {
            setPhaseData({ ...phase1Data, email: e.target.value });
          }} />
      </Form.Group>

      <Form.Group controlId='formFile' className='mb-3'>
        <Form.Label>Date of Birth:</Form.Label>
        <Form.Control type='date' name='dateOfBirth'
          onChange={(e) => {
            setPhaseData({ ...phase1Data, dateOfBirth: e.target.value });
          }} />
      </Form.Group>

      <Button variant='primary' onClick={handleClick}>
        Next
      </Button>
    </Form>
  );
}
export default Phase1;
