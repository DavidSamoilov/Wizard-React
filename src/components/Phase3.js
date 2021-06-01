import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const Phase3 = () => {
  const [formData, setFormData] = useState({
    image: {
      value: '',
      errors: [],
      validations: {
        required: true,
        pattern:
          '/^(?:(?:https?|ftp)://)(?:S+(?::S*)?@)?(?:(?!(?:10|127)(?:.d{1,3}){3})(?!(?:169.254|192.168)(?:.d{1,3}){2})(?!172.(?:1[6-9]|2d|3[0-1])(?:.d{1,3}){2})(?:[1-9]d?|1dd|2[01]d|22[0-3])(?:.(?:1?d{1,2}|2[0-4]d|25[0-5])){2}(?:.(?:[1-9]d?|1dd|2[0-4]d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:.(?:[a-z\u00a1-\uffff]{2,})).?)(?::d{2,5})?(?:[/?#]S*)?$/i',
      },
    },

    hobbies: {
      value: '',
      errors: [],
      validations: {
        required: false,
      },
    },
  });

  const history = useHistory();

  const goBackHandler = () => {
    history.push('/phase2');
  };

  const submitHandler = e => {
    e.preventDefault();
  };

  return (
    <Form>
      <Form.Group controlId='formImage'>
        <Form.Label>Image</Form.Label>
        <Form.Control type='text' placeholder='Enter Image URL' />
      </Form.Group>
      <Form.Group controlId='formHobbies'>
        <Form.Label>Hobbies</Form.Label>
        <Form.Control type='text' placeholder='Enter hobbies' />
      </Form.Group>
      <Button
        variant='primary'
        type='submit'
        className='mr-2'
        onClick={goBackHandler}
      >
        Back
      </Button>
      <Button
        variant='primary'
        type='submit'
        className='ml-2'
        onClick={submitHandler}
      >
        Submit
      </Button>
    </Form>
  );
};

export default Phase3;
