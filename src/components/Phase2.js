import React from "react";
import { Form, Button } from "react-bootstrap";

function Phase2() {
  return (
    <Form>
      <Form.Group controlId="city">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="Enter City" name="city" />
      </Form.Group>

      <Form.Group controlId="street">
        <Form.Label>Street</Form.Label>
        <Form.Control type="text" placeholder="Enter Street" name="street" />
      </Form.Group>
      <Form.Group controlId="number">
        <Form.Label>Number</Form.Label>
        <Form.Control type="number" placeholder="Enter Number" name="number" />
      </Form.Group>
      <Button variant="primary mr-2">Back</Button>
      <Button variant="primary ml-2">Submit</Button>
    </Form>
  );
}

export default Phase2;
