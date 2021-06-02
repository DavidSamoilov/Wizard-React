import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ErrorMessages from './ErrorMessages';

function Phase1({ onChange, onValidate, formData }) {
  const [formValid, setFormValid] = useState(false);

  const history = useHistory();

  const submitHandler = e => {
    e.preventDefault();
    onValidate({ target: { name: 'name', value: formData.name.value } });
    onValidate({ target: { name: 'email', value: formData.email.value } });
    onValidate({ target: { name: 'dob', value: formData.dob.value } });

    if (formValid) {
      localStorage.setItem('formData', JSON.stringify(formData));
      localStorage.setItem('phase1Valid', true);
      history.push('/Phase2');
    }
  };

  useEffect(() => {
    if (!formData.name.valid || !formData.email.valid || !formData.dob.valid) {
      setFormValid(false);
      return;
    }
    setFormValid(true);
  }, [formData.name.valid, formData.email.valid, formData.dob.valid]);

  return (
    <Form onSubmit={submitHandler}>
      <Form.Group className='mb-3' controlId='formName'>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type='text'
          name='name'
          placeholder='Enter Name'
          value={formData.name.value}
          onChange={onChange}
          onBlur={onValidate}
        />
        <ErrorMessages errors={formData.name.errors} />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formEmail'>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type='email'
          placeholder='Enter email'
          name='email'
          value={formData.email.value}
          onChange={onChange}
          onBlur={onValidate}
        />
        <ErrorMessages errors={formData.email.errors} />
      </Form.Group>

      <Form.Group controlId='formFile' className='mb-3'>
        <Form.Label>Date of Birth:</Form.Label>

        <Form.Control
          type='text'
          name='dob'
          value={formData.dob.value}
          onChange={onChange}
          onBlur={onValidate}
          placeholder="dd-mm-yy"
        />
        <ErrorMessages errors={formData.dob.errors} />
      </Form.Group>

      <Button variant='primary' type='submit'>
        Next
      </Button>
    </Form>
  );
}
export default Phase1;
