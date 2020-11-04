import React, { Component, useEffect } from "react";
import AllProducts from "../components/AllProducts";
import { connect } from "react-redux";
import { fetchAllProducts } from "../actions/allProducts";

class AllProductsContainer extends Component {
  componentDidMount() {
    this.props.fetchAllProducts();
  }

  render() {
    return (
      <div>
        <AllProducts allProducts={this.props.allProducts} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    allProducts: state.allProducts.allProducts,
  };
};

export default connect(mapStateToProps, { fetchAllProducts })(
  AllProductsContainer
);
