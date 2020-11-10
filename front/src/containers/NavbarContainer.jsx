import React from "react";
import Navbar from "../components/Navbar";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/products";
import { Redirect } from "react-router-dom";
import { userLogout } from "../actions/users";
import { clearCartInStore } from "../actions/cart";

class NavbarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      busqueda: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleChange(evt) {
    const evento = evt.target.value;
    console.log(evento);
    this.setState({ busqueda: evento });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.fetchProducts(this.state.busqueda);
    this.setState({ error: "", busqueda: "" });
    this.props.history.push("/products");
  }

  handleLogout(evt) {
    this.props.clearCartInStore();
    this.props.userLogout();
  }

  render() {
    return (
      <Navbar
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleLogout={this.handleLogout}
        user={this.props.user}
      />
    );
  }
}

const mapStateToProps = function (state) {
  console.log("STATE NAVBAR", state);
  return {
    products: state.products.products,
    user: state.user.user,
  };
};

export default connect(mapStateToProps, {
  fetchProducts,
  userLogout,
  clearCartInStore,
})(NavbarContainer);
