import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { userRegister } from "../actions/users";
import Register from "../components/Register";

class RegisterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: "",
      email: "",
      password: "",
    };

    this.handleNickname = this.handleNickname.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFacebookRegister = this.handleFacebookRegister(this);
  }

  handleNickname(e) {
    this.setState({ nickname: e.target.value });
  }

  handleEmail(e) {
    this.setState({ email: e.target.value });
  }

  handlePassword(e) {
    this.setState({ password: e.target.value });
  }

  handleFacebookRegister() {
    axios.get("/api/auth/facebook");
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.userRegister(
      this.state.nickname,
      this.state.email,
      this.state.password
    );

    this.setState({
      nickname: "",
      email: "",
      password: "",
    });

    this.props.history.push("/login");
  }

  render() {
    return (
      <Register
        handleNickname={this.handleNickname}
        handleEmail={this.handleEmail}
        handlePassword={this.handlePassword}
        handleSubmit={this.handleSubmit}
        handleFacebookRegister={this.handleFacebookRegister}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userRegister: (nickname, email, password) =>
      dispatch(userRegister(nickname, email, password)),
  };
};

export default connect(null, mapDispatchToProps)(RegisterContainer);
