import React from "react";
import { connect } from "react-redux";
import { userLogin } from "../actions/users";
import Login from "../components/Login";
import { userCart, addVirtualCart } from "../actions/cart";

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
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

    this.props.userLogin(this.state.email, this.state.password).then((user) => {
      //console.log("user", user);
      if (this.props.virtualCart.length > 0) {
        this.props.virtualCart.map((elem) => {
          //delete elem.CartProductQuant;
          console.log("elem", elem);
          console.log("this.props.user.id", user.id);
          this.props.userCart(elem, user.user);
        });
        localStorage.removeItem("cart");
      }
    });
    this.props.history.push("/");
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
      />
    );
  }
}

/* const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (email, password) => dispatch(userLogin(email, password)),
    userCart: ()
  };
}; */

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
})(LoginContainer);
