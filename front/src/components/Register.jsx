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
  handleNickname,
  handleEmail,
  handlePassword,
  handleSubmit,
  handleFacebookRegister,
  isValidatingRegister,
}) => {
  return (
    <Container style={formbox}>
      <Button variant="warning" type="submit" style={{ marginBottom: "20px" }}>
        <i className="fab fa-google"></i> Register with Google
      </Button>
      <a href="/api/auth/facebook">
        <Button
          variant="primary"
          type="submit"
          style={{ marginBottom: "20px" }}
        >
          <i className="fab fa-facebook-f"></i> Register with Facebook
        </Button>
      </a>
      <h3>Or create an account</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Nickname:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Nickname"
            onChange={handleNickname}
            autoFocus
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={handleEmail}
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
          Create User
        </Button>
        {/* <Form.Text className="text-muted">
          <br />
          <p>{isValidatingRegister}</p>
        </Form.Text> */}
      </Form>
    </Container>
  );
};
