import React from "react";
import Navbar from "../components/Navbar";
import { connect } from "react-redux";
import { fetchAllProducts } from "../actions/products";

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
    this.setState({ busqueda: evento });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.fetchAllProducts(this.state.busqueda);
    this.setState({ error: "", busqueda: "" });
  }

  render() {
    
    return(

      <Navbar 
        allProducts={this.props.allProducts} 
        handleChange={this.handleChange} 
        handleSubmit={this.handleSubmit}
      />

  )
  }
}

const mapStateToProps = function (state) {
  return {
    allProducts: state.allProducts,
  };
};

/*   const mapDispatchToProps = function(dispatch) {
    return {
        fetchMovies: (parametro) => dispatch(fetchMovies(parametro)),
      }
    };
 */

export default connect(mapStateToProps, { fetchAllProducts })(NavbarContainer);
