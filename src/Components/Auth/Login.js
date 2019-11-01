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

  componentDidMount() {
    const navBar = document.getElementsByClassName("navBar")[0]
    const footer = document.getElementsByTagName("footer")[0]
    const ico = document.getElementsByClassName("navImages")

    // navBar.style.background = "rgba(196,196,196,0.5)"s
    // footer.style.background = "rgba(196,196,196,0.2)"
    for(let x of ico) {
      // x.style.background = "rgba(196,196,196,0.5)"
    }
  }

  render() {
    
    return (
      <section className="section-form " >
        <div className="container-form">
          <form onSubmit={this.handleFormSubmit}>
            <label>Email ou Username:</label>
            <input
              type="text"
              name="email"
              value={this.state.username}
              onChange={this.handleChange}
              placeholder="bobodacorte@braxil.com ou bobodacorte"
            />
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="123456789"
            />
            <button type="submit" className="btn btn-secondary btn-erase" value="Login" > LOGIN </button>
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