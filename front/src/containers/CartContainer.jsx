import React, { Component } from "react";
import Cart from "../components/Cart";
import { connect } from "react-redux";
import {
  deleteProduct,
  allCart,
  quantityProduct,
  addVirtualCart,
} from "../actions/cart";

class CartContainer extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleQuantityProduct = this.handleQuantityProduct.bind(this);
  }

  componentDidMount() {
    this.props.allCart(this.props.user.id);
    let virtualCartVariable = JSON.parse(localStorage.getItem("cart"));
    this.props.addVirtualCart(virtualCartVariable);
  }

  handleDelete(product) {
    this.props.deleteProduct(product, this.props.user).then(() => {
      this.props.allCart(this.props.user.id);
    });
  }

  handleQuantityProduct(product, cant) {
    this.props.quantityProduct(product, this.props.user, cant).then(() => {
      this.props.allCart(this.props.user.id);
    });
  }

  render() {
    return (
      <div>
        <Cart
          virtualCart={this.props.virtualCart}
          handleQuantityProduct={this.handleQuantityProduct}
          handleDelete={this.handleDelete}
          user={this.props.user}
          cart={this.props.cart}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart.sort((a, b) => (a.id > b.id ? 1 : -1)),
    user: state.user.user,
    virtualCart: state.cart.virtualCart,
  };
};

export default connect(mapStateToProps, {
  deleteProduct,
  allCart,
  quantityProduct,
  addVirtualCart,
})(CartContainer);
