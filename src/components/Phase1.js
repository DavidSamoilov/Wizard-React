import { Form, Button } from 'react-bootstrap';

function Phase1({ onInputChange, onValidateInput, submitHandler }) {
  return (
    <>
      <Form>
        <Form.Group className='mb-3' controlId='formName'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='text'
            name='name'
            placeholder='Enter Name'
            onChange={onInputChange}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='Enter email' name='email' />
        </Form.Group>

        <Form.Group controlId='formFile' className='mb-3'>
          <Form.Label>Date of Birth:</Form.Label>
          <Form.Control type='date' name='date' />
        </Form.Group>

        <Button variant='primary' type='submit' onClick={submitHandler}>
          Next
        </Button>
      </Form>
    </>
  );
}
export default Phase1;
