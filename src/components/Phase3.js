import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import ErrorMessages from './ErrorMessages';

const Phase3 = ({ onChange, onValidate }) => {
  const [formValid, setFormValid] = useState(false);
  const [formData, setFormData] = useState({
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
        required: true,
      },
    },
  });

  const history = useHistory();

  const goBackHandler = () => {
    history.push('/phase2');
  };

  const submitHandler = e => {
    e.preventDefault();

    for (const input in formData) {
      onValidate(
        { target: { name: [input], value: formData[input].value } },
        formData,
        setFormData
      );
    }
    if (formValid) {
      console.log('ok');
    }
  };

  useEffect(() => {
    for (const input in formData) {
      if (!formData[input].valid) {
        setFormValid(false);
        return;
      }
    }
    setFormValid(true);
  }, [formData]);

  return (
    <Form>
      <Form.Group controlId='formImage'>
        <Form.Label>Image</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter Image URL'
          name='image'
          onChange={e => onChange(e, formData, setFormData)}
          onBlur={e => onValidate(e, formData, setFormData)}
        />
        <ErrorMessages errors={formData.image.errors} />
      </Form.Group>
      <Form.Group controlId='formHobbies'>
        <Form.Label>Hobbies</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter hobbies'
          name='hobbies'
          onChange={e => onChange(e, formData, setFormData)}
          onBlur={e => onValidate(e, formData, setFormData)}
        />
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
