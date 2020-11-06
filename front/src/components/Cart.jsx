import React from "react";
import { Table, Button } from "react-bootstrap";

function Cart(props) {
  let total = 0;

  let cartRender = []

  if(props.cart.length>0){
    cartRender = props.cart
  }else if(props.virtualCart.length>0){
    cartRender = props.virtualCart
  }else{
    null
  }

  return (
    <div className="container" style={{ marginTop: "50px", width: "60%" }}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Total</th>
          </tr>
        </thead>
        {cartRender && cartRender.length > 0
          ? cartRender.map((cart) => {
              {
                total = total + cart.price * cart.CartProductQuant.quantity;
              }
              return (
                <tbody key={cart.name}>
                  <tr>
                    <td>{cart.name}</td>
                    <td>{cart.CartProductQuant.quantity}</td>
                    <td>$ {cart.price}</td>
                    <td>$ {cart.price * cart.CartProductQuant.quantity} </td>
                    <td>
                      <Button
                        onClick={() => {
                          props.handleQuantityProduct(cart, { cant: 1 });
                        }}
                      >
                        <i className="fas fa-plus"></i>
                      </Button>
                    </td>
                    {cart.CartProductQuant.quantity < 2 ? (
                      <td>
                        <Button
                          disabled
                          onClick={() => {
                            props.handleQuantityProduct(cart, { cant: -1 });
                          }}
                        >
                          <i className="fas fa-minus"></i>
                        </Button>
                      </td>
                    ) : (
                      <td>
                        <Button
                          onClick={() => {
                            props.handleQuantityProduct(cart, { cant: -1 });
                          }}
                        >
                          <i className="fas fa-minus"></i>
                        </Button>
                      </td>
                    )}

                    <td>
                      <Button
                        onClick={() => {
                          props.handleDelete(cart);
                        }}
                        variant="danger"
                      >
                        <i className="fas fa-trash"></i>
                      </Button>
                    </td>
                  </tr>
                </tbody>
              );
            })
          : null}
      </Table>
      <p>TOTAL: $ {total}</p>
      <Button className="btn btn-dark">Comprar</Button>
    </div>
  );
}

export default Cart;
