import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import ErrorMessages from "./ErrorMessages";
function Phase2({ onChange, onValidate }) {
  const [formValid, setFormValid] = useState(false);

  const history = useHistory();
  const goBackToPhase1 = () => history.push("/");

  // const [cityInput, setCityInput] = useState({
  //   city: {
  //     value: "",
  //     errors: [],
  //     validations: {
  //       required: true,
  //       pattern: "/^.{1,35}$/",
  //     },
  //   },
  // });
  // const [streetInput, setStreetInput] = useState({
  //   street: {
  //     value: "",
  //     errors: [],
  //     validations: {
  //       required: true,
  //       pattern: "/^.{1,35}$/",
  //     },
  //   },
  // });
  // const [numberInput, setNumberInput] = useState({
  //   number: {
  //     value: "",
  //     errors: [],
  //     validations: {
  //       required: true,
  //       pattern: "^[1-9][0-9]*$",
  //     },
  //   },
  // });

  const [phase2Data, setPhase2Data] = useState({
    street: {
      value: "",
      errors: [],
      validations: {
        required: true,
        pattern: /^.{1,35}$/,
      },
    },
    city: {
      value: "",
      errors: [],
      validations: {
        required: true,
        pattern: /^.{1,35}$/,
      },
    },
    number: {
      value: "",
      errors: [],
      validations: {
        required: true,
        pattern: "^[0-9][0-9]*$",
      },
    },
  });

  useEffect(() => {
    for (const input in phase2Data) {
      if (!phase2Data[input].valid) {
        setFormValid(false);
        return;
      }
    }
    setFormValid(true);
  }, [phase2Data]);

  const submitHandler = (e) => {
    e.preventDefault();

    for (const input in phase2Data) {
      onValidate(
        { target: { name: [input], value: phase2Data[input].value } },
        phase2Data,
        setPhase2Data
      );
    }
    if (formValid) {
      const formValues = {
        city: phase2Data.city.value,
        street: phase2Data.street.value,
        number: phase2Data.number.value,
      };

      localStorage.setItem("phase2Data", JSON.stringify(formValues));
      history.push("/Phase3");
    }
  };

  return (
    <Form>
      <Form.Group controlId="city">
        <Form.Label>City</Form.Label>
        <Form.Control
          onChange={(e) => onChange(e, phase2Data, setPhase2Data)}
          onBlur={(e) => onValidate(e, phase2Data, setPhase2Data)}
          type="text"
          placeholder="Enter City"
          value={phase2Data.city.value}
          name="city"
        />
        <ErrorMessages errors={phase2Data.city.errors} />
      </Form.Group>

      <Form.Group controlId="street">
        <Form.Label>Street</Form.Label>
        <Form.Control
          onChange={(e) => onChange(e, phase2Data, setPhase2Data)}
          onBlur={(e) => onValidate(e, phase2Data, setPhase2Data)}
          type="text"
          placeholder="Enter Street"
          name="street"
          value={phase2Data.street.value}
        />
        <ErrorMessages errors={phase2Data.street.errors} />
      </Form.Group>
      <Form.Group controlId="number">
        <Form.Label>Number</Form.Label>
        <Form.Control
          onChange={(e) => onChange(e, phase2Data, setPhase2Data)}
          onBlur={(e) => onValidate(e, phase2Data, setPhase2Data)}
          type="number"
          placeholder="Enter Number"
          name="number"
          value={phase2Data.number.value}
        />
        <ErrorMessages errors={phase2Data.number.errors} />
      </Form.Group>
      <Button variant="primary mr-2" onClick={goBackToPhase1}>
        Back
      </Button>
      <Button variant="primary ml-2" onClick={submitHandler}>
        Submit
      </Button>
    </Form>
  );
}

export default Phase2;
