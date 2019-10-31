import React from "react"
import VideosCard from "./VideosCards"
import Axios from "axios"

export default class VideoHistory extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      result: []
    }
  }

  async callHistory() {
    const user = this.props.user
    const history = await Axios(`${process.env.REACT_APP_URL}/api/videos/history/list/${user._id}`)
    return history.data.sucess
  }

  async componentDidMount() {
    const date = await this.callHistory()
    this.setState({
      result: date
    })
  }

  render() {
    return (
      this.state.result.length !== 0 ? 
      <VideosCard date = {this.state.result} /> 
      : null
    )
  }
}