import React, { Component } from "react";
import AuthService from "./AuthUser";
import { Link } from "react-router-dom";

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
       name: "",
       email: "", 
       password: "",
       login: "",
       };
    this.service = new AuthService();
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    const name = this.state.name;
    const login = this.state.login;
    this.service
      .signup(name, login, email, password)
      .then(response => {
        this.setState({ login: "", name: "", email: "", password: "" })
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
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <label>Login</label>
            <input
              type="text"
              name="login"
              value={this.state.login}
              onChange={this.handleChange}
            />
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    );
  }
}