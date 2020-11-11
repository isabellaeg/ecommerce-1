import React from "react";
import Navbar from "../components/Navbar";
import { connect } from "react-redux";
import { fetchProducts, clearProductInStore } from "../actions/products";
import { Redirect } from "react-router-dom";
import { userLogout } from "../actions/users";
import { clearCartInStore } from "../actions/cart";
import { setSearchInStore } from "../actions/search";

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
    this.setState({ busqueda: evento });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.fetchProducts(this.state.busqueda);
    this.props.setSearchInStore(this.state.busqueda);
    this.props.history.push(`/products?search=${this.state.busqueda}`);
    this.setState({ busqueda: "" });
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
        busqueda={this.state.busqueda}
        user={this.props.user}
        clearProductInStore={this.props.clearProductInStore}
      />
    );
  }
}

const mapStateToProps = function (state) {
  return {
    products: state.products.products,
    user: state.user.user,
  };
};

export default connect(mapStateToProps, {
  fetchProducts,
  userLogout,
  clearCartInStore,
  clearProductInStore,
  setSearchInStore,
})(NavbarContainer);
