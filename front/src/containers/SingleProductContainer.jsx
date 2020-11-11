import React, { Component, useEffect } from "react";
import SingleProduct from "../components/SingleProduct";
import { connect } from "react-redux";
import { fetchSingleProduct } from "../actions/products";
import {userCart, allCart} from '../actions/cart'

class SingleProductContainer extends Component {
  constructor(props) {
    super(props)

    this.handleCart = this.handleCart.bind(this)
  }

  componentDidMount() {
    return this.props.fetchSingleProduct(this.props.match.params.id);
  }

  handleCart(product) {
    this.props.userCart(product, this.props.user)
      .then(() => {
        this.props.allCart(this.props.user.id)
      }
    )
  }



  render() {
    console.log("this.props.singleProduct", this.props.singleProduct);
    return (
      <div>
        <SingleProduct handleCart = {this.handleCart} singleProduct={this.props.singleProduct} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    singleProduct: state.products.singleProduct,
    user: state.user.user
  };
};

export default connect(mapStateToProps, { fetchSingleProduct, userCart, allCart })(
  SingleProductContainer
);
