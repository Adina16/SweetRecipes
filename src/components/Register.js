import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import validation from "./validation";
import SingupFormSucces from "./SignupFormSuccess";

const Register = ({ changeMode }) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [errors, setError] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false);
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      setFormIsSubmitted(true);
    }
  }, [errors]);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    console.log("values", values);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setError(validation(values));
    setDataIsCorrect(true);
  };

  return (
    <>
      {!formIsSubmitted ? (
        <Form>
          <Form.Group className="mb-3" controlId="UserNameInput">
            <Form.Label>Username:</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={values.username}
              onChange={handleChange}
              autoFocus
            />
            {errors.username && (
              <p className="text-danger">{errors.username}</p>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="EmailInput">
            <Form.Label>Email address:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="name@example.com"
            />
            {errors.email && <p className="text-danger">{errors.email}</p>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="PasswordInput">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="text-danger">{errors.password}</p>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="ConfirmPasswordInput">
            <Form.Label>Confirm password:</Form.Label>
            <Form.Control
              type="password"
              name="confirm_password"
              value={values.confirm_password}
              onChange={handleChange}
            />
            {errors.confirm_password && (
              <span className="text-danger">{errors.confirm_password}</span>
            )}
          </Form.Group>
          <Button variant="primary" onClick={handleFormSubmit}>
            Sign Up
          </Button>{" "}
          <span className="text-primary" onClick={() => changeMode()}>
            Sign In
          </span>
        </Form>
      ) : (
        <SingupFormSucces />
      )}
    </>
  );
};

export default Register;
