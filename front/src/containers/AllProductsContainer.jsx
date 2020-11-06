import React, { Component, useEffect } from "react";
import AllProducts from "../components/AllProducts";
import { connect } from "react-redux";
import { fetchAllProducts } from "../actions/allProducts";
import { userCart, allCart } from "../actions/cart";


class AllProductsContainer extends Component {
  constructor(props) {
    super(props);

    this.handleCart = this.handleCart.bind(this);

  }

  componentDidMount() {
    this.props.fetchAllProducts();
  }

  handleCart(product) {
    console.log('handlecart')
    this.props.userCart(product, this.props.user)
      .then(() => {
        console.log('this props all cart')
        this.props.allCart(this.props.user.id)
      }
    )
  }


  render() {
    return (
      <div>
        <AllProducts
          handleCart={this.handleCart}
          allProducts={this.props.allProducts}
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
