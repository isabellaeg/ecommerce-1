import React, { Component } from "react";
import SingleOrder from "../components/SingleOrder";
import { connect } from "react-redux";
import { cartOrders, addReview, clearProductReviewed } from "../actions/cart";
import Axios from "axios";

class SingleOrderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      review: "",
      rating: "",
      producInReviewId: "",
    };

    this.handleRating = this.handleRating.bind(this);
    this.handleReview = this.handleReview.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClickReviews = this.handleClickReviews.bind(this);
  }

  componentDidMount() {
    return this.props.cartOrders(this.props.match.params.id);
  }

  handleClickReviews(productId) {
    this.setState({ producInReviewId: productId });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("en el handle submit arriba", this.props.orders[0].UserId);

    const productIdReview = this.state.producInReviewId;

    this.props
      .addReview(
        { rating: this.state.rating, review: this.state.review },
        productIdReview,
        this.props.orders
      )
      .then(() => {
        Axios.put(`/api/products/avgRate/${productIdReview}`);
      })
      .then(() => {
        let arrayProductsNoReview = [];
        this.props.compras.map((prod) => {
          if (prod.id != productIdReview) {
            arrayProductsNoReview.push(prod);
          }
        });
        this.props.clearProductReviewed(arrayProductsNoReview);
      });
    /* .then(() => {
              this.props.fetchReviews(this.props.orders[0].UserId);
            }) */
  }

  handleReview(e) {
    this.setState({ review: e.target.value });
  }

  handleRating(e) {
    this.setState({ rating: e.target.value });
  }

  render() {
    return (
      <div>
        <SingleOrder
          compras={this.props.compras}
          user={this.props.user}
          reviews={this.props.reviews}
          handleSubmit={this.handleSubmit}
          handleRating={this.handleRating}
          handleReview={this.handleReview}
          handleClickReviews={this.handleClickReviews}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    compras: state.cart.compras,
    orders: state.cart.orders,
    reviews: state.cart.reviews,
  };
};

export default connect(mapStateToProps, {
  cartOrders,
  addReview,
  clearProductReviewed,
})(SingleOrderContainer);
