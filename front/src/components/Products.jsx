import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const style = {
  textDecoration: "none",
  marginTop: "10px",
  position: "relative"
};

const grid = {
  marginTop: "60px"
}

export default ({ productsArray, handleCart}) => (
  <div className="bg-light" style={{marginLeft: '170px'}}>
    <div style={grid}className="container" >
      <div className="row">
        {productsArray && productsArray.length > 0
          ? productsArray.map((p) => {
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
                    <Link to={`/products/${p.id}`}>
                      <Button variant="dark" style={style}><i className="fas fa-info-circle"></i>  Ver Detalle</Button>
                    </Link>
                    <Button onClick={() => { handleCart(p)}} variant="dark" style={style}> <i className="fas fa-cart-plus"></i>  Agregar al carrito</Button>
                  </Card.Body>
                </Card>
              );
            })
          : null}
      </div>
    </div>
  </div>
);
