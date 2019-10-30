import React, { Component } from "react";
import AuthService from "./AuthUser";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
    this.service = new AuthService();
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    this.service
      .login(email, password)
      .then(response => {
        this.setState({ email: "", password: "" })
        this.props.getUser(response)
        // this.props.history.push(
        //   this.props.location.prevPath
        //     ? this.props.location.prevPath
        //     : "/projects"
        // );
      })
      .catch(error => console.log(error));
  }

  handleChange(event) {
    const { name, value } = event.target;
    console.log(value)
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="section" style={{position:"relative", top: "320px"}}>
        <div className="container">
          <form onSubmit={this.handleFormSubmit}>
            <label>Email ou Login:</label>
            <input
              type="text"
              name="email"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <input type="submit" value="Login" />
          </form>
          <p>
            Don't have account?
            <Link to={"/signup"}> Signup</Link>
          </p>
        </div>
      </div>
    );
  }
}
export default Login;