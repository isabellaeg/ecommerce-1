import React from "react";
import NavbarContainer from "./containers/NavbarContainer";
import { Route, Switch } from "react-router-dom";
import AllProductsContainer from "./containers/AllProductsContainer";
import ProductsContainer from "./containers/ProductsContainer";
import RegisterContainer from "./containers/RegisterContainer";
import LoginContainer from "./containers/LoginContainer";
import SingleProductContainer from "./containers/SingleProductContainer";

class Main extends React.Component {
  //ACA RENDERIZAREMOS LAS RUTAS DE NUESTRA APP
  render() {
    return (
      <div id="Main">
        <h1>MENSAJE DE BIENVENIDA</h1>
        <NavbarContainer />
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
        </Switch>
      </div>
    );
  }
}

export default Main;
