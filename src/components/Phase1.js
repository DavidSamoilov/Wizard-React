import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Phase2 from './Phase2';

function Phase1() {
  const history = useHistory();
  const handleClick = () => history.push('/Phase2');

  return (
    <Form>
      <Form.Group className='mb-3' controlId='formName'>
        <Form.Label>Name</Form.Label>
        <Form.Control type='text' name='name' placeholder='Enter Name' />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formEmail'>
        <Form.Label>Email address</Form.Label>
        <Form.Control type='email' placeholder='Enter email' name='email' />
      </Form.Group>

      <Form.Group controlId='formFile' className='mb-3'>
        <Form.Label>Date of Birth:</Form.Label>
        <Form.Control type='date' name='dateOfBirth' />
      </Form.Group>

      <Button variant='primary' onClick={handleClick}>
        Next
      </Button>
    </Form>
  );
}
export default Phase1;
