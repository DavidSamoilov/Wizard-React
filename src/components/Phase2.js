import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Phase2() {
  const history = useHistory();
  const goBackToPhase1 = () => history.push("/");

  const [cityInput, setCityInput] = useState({
    city: {
      value: "",
      errors: [],
      validations: {
        required: true,
        pattern: "/^.{1,35}$/",
      },
    },
  });
  const [streetInput, setStreetInput] = useState({
    street: {
      value: "",
      errors: [],
      validations: {
        required: true,
        pattern: "/^.{1,35}$/",
      },
    },
  });
  const [numberInput, setNumberInput] = useState({
    number: {
      value: "",
      errors: [],
      validations: {
        required: true,
        pattern: "^[1-9][0-9]*$",
      },
    },
  });

  const submitToPhase3 = () => {
    // replace with validation
    const phase2Data = {
      cityInput: cityInput,
      streetInput: streetInput,
      numberInput: numberInput,
    };
    if (true) {
      localStorage.setItem("phase2Data", JSON.stringify(phase2Data));

      history.push("/phase3");
    }
  };

  return (
    <Form>
      <Form.Group controlId="city">
        <Form.Label>City</Form.Label>
        <Form.Control
          onChange={(e) => setCityInput()}
          type="text"
          placeholder="Enter City"
          name="city"
        />
      </Form.Group>

      <Form.Group controlId="street">
        <Form.Label>Street</Form.Label>
        <Form.Control
          onChange={(e) => setStreetInput(e.target.value)}
          type="text"
          placeholder="Enter Street"
          name="street"
        />
      </Form.Group>
      <Form.Group controlId="number">
        <Form.Label>Number</Form.Label>
        <Form.Control
          onChange={(e) => setNumberInput(e.target.value)}
          type="number"
          placeholder="Enter Number"
          name="number"
        />
      </Form.Group>
      <Button variant="primary mr-2" onClick={goBackToPhase1}>
        Back
      </Button>
      <Button variant="primary ml-2" onClick={submitToPhase3}>
        Submit
      </Button>
    </Form>
  );
}

export default Phase2;
