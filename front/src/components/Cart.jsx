import React from "react";
import { Table, Button } from "react-bootstrap";



function Cart(props) {
  let total = 0
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Total</th>
          </tr>
        </thead>
        {props.cart && props.cart.length > 0
          ? props.cart.map((cart) => {
            {
              total = total + (cart.price * cart.CartProductQuant.quantity)
            }
            return (
                <tbody>
                  <tr>
                    <td>{cart.name}</td>
                    <td>{cart.CartProductQuant.quantity}</td>
                    <td>$ {cart.price}</td>
                    <td>$ {cart.price * cart.CartProductQuant.quantity} </td>
                    <td>
                      <Button onClick = {() => {props.handleQuantityProduct(cart, {cant: 1})}}>+</Button>
                          </td>
                          <td>
                      <Button onClick = {() => {props.handleQuantityProduct(cart, {cant: -1})}}>-</Button>
                          </td>
                          <td>
                      <Button onClick={() => { props.handleDelete(cart) }} variant = 'danger'>Eliminar</Button>
                    </td>
                  </tr>
                </tbody>
              );
            })
          : null}
      </Table>
      <p>TOTAL: $ {total}</p>
      <Button>Comprar</Button>
      
    </div>
  );
}

export default Cart;
