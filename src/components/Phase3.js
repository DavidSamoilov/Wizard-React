import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import ErrorMessages from './ErrorMessages';

const Phase3 = ({ onChange, onValidate, formData }) => {
  const [formValid, setFormValid] = useState(false);

  const history = useHistory();
  
  if (!localStorage.getItem('phase2Valid')) {
    history.push('/phase2');
  }
  const goBackHandler = () => {
    history.push('/phase2');
  };

  const submitHandler = e => {
    e.preventDefault();

    onValidate({ target: { name: 'image', value: formData.image.value } });

    if (formValid) {
      console.log(formData)
      localStorage.setItem('formData', JSON.stringify(formData));
      localStorage.setItem('phase3Valid', true);
      history.push('/home');
    }
  };

  useEffect(() => {
    if (!formData.image.valid) {
      setFormValid(false);
      return;
    }
    setFormValid(true);
  }, [formData.image.valid]);


  return (
    <Form>
      <Form.Group controlId='formImage'>
        <Form.Label>Image</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter Image URL'
          name='image'
          value={formData.image.value}
          onChange={onChange}
          onBlur={onValidate}
        />
        <ErrorMessages errors={formData.image.errors} />
      </Form.Group>
      <Form.Group controlId='formHobbies'>
        <Form.Label>Hobbies</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter hobbies'
          name='hobbies'
          value={formData.hobbies.value}
          onChange={onChange}
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
