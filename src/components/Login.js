import React from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";

const Login = () => {
  return (
    <Form inline className="float-right">
      <Form.Label htmlFor="loginEmail" srOnly>
          Email address
      </Form.Label>
      <InputGroup className="mb-2 mr-sm-2">
        <InputGroup.Prepend>
          <InputGroup.Text>@</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          id="loginEmail"
          placeholder="Email address" />
      </InputGroup>

      <Form.Label htmlFor="loginPassword" srOnly>
        Password
      </Form.Label>
      <InputGroup className="mb-2 mr-sm-2">
        <Form.Control
          id="loginPassword"
          type="password"
          placeholder="Password" />
      </InputGroup>

      <Button
        variant="primary"
        type="submit"
        className="mb-2 mr-sm-2">
          Login
      </Button>
    </Form>
  );
};

export default Login;