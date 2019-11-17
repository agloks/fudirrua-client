import React from "react"
import VideosCard from "./VideosCards"
import VideoFiltedContext from "../Context/Context"
import {SphereSpinner} from "react-spinners-kit"

export default class VideoApi extends React.Component {
  constructor() {
    super()
    this.state = {
      result: []
    }
  }

  async callHome() {
    const firstCall = await fetch(`${process.env.REACT_APP_URL}/api/videos/home`, {credentials: "include"})
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
      this.state.result.length !== 0 ? 
      <VideoFiltedContext.Provider videoHome={this.state.result}>
        <VideosCard date = {this.state.result} /> 
      </VideoFiltedContext.Provider>
      :
      <div id="loading">
        <SphereSpinner
          size={250}
          color="#7AD2EB"
          loading={!this.state.result.length}
        />
      </div>
    )
  }
}