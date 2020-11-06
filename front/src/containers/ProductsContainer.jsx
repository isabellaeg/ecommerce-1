import React, { Component, useEffect } from "react";
import Products from "../components/Products";
import { connect } from "react-redux";
import { userCart, allCart } from "../actions/cart";

class ProductsContainer extends Component {
  constructor(props) {
    super(props)

    this.handleCart = this.handleCart.bind(this)
  }

  handleCart(product) {
    this.props.userCart(product, this.props.user)
      .then(() => {
        this.props.allCart(this.props.user.id)
      }
    )
  }



  render() {
    return (
      <div>
        <Products handleCart = {this.handleCart} products={this.props.products} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    products: state.products.products,
    user: state.user.user
  };
};

export default connect(mapStateToProps, {userCart, allCart})(ProductsContainer);
