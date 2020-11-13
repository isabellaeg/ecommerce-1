import React from "react";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { arrayStar, arrayNoStar } from "../utils/functions";
import { MDBIcon } from "mdbreact";

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
                <p>Precio: $ {singleProduct.price}</p>
              </Card.Text>
              <Card.Text>
                <p>{singleProduct.description}</p>
              </Card.Text>
              <Card.Text>
                <div className="rating">
                  {arrayStar(singleProduct.avgRate).map((elem) => {
                    return (
                      <MDBIcon
                        style={{ color: "#FF8C00" }}
                        className="fa-lg"
                        key={Math.random()}
                        icon="star"
                      />
                    );
                  })}
                  {arrayNoStar(singleProduct.avgRate).map((elem) => {
                    return (
                      <MDBIcon
                        style={{ color: "#FF8C00" }}
                        className="fa-lg"
                        key={Math.random()}
                        far
                        icon="star"
                      />
                    );
                  })}
                </div>
              </Card.Text>
              <Link to={`/products`}>
                <Button variant="dark" style={style}>
                  <i className="fas fa-backward"></i> Volver
                </Button>
              </Link>
              <Button
                onClick={() => {
                  handleCart(singleProduct);
                }}
                variant="dark"
                style={style}
              >
                <i className="fas fa-cart-plus"></i> Agregar al carrito
              </Button>
            </Card.Body>
          </Card>
          <br />
        </Col>
      </Row>
    </Container>
  );
}
