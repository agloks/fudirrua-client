import React from "react"
import {Link} from "react-router-dom"
import AuthService from "../Auth/AuthUser"
import Axios from "axios"

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

  async handleFormSubmit(event) {
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    const name = this.state.name;
    const login = this.state.login;
    const themeDisplay = this.state.themeDisplay
    const editCall = await Axios.put(`${process.env.REACT_APP_URL}/api/user/update`,{
      name: name,
      email: email,
      password: password,
      login: login,
      themeDisplay: themeDisplay
    },{withCredentials: true})
    console.log(editCall)
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
        <p>EMAIL: {this.user.email}</p>
        <p>USERNAME: {this.user.login}</p>
      </div>
      <div className="container-form-user">
        <form onSubmit={this.handleFormSubmit}>
        <div className="input-label-user-profile">
          <label forHtml="name">Nome: </label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder={this.user.name}
          />
        </div>
        <div className="input-label-user-profile">
          <label forHtml="email">Email: </label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder={this.user.email}
            />
          </div>
          <div className="input-label-user-profile">
            <label forHtml="login">Username: </label>
            <input
              type="text"
              name="login"
              value={this.state.login}
              onChange={this.handleChange}
              placeholder={this.user.login}
            />
          </div>
          <div className="input-label-user-profile">
            <label forHtml="password">Password: </label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="Password"
            />
          </div>
          <div className="input-label-user-profile">
            <label forHtml="location">Estado: </label>
            <input
              type="text"
              name="location"
              value={this.state.location}
              onChange={this.handleChange}
              placeholder={(this.user.location === undefined | this.user.location === "") ? "Estado" : this.user.location}
            />
          </div>
          <div className="input-label-user-profile">
          <label >Tema: </label>
          <select onChange={this.handleChange} className="theme-choice" name="themeDisplay">
            <option>Light</option>
            <option>Pink</option>
            <option>Black</option>
            <option>Blue</option>
          </select>
          </div>
          <div className="div-button-user-edits">
            <button className="btn btn-secondary btn-submit-user" type="submit" value="Send" > TROQUE DE ROUPA! </button>
            <button className="btn btn-secondary" value="Logout" onClick={this.logout} > Logout! </button>
          </div>
        </form>
      </div>
    </div>
  );
  }
} 