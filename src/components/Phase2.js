import React,{useState} from 'react'
import { Form, Button,Container } from "react-bootstrap";


function Phase2() {
   
  return (
    <Container>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="Enter City" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Enter Address" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="phone" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Phase2
