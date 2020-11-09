import React from "react";
import { connect } from "react-redux";
import NavbarContainer from "./containers/NavbarContainer";
import { Redirect, Route, Switch } from "react-router-dom";
import AllProductsContainer from "./containers/AllProductsContainer";
import ProductsContainer from "./containers/ProductsContainer";
import RegisterContainer from "./containers/RegisterContainer";
import LoginContainer from "./containers/LoginContainer";
import SingleProductContainer from "./containers/SingleProductContainer";
import { isLog } from "./actions/users";
import CartContainer from "./containers/CartContainer";
import Jumbotron from "react-bootstrap/Jumbotron";

class Main extends React.Component {
  //ACA RENDERIZAREMOS LAS RUTAS DE NUESTRA APP

  componentDidMount() {
    this.props.isLog();
  }

  render() {
    return (
      <div id="Main">
        <h1>MENSAJE DE BIENVENIDA</h1>
        <Route path="/" component={NavbarContainer} />
        <Jumbotron className="jumbo">
          <h1 style={{ color: "grey" }}>Canal Musical</h1>
          <p style={{ color: "grey" }}>by Canal Cultural</p>
        </Jumbotron>
        <Switch>
          <Route exact path="/allproducts" component={AllProductsContainer} />
          <Route
            exact
            path="/products/:id"
            component={SingleProductContainer}
          />
          <Route exact path="/products" component={ProductsContainer} />
          <Route path="/register" component={RegisterContainer} />
          <Route path="/login" component={LoginContainer} />
          <Route path="/cart" component={CartContainer} />
          <Redirect to="/allproducts"/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    isLog: () => dispatch(isLog()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
