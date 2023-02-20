import Form from "react-bootstrap/Form";

const Register = ({changeMode}) => {

  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" autoFocus />
      </Form.Group>
      <Form.Group className="mb-3" controlId="PasswordInput">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" />
      </Form.Group>
        <span onClick={() => changeMode()}>Sign In</span>
    </Form>
  );
};

export default Register;
