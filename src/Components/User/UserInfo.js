import React from "react"
import {Link} from "react-router-dom"
import AuthService from "../Auth/AuthUser"

export default class UserInfo extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: props.user.name,
      email: props.user.email, 
      password: props.user.password,
      login: props.user.login,
      themeDisplay: "default",
      location: props.user.location !== undefined ? props.user.location : ""
      }
      console.log(props.user.email)
      this.service = new AuthService()
      this.user = props.user
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.logout = this.logout.bind(this)
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

  logout(event) {
    event.preventDefault()
    this.service.logout().then((s) => {
      console.log(this.props)
      this.props.getUser(s);
      this.props.history.push(
        this.props.location.prevPath
          ? this.props.location.prevPath
          : "/"
      );
    })
  }

  render() {
  return (
    <div className="section-form" >
      <div className="info-user-write">
        <img src={this.user.imageUrl} alt="img-user" className="user-info-img" />
        <h3>NAME: {this.user.name}</h3>
      </div>
      <div className="container-form-user">
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder={this.user.name}
          />
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder={this.user.email}
          />
          <input
            type="text"
            name="login"
            value={this.state.login}
            onChange={this.handleChange}
            placeholder={this.user.login}
          />
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="Password"
          />
          <input
            type="password"
            name="location"
            value={this.state.location}
            onChange={this.handleChange}
            placeholder={(this.user.location === undefined | this.user.location === "") ? "Estado" : this.user.location}
          />
          <select onChange={this.handleChange} className="theme-choice" name="themeDisplay">
            <option>Light</option>
            <option>Pink</option>
            <option>Black</option>
            <option>Blue</option>
          </select>
          <div className="div-button-user-edits">
            <button className="btn btn-secondary" type="submit" value="Send" > TROQUE DE ROUPA! </button>
            <button className="btn btn-secondary" value="Logout" onClick={this.logout} > Logout! </button>
          </div>
        </form>
      </div>
    </div>
  );
  }
} 