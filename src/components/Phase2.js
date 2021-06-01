import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Phase2({ onChange, onValidate }) {
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

  const [phase2Data,setPhase2Data] =useState( {
    
      street: {
        value: "",
        errors: [],
        validations: {
          required: true,
          pattern: "/^.{1,35}$/"
        }
      },
        city: {
          value: "",
          errors: [],
          validations: {
            required: true,
            pattern: "/^.{1,35}$/"
          }
        },
      number: {
        value: "",
        errors: [],
        validations: {
          required: true,
          pattern: "^[1-9][0-9]*$"
        }
      }}
  )


  
  const submitToPhase3 = () => {
    // replace with validation
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
          onChange={(e) => onChange(e, phase2Data, setPhase2Data)}
          type="text"
          placeholder="Enter City"
          name="city"
        />
      </Form.Group>

      <Form.Group controlId="street">
        <Form.Label>Street</Form.Label>
        <Form.Control
          onChange={(e) => onChange(e, phase2Data, setPhase2Data)}
          type="text"
          placeholder="Enter Street"
          name="street"
        />
      </Form.Group>
      <Form.Group controlId="number">
        <Form.Label>Number</Form.Label>
        <Form.Control
          onChange={(e) => onChange(e, phase2Data, setPhase2Data)}
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
