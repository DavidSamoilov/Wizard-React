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
          <Form.Control type='text' placeholder='Enter City' name='city' />
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Street</Form.Label>
          <Form.Control type='text' placeholder='Enter Street' name='street' />
        </Form.Group>
        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Number</Form.Label>
          <Form.Control
            type='number'
            placeholder='Enter Number'
            name='number'
          />
        </Form.Group>
        <Button variant='primary mr-2'>Back</Button>
        <Button variant='primary ml-2'>Submit</Button>

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

export default Phase2;
