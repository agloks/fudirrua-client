import React from "react"
import YouTube from 'react-youtube';
import Axios from "axios";
import AuthService from "../Auth/AuthUser"

export default class PlayerVideo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      idYoutubeVideo: null
    }
    this.service = new AuthService()
  }

  async registerHistory(idyou) {
    let user = await this.service.loggedin()
    const firstCall = await Axios(`${process.env.REACT_APP_URL}/api/videos/history/save/${idyou}/${user._id}`)
  }

  async componentDidMount() {
    this.setState({
      idYoutubeVideo : this.props.match.params.idyou
    })
    try {
      this.registerHistory(this.props.match.params.idyou)
    } catch(err) {
      console.log(err)
    }
  }

  render() {
    const opts = {
      height: '100%',
      width: '100%',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        modestbranding: 1,
        origin:'http://localhost:3000/'
      }
    };
 
    return (
      <div className="youPlayerDiv">
        {this.state.idYoutubeVideo !== null ? <YouTube
          className="youPlayer"
          videoId={this.state.idYoutubeVideo} //id it's for render video youtube
          opts={opts}
          onReady={this._onReady}
        /> : null}
      </div>
    );
  }
 
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}