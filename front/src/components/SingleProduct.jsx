import React from "react";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const style = {
  textDecoration: "none",
  marginTop: "10px",
  position: "relative",
  color: "white",
  marginRight: "10px",
};

export default function ({ singleProduct, handleCart }) {
  return (
    <Container>
      <br />
      <Row>
        <Col>
          <Card
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "50%",
            }}
          >
            <Row>
              <Col className="text-center">
                <br />
                <Card.Img
                  style={{ width: "50%" }}
                  variant="top"
                  src={singleProduct.imgUrl}
                />
              </Col>
            </Row>
            <Card.Body>
              <Card.Title>{singleProduct.name}</Card.Title>
              <Card.Text>
                <p>{singleProduct.description}</p>
              </Card.Text>
              <Link to={`/allproducts`}>
                <Button variant="dark" style={style}>
                <i className="fas fa-backward"></i>  Volver
                </Button>
              </Link>
              <Button
                onClick={() => {
                  handleCart(singleProduct);
                }}
                variant="dark"
                style={style}
              ><i className="fas fa-cart-plus"></i>  Agregar al carrito
              </Button>
            </Card.Body>
          </Card>
          <br />
        </Col>
      </Row>
    </Container>
  );
}
