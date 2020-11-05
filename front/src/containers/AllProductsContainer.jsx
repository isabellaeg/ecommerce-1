import React, { Component, useEffect } from "react";
import AllProducts from "../components/AllProducts";
import { connect } from "react-redux";
import { fetchAllProducts } from "../actions/allProducts";
import { userCart, allCart } from "../actions/cart";


class AllProductsContainer extends Component {
  constructor(props) {
    super(props);

    this.handleCart = this.handleCart.bind(this);
    this.handleAllCart = this.handleAllCart.bind(this)
  }

  componentDidMount() {
    this.props.fetchAllProducts();
  }

  handleCart(product) {
    this.props.userCart(product, this.props.user);
  }

  handleAllCart(){
     
    this.props.allCart(this.props.user)

  }

  render() {
    return (
      <div>
        <AllProducts
          handleCart={this.handleCart}
          allProducts={this.props.allProducts}
          handleAllCart={this.handleAllCart}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    allProducts: state.allProducts.allProducts,
    user: state.user.user,
  };
};

export default connect(mapStateToProps, { fetchAllProducts, userCart, allCart })(
  AllProductsContainer
);
