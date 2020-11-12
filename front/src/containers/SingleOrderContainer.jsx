import React, { Component } from "react";
import SingleOrder from "../components/SingleOrder";
import { connect } from "react-redux";
import {cartOrders, addReview} from "../actions/cart";


class SingleOrderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        review: "",
        rating: ""

    }

    this.handleRating= this.handleRating.bind(this);
    this.handleReview= this.handleReview.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this);

  }

  componentDidMount() {
   return this.props.cartOrders(this.props.match.params.id)
  }

  handleSubmit(e){
    e.preventDefault();

    this.props.addReview(
        {rating: this.state.rating, review: this.state.review}, this.props.compras, this.props.orders
      )
  
    //   this.setState({
    //     review: "",
    //     rating: "",
    //   });


  }

  handleReview(e){
    this.setState({review: e.target.value})
  }

  handleRating(e){
    this.setState({rating: e.target.value})
  }


  render() {
    return (
      <div>
        <SingleOrder
            compras={this.props.compras}
            user={this.props.user}
            handleSubmit={this.handleSubmit}
            handleRating={this.handleRating}
            handleReview={this.handleReview}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return{
        user : state.user.user,
        compras: state.cart.compras,
        orders: state.cart.orders
    }
};

export default connect(mapStateToProps, {cartOrders, addReview})(SingleOrderContainer);
