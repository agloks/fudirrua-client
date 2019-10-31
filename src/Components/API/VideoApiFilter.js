import React from "react"
import VideosCard from "./VideosCards"
import axios from "axios"

export default class VideoApiFilter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      result: [],
    }
  }

  static getDerivedStateFromProps(prevProps) {
      return { result: prevProps } //static, not is necessary use of this and setState
  }

  async callFilter() {
    const firstCall = await axios.post(
      `${process.env.REACT_APP_URL}/api/videos/filter`,
      this.appProps,
      {withCredentials: true}
    )
    return firstCall.data
  }

  async componentDidMount() {
    if(this.props.resultFromFilter.length !== 0 ) {
      this.setState({
            result: this.props.resultFromFilter
          })
    }
  }

  render() {
    return (
      this.state.result.length !== 0 ? <VideosCard date = {this.state.result} /> : null
    )
  }
}