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
import SidebarContainer from "./containers/SidebarContainer";
import AdminUserContainer from './containers/AdminUserContainer'
import AdminProductContainer from "./containers/AdminProductContainer"
import NewProductContainer from "./containers/NewProductContainer"


class Main extends React.Component {
  //ACA RENDERIZAREMOS LAS RUTAS DE NUESTRA APP

  componentDidMount() {
    this.props.isLog();
  }

  render() {
    return (
      <div id="Main">
        {/* Vamos a tener que borrar. Solo para prueba. */}

      
        <Route path="/" component={NavbarContainer} />


        <Jumbotron className="jumbo">
          <h1 style={{ color: "grey" }}>Canal Musical</h1>
          <p style={{ color: "grey" }}>by Canal Cultural</p>
        </Jumbotron>
        <Route path="/" component={SidebarContainer}/>
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
          <Route exact path='/admin/users' component={AdminUserContainer} />
          <Route exact path='/admin/product' component={AdminProductContainer} />
          <Route exact path='/admin/newproduct' component={NewProductContainer} />
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
