import React from "react"
import AuthService from "../Auth/AuthUser"

export default class Logout extends React.Component {
  constructor(props) {
    super(props)
    this.service = new AuthService();
    this.logoutUser = this.logoutUser.bind(this)
  }

  logoutUser() {
    this.service.logout().then(() => {
      this.props.getUser(null);
    });
  }

  componentDidMount() {
    this.logoutUser();
  }

  render() {
    return (
      <div style={{position:"relative", top: "320px"}}>
      </div>
    )
  }
} 