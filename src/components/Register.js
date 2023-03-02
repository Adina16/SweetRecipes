import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import validation from "./validation";
import SingupFormSucces from "./SignupFormSuccess";
import MyError from "./MyError";
import LoadingSpinner from "./LoadingSpinner";

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
  const [loading, setLoading] = useState(false);
  const [error, setApiError] = useState(null);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      postPutEvent();
    }
  }, [errors]);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setError(validation(values));
    setDataIsCorrect(true);
  };

  const postPutEvent = () => {
    setLoading(true);
    const url = "http://localhost:8080/Users/addUser.php";
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setFormIsSubmitted(true);
        } else {
          setApiError(data.msg);
        }
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
      });
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
          {error && <MyError error={error} />}
          <Button
            variant="primary"
            onClick={handleFormSubmit}
            disabled={loading}
          >
            {loading ? <LoadingSpinner /> : <span>Sign Up</span>}
          </Button>
          <span> Ai deja cont? Logheaza-te </span>
          <span
            className="text-primary"
            role="button"
            onClick={() => changeMode()}
          >
            aici
          </span>
        </Form>
      ) : (
        <SingupFormSucces />
      )}
    </>
  );
};

export default Register;
