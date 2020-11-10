import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

const estilo = {
  marginTop: "20px",
};

const style = {
  textDecoration: "none",
  marginTop: "10px",
  position: "relative",
  color: "white"
};

export default ({ products, handleCart}) => (
  <div className="bg-light" style={estilo}>
    <div className="container" style={{marginTop: "60px"}}>
      <div className="row">
        {products && products.length > 0
          ? products.map((p) => {
              return (
                <Card
                  className="col-md-3"
                  style={{ width: "18rem" }}
                  key={p.id}
                >
                  <Card.Img variant="top" src={p.imgUrl} />
                  <Card.Body>
                    <Card.Title>{p.name}</Card.Title>
                    <Card.Text>Price: $ {p.price}</Card.Text>
                    <Button variant="dark" style={style}>
                    <Link to={`/products/${p.id}`} style={style}><i className="fas fa-info-circle"></i>  Ver detalle
        </Link>
                    </Button>
                    
                    <Button onClick={() => {handleCart(p)}} variant="dark" style={style}><i className="fas fa-cart-plus"></i>  Agregar al carrito</Button>
                  </Card.Body>
                </Card>
              );
            })
          : null}
      </div>
    </div>
  </div>
);
