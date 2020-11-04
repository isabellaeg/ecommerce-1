import React from "react";
import Navbar from "../components/Navbar";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/products";
import { Redirect } from "react-router-dom";

class NavbarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      busqueda: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
  }

  render() {
    return (
      <Navbar
        // allProducts={this.props.allProducts}
        //products={this.props.products}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapStateToProps = function (state) {
  console.log("STATE NAVBAR", state);
  return {
    // allProducts: state.allProducts.allProducts,
    products: state.products.products,
  };
};

/*   const mapDispatchToProps = function(dispatch) {
    return {
        fetchMovies: (parametro) => dispatch(fetchMovies(parametro)),
      }
    };
 */

export default connect(mapStateToProps, { fetchProducts })(NavbarContainer);
