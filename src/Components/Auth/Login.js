import React, { Component } from "react";
import AuthService from "./AuthUser";
import { Link, useRouteMatch } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
    this.service = new AuthService();
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    console.log(props)
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
        console.log(this.props)
        this.props.history.push(
          this.props.location.prevPath
            ? this.props.location.prevPath
            : "/"
        );
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
      <section className="section-form " >
        <div className="container-form">
          <form onSubmit={this.handleFormSubmit}>
            <label>Email ou Login:</label>
            <input
              type="text"
              name="email"
              value={this.state.username}
              onChange={this.handleChange}
              placeholder="Email or Username"
            />
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="password"
            />
            <button type="submit" className="btn btn-secondary" value="Login" > LOGIN </button>
          </form>
          <p>
            Don't have account?
            <Link to={"/sign"}> Signup</Link>
          </p>
        <div className="background-image" />
        </div>
      </section>
    );
  }
}
export default Login;