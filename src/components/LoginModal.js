import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Register from "./Register";

function LoginModal() {
  const [show, setShow] = useState(false);
  let [authMode, setAuthMode] = useState("signin");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
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
              <Form>
                <Form.Group className="mb-3" controlId="EmailInput">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    autoFocus
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="PasswordInput">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>
              </Form>
              <p>
                Nu ai cont?{" "}
                <span onClick={changeAuthMode}>Inregistreaza-te</span>
              </p>
            </>
          ) : (
            <Register />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LoginModal;
