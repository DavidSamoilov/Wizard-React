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

    for (const input in formData) {
      onValidate(
        { target: { name: [input], value: formData[input].value } },
        formData,
        setFormData
      );
    }
    if (formValid) {
      const formValues = {
        image: formData.image.value,
        hobbies: formData.hobbies.value,
      };
      localStorage.setItem('phase3Data', JSON.stringify(formValues));
      history.push('/home');
    }
  };

  useEffect(() => {
    for (const input in formData) {
      if (!formData[input].valid) {
        setFormValid(prevState => !prevState);
        return;
      }
    }
    setFormValid(prevState => !prevState);
  }, [formData]);

  useEffect(() => {
    if (!localStorage.getItem('phase2Data')) {
      history.push('/phase2');
    }
    if (localStorage.getItem('phase3Data')) {
      const parsedData = JSON.parse(localStorage.getItem('phase3Data'));
      setFormData(prevState => ({
        ...prevState,
        image: {
          ...prevState.image,
          value: parsedData.image,
          valid: true,
        },
        hobbies: {
          ...prevState.hobbies,
          value: parsedData.hobbies,
          valid: true,
        },
      }));
    }
  }, []);

  return (
    <Form>
      <Form.Group controlId='formImage'>
        <Form.Label>Image</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter Image URL'
          name='image'
          value={formData.image.value}
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
          value={formData.hobbies.value}
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
