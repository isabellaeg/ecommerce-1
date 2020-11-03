import React from "react";
import { Card, Button } from "react-bootstrap";

const estilo = {
  marginTop: "20px",
};

const style = {
  backgroundColor: "black",
  textDecoration: "none",
  color: "white",
};

export default ({ allProducts }) => (
  <div className="bg-dark" style={estilo}>
    <div className="container">
      <div className="row">
        {allProducts && allProducts.length > 0
          ? allProducts.map((p) => {
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
                          <Button style={style} 
                    
                    > Comprar</Button>
                  </Card.Body>
                </Card>
              );
            })
          : null}
      </div>
    </div>
  </div>
);

