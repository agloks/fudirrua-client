import React from "react"

export default class UserInfo extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
  }

  render() {
    return (
      <div style={{position:"relative", top: "320px"}}>
        <img src={this.props.user !== null ? this.props.user.imageUrl : null} alt="sa" />
      </div>
    )
  }
} 