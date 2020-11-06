import React from "react";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function ({ singleProduct, handleCart}) {
  return (
    <Container>
      <br />
      <Row>
        <Col xs={4}>
          <Card style={{ width: "30rem" }}>
            <Row>
              <Col className="text-center">
                <br />
                <Card.Img
                  style={{ width: "18rem" }}
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
                <Button variant="primary">Volver</Button>
              </Link>
              <Button
                onClick={() => {
                  handleCart(singleProduct)}}
                variant="primary"
              >
                Agregar al carrito
              </Button>
            </Card.Body>
          </Card>
          <br />
        </Col>
      </Row>
    </Container>
  );
}
