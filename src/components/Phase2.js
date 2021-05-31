import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

function Phase2({ onLogin, errorMsg }) {
  const [cityInput, setCityInput] = useState("");
  const [addressInput, setAddressInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    onLogin(loginData.email.value, loginData.password.value);
  };

  const [loginData, setLoginData] = useState({
    email: {
      value: '', 
      errors:[], 
      validations:{
        required: true, 
        pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ 
      }
    },
    password: {
      value: '', 
      errors: [], 
      validations: {
        required: true, 
        pattern: /^[0-9a-zA-Z]{6}$/g
      }
    }
  })

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>City</Form.Label>
          <Form.Control
            onChange={(e) => setCityInput(e.target.value)}
            type="text"
            placeholder="Enter City"
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Address</Form.Label>
          <Form.Control
            onChange={(e) => setAddressInput(e.target.value)}
            type="text"
            placeholder="Enter Address"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            onChange={(e) => setPhoneInput(e.target.value)}
            type="phone"
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="primary" type='submit'>Submit</Button>
      </Form>
    </Container>
  );
}

export default Phase2;
