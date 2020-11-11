import React from "react";
import { connect } from "react-redux";
import { userLogin } from "../actions/users";
import Login from "../components/Login";
import {
  userCart,
  addVirtualCart,
  clearVirtualCartInStore,
} from "../actions/cart";

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isValidatingText: "",
    };

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmail(e) {
    this.setState({ email: e.target.value });
  }

  handlePassword(e) {
    this.setState({ password: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ isValidatingText: "validando los datos ingresados..." });
    this.props
      .userLogin(this.state.email, this.state.password)
      .then((user) => {
        //Fusionar carros
        if (this.props.virtualCart.length > 0) {
          this.props.virtualCart.map((elem) => {
            this.props.userCart(elem, user.user);
          });
          this.props.clearVirtualCartInStore();
          localStorage.removeItem("cart");
        }
      })
      .then(() => {
        this.props.history.push("/");
      });
  }

  componentDidMount() {
    let virtualCartVariable = JSON.parse(localStorage.getItem("cart"));
    this.props.addVirtualCart(virtualCartVariable);
  }

  render() {
    return (
      <Login
        handleEmail={this.handleEmail}
        handlePassword={this.handlePassword}
        handleSubmit={this.handleSubmit}
        isValidatingText={this.state.isValidatingText}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    virtualCart: state.cart.virtualCart,
    user: state.user.user,
  };
};

export default connect(mapStateToProps, {
  userLogin,
  userCart,
  addVirtualCart,
  clearVirtualCartInStore,
})(LoginContainer);
