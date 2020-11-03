import React from "react";

import { Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

const estilo = {
  backgroundColor: "white",
  textDecoration: "none",
  color: "white",
};

export default (props) => (
  <div>
    <Navbar bg="dark" variant="dark" fixed="top">
      <Navbar.Brand>Ecommerce by TEAM</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav style={estilo}>
          <Link to="/">Home</Link>
        </Nav>
      </Nav>
      <Form inline onSubmit = {props.handleSubmit}>
        <FormControl
          type="text"
          placeholder="Busca tu producto"
          className="mr-sm-2"
          onChange ={props.handleChange}
        />
        <Button variant="outline-info">Buscar</Button>
      </Form>
    </Navbar>
  </div>
);
