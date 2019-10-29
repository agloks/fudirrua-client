import React from "react"
import VideosCard from "./VideosCards"

export default class VideoApi extends React.Component {
  constructor() {
    super()
    this.state = {
      result: []
    }
  }

  async callHome() {
    const firstCall = await fetch("http://localhost:3010/api/videos/home", {credentials: "include"})
    const firstCallToJson = await firstCall.json()
    return firstCallToJson
  }

  async componentDidMount() {
    const date = await this.callHome()
    this.setState({
      result: date
    })
  }

  render() {
    return (
      this.state.result.length !== 0 ? <VideosCard date = {this.state.result} /> : null
    )
  }
}