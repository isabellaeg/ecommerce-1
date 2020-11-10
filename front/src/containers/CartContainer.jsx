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
    if (!this.props.user.id) {
      let virtualCartVariable = JSON.parse(localStorage.getItem("cart"));
      this.props.addVirtualCart(virtualCartVariable);
    } else {
      this.props.allCart(this.props.user.id);
    }
  }

  handleDelete(product) {
    if (!this.props.user.id) {
      //Si no hay usuario
      let arrayVirtualCart = JSON.parse(localStorage.getItem("cart"));
      let indice = "";
      arrayVirtualCart.map((elem, index) => {
        if (elem.id === product.id) {
          indice = index;
        }
      });
      arrayVirtualCart.splice(indice, 1);
      localStorage.setItem("cart", JSON.stringify(arrayVirtualCart));

      let virtualCartVariable = JSON.parse(localStorage.getItem("cart"));
      this.props.addVirtualCart(virtualCartVariable);
    } else {
      //Si hay usuario
      this.props.deleteProduct(product, this.props.user).then(() => {
        this.props.allCart(this.props.user.id);
      });
    }
  }

  handleQuantityProduct(product, cant) {
    if (this.props.user.id) {
      //Si ha Usuario
      this.props.quantityProduct(product, this.props.user, cant).then(() => {
        this.props.allCart(this.props.user.id);
      });
    } else {
      //Si no hay usuario
      let arrayVirtualCart = JSON.parse(localStorage.getItem("cart"));
      let indice = "";
      arrayVirtualCart.map((elem, index) => {
        if (elem.id === product.id) {
          indice = index;
        }
      });
      arrayVirtualCart[indice].CartProductQuant.quantity =
        arrayVirtualCart[indice].CartProductQuant.quantity + cant.cant;
      localStorage.setItem("cart", JSON.stringify(arrayVirtualCart));

      let virtualCartVariable = JSON.parse(localStorage.getItem("cart"));
      this.props.addVirtualCart(virtualCartVariable);
    }
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
  if (!state.cart.cart) {
    //Si no hay carro crear uno vacío
    return {
      cart: [],
      user: state.user.user,
      virtualCart: state.cart.virtualCart,
    };
  } else {
    //Si hay carro cargar el del state y ordenarlo
    return {
      cart: state.cart.cart.sort((a, b) => (a.id > b.id ? 1 : -1)),
      user: state.user.user,
      virtualCart: state.cart.virtualCart,
    };
  }
};

export default connect(mapStateToProps, {
  deleteProduct,
  allCart,
  quantityProduct,
  addVirtualCart,
})(CartContainer);
