import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import ErrorMessages from './ErrorMessages';
function Phase2({ onChange, onValidate, formData }) {
  const [formValid, setFormValid] = useState(false);
  const history = useHistory();
  
  const goBackToPhase1 = () => history.push('/');
  if (!localStorage.getItem('phase1Valid')) {
    history.push('/');
  }

  useEffect(() => {
    if (
      !formData.city.valid ||
      !formData.street.valid ||
      !formData.number.valid
    ) {
      setFormValid(false);
      return;
    }

    setFormValid(true);
  }, [formData.city.valid, formData.street.valid, formData.number.valid]);

  const submitHandler = e => {
    e.preventDefault();

    onValidate({ target: { name: 'city', value: formData.city.value } });
    onValidate({ target: { name: 'street', value: formData.street.value } });
    onValidate({ target: { name: 'number', value: formData.number.value } });

    if (formValid) {
      localStorage.setItem('formData', JSON.stringify(formData));
      localStorage.setItem('phase2Valid', true);
      history.push('/Phase3');
    }
  };

  return (
    <Form>
      <Form.Group controlId='city'>
        <Form.Label>City</Form.Label>
        <Form.Control
          onChange={onChange}
          onBlur={onValidate}
          type='text'
          placeholder='Enter City'
          value={formData.city.value}
          name='city'
        />
        <ErrorMessages errors={formData.city.errors} />
      </Form.Group>

      <Form.Group controlId='street'>
        <Form.Label>Street</Form.Label>
        <Form.Control
          onChange={onChange}
          onBlur={onValidate}
          type='text'
          placeholder='Enter Street'
          name='street'
          value={formData.street.value}
        />
        <ErrorMessages errors={formData.street.errors} />
      </Form.Group>
      <Form.Group controlId='number'>
        <Form.Label>Number</Form.Label>
        <Form.Control
          onChange={onChange}
          onBlur={onValidate}
          type='number'
          placeholder='Enter Number'
          name='number'
          value={formData.number.value}
        />
        <ErrorMessages errors={formData.number.errors} />
      </Form.Group>
      <Button variant='primary mr-2' onClick={goBackToPhase1}>
        Back
      </Button>
      <Button variant='primary ml-2' onClick={submitHandler}>
        Next
      </Button>
    </Form>
  );
}

export default Phase2;
