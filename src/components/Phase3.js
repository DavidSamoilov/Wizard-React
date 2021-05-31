import React from 'react';
import { Form, Button } from 'react-bootstrap';
const Phase3 = () => {
  return (
    <Form>
      <Form.Group controlId='formBasicEmail'>
        <Form.Label>Image</Form.Label>
        <Form.Control type='text' placeholder='Enter Image URL' />
      </Form.Group>
      <Form.Group controlId='formBasicEmail'>
        <Form.Label>Hobbies</Form.Label>
        <Form.Control type='text' placeholder='Enter hobbies' />
      </Form.Group>
      <Button variant='primary' type='submit' className='mr-2'>
        Back
      </Button>
      <Button variant='primary' type='submit' className='ml-2'>
        Submit
      </Button>
    </Form>
  );
};

export default Phase3;
