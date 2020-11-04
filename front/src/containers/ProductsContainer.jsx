import React, { Component, useEffect } from "react";
import Products from "../components/Products";
import { connect } from "react-redux";

class ProductsContainer extends Component {
  render() {
    /* if (this.props.products) {
      this.props.history.push("/products");
    } */
    return (
      <div>
        <Products products={this.props.products} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    products: state.products.products,
  };
};

export default connect(mapStateToProps, null)(ProductsContainer);
