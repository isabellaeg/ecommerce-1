import React from "react";
import { connect } from "react-redux";
import NavbarContainer from "./containers/NavbarContainer";
import { Redirect, Route, Switch } from "react-router-dom";
import ProductsContainer from "./containers/ProductsContainer";
import RegisterContainer from "./containers/RegisterContainer";
import LoginContainer from "./containers/LoginContainer";
import SingleProductContainer from "./containers/SingleProductContainer";
import { isLog } from "./actions/users";
import CartContainer from "./containers/CartContainer";
import CheckoutContainer from "./containers/CheckoutContainer";
import Jumbotron from "react-bootstrap/Jumbotron";
import OrdersContainer from "./containers/OrdersContainer";

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
          <Route exact path="/products" component={ProductsContainer} />

          <Route
            exact
            path="/products/:id"
            component={SingleProductContainer}
          />
          <Route path="/register" component={RegisterContainer} />
          <Route path="/login" component={LoginContainer} />
          <Route path="/cart" component={CartContainer} />
          <Route path="/checkout" component={CheckoutContainer} />

          <Route path="/orders" component={OrdersContainer} />
          <Redirect to="/products" />
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
