import React, { Component, useEffect } from "react";
import SingleProduct from "../components/SingleProduct";
import { connect } from "react-redux";
import { fetchSingleProduct } from "../actions/products";

class SingleProductContainer extends Component {
  componentDidMount() {
    this.props.fetchSingleProduct(this.props.match.params.id);
  }
  render() {
    console.log("this.props.singleProduct", this.props.singleProduct);
    return (
      <div>
        <SingleProduct singleProduct={this.props.singleProduct} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    singleProduct: state.products.singleProduct,
  };
};

export default connect(mapStateToProps, { fetchSingleProduct })(
  SingleProductContainer
);
