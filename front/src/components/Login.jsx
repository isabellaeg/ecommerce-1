import React from "react";
import { Link } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";

const formbox = {
  width: "380px",
  height: "480px",
  position: "relative",
  margin: "6% auto",
  background: "white",
  padding: "20px",
  textAlign: "center",
  borderRadius: "10px",
};

export default ({
  handleEmail,
  handlePassword,
  handleSubmit,
  isValidatingText,
}) => {
  return (
    <Container style={formbox}>
      <Button variant="warning" type="submit" style={{ marginBottom: "20px" }}>
        <i className="fab fa-google"></i> Login with Google
      </Button>
      <a href="/api/auth/facebook">
        <Button
          variant="primary"
          type="submit"
          style={{ marginBottom: "20px" }}
        >
          <i className="fab fa-facebook-f"></i> Login with Facebook
        </Button>
      </a>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={handleEmail}
            autoFocus
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            onChange={handlePassword}
          />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox"></Form.Group>

        <Button variant="dark" type="submit">
          Login
        </Button>
        <Form.Text className="text-muted">
          <br />
          <p>{isValidatingText}</p>
        </Form.Text>
      </Form>
    </Container>
  );
};
