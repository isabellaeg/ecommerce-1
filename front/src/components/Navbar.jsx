import React from "react";

import { Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

const estilo = {
  backgroundColor: "white",
  textDecoration: "none",
  color: "white",
};

export default (props) => {
  console.log("PROPS NAVBAR", props);
  return (
    <div>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Navbar.Brand>Ecommerce by TEAM</Navbar.Brand>
        <Nav className="mr-auto">
          
          <Nav >
            <Link to="/">Home</Link>
          </Nav>

          </Nav>
          <Nav className="mr-auto">
          <Nav>
            <Link to="/allproducts">Productos</Link>
          </Nav>


        </Nav>

        {props.user.id ? (
          <React.Fragment>
            <Nav className="mr-auto">
            <React.Fragment style={{estilo}}>Bienvenido: {props.user.nickname}</React.Fragment>
            
              <Button variant="outline-info" onClick={props.handleLogout}>
                <Link to="/logout">Logout</Link>
              </Button>
            </Nav>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Nav className="mr-auto">
              <Nav>
                <Link to="/register">Register</Link>
              </Nav>
            </Nav>
            <Nav className="mr-auto">
              <Nav>
                <Link to="/login">Login</Link>
              </Nav>
            </Nav>
          </React.Fragment>
        )}

        <Form inline>
          <FormControl
            type="text"
            placeholder="Busca tu producto"
            className="mr-sm-2"
            onChange={props.handleChange}
          />
          <button onClick={props.handleSubmit} type="submit">
            <Link to="/products">Buscar</Link>
          </button>

          
          {/*  <Link to="/products">
            <Button variant="outline-info">Buscar</Button>
          </Link> */}
        </Form>

        <Nav className="mr-auto">
          <Nav>
            <Link to="/cart">Carrito</Link>
          </Nav>
          

        </Nav>
      </Navbar>
    </div>
  );
};
