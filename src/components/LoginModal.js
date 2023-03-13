import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Register from "./Register";
import loginValidation from "../utils/LoginValidation";
import MyError from "./MyError";



function LoginModal() {
  const [user, setUser] = useState({ username:'', password:'',});
  const [show, setShow] = useState(false);
  let [authMode, setAuthMode] = useState("signin");

  const [errors, setError] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false);
  const [error, setApiError] = useState(null);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      postPutEvent();
    }
  }, [errors]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  const handleChange = (e) => {
    setUser({
      ...user, 
      [e.target.name]: e.target.value,
    });

    console.log('here', errors)
  };

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  const submitForm = (e) => {
    e.preventDefault();
    setError(loginValidation(user));
    setDataIsCorrect(true);
    // const sendData = {
    //   username:user.username,
    //   password:user.password
    // }
    // console.log('aici', sendData)
  }
  const postPutEvent = () => {
    // setLoading(true);
    const url = "http://localhost:8080/Users/login.php";
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    };
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setFormIsSubmitted(true);
          setShow(false)
        } else {
          setApiError(data.msg);
        }
        console.log('erorr', data.msg)
        // setLoading(false);
      })
      .catch((e) => {
        // setLoading(false);
      });
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          {authMode === "signin" ? (
            <>
              <Form onSubmit={submitForm}>

                <Form.Group className="mb-3" controlId="UserNameInput">
                  <Form.Label>Username:</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    value={user.username}
                    onChange={handleChange}
                    placeholder="Name123"
                    autoFocus
                  />
                           {errors.username && (
              <p className="text-danger">{errors.username}</p>
            )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="PasswordInput">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                  />
          {errors.password && (
              <p className="text-danger">{errors.password}</p>
            )}
                </Form.Group>
                {error && <MyError error={error} />}
              </Form>
              <p>
                Nu ai cont?{" "}
                <span className="text-primary" onClick={changeAuthMode}>
                  Inregistreaza-te
                </span>
              </p>
              <Button variant="primary" onClick={submitForm}>
                Login
              </Button>
            </>
          ) : (
            <Register changeMode={() => changeAuthMode()} />
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default LoginModal;
