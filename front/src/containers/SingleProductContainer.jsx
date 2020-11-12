import React, { Component, useEffect } from "react";
import SingleProduct from "../components/SingleProduct";
import { connect } from "react-redux";
import { fetchSingleProduct } from "../actions/products";
import { userCart, allCart } from "../actions/cart";
import Reviews from "../components/Reviews";
import axios from "axios";

class SingleProductContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { reviews: [] };
    this.handleCart = this.handleCart.bind(this);
  }

  componentDidMount() {
    this.props.fetchSingleProduct(this.props.match.params.id);
    axios.get(`/api/reviews/${this.props.match.params.id}`).then((res) => {
      this.setState({ reviews: res.data });
    });
  }

  handleCart(product) {
    this.props.userCart(product, this.props.user).then(() => {
      this.props.allCart(this.props.user.id);
    });
  }

  render() {
    console.log("this.props.singleProduct", this.props.singleProduct);
    return (
      <div>
        <SingleProduct
          handleCart={this.handleCart}
          singleProduct={this.props.singleProduct}
        />
        <Reviews reviews={this.state.reviews} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    singleProduct: state.products.singleProduct,
    user: state.user.user,
  };
};

export default connect(mapStateToProps, {
  fetchSingleProduct,
  userCart,
  allCart,
})(SingleProductContainer);
