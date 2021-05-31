import React,{useState} from 'react'
import { Form, Button } from "react-bootstrap";


function Phase2() {
    return (
        <div>
            <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>City</Form.Label>
    <Form.Control type="text" placeholder="Enter City" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
 
  <Button variant="primary">
    Submit
  </Button>
</Form>
        </div>
    )
}

export default Phase2
