import React from "react"
import VideosCard from "./VideosCards"
import Axios from "axios"

export default class VideoHistory extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      result: [],
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
      result: date,
    })
  }

  render() {
    const Component = this.props.component
    return (
      <React.Fragment> 
        <Component filterCallProp={this.props.filterCallProp}>
        </Component>
        {this.state.result.length ?
          <VideosCard date = {this.state.result} /> :
          <div className="mid">
            <h1><b>Tem histórico? aguarde...</b></h1>
            <p>Se não, bora assisti um vídeo e bora encher seu histórico =)</p>
          </div>
        }
      </React.Fragment> 
    )
  }
}