import React from "react"
import YouTube from 'react-youtube';

export default class PlayerVideo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      idYoutubeVideo: null
    }
  }

  componentDidMount() {
    this.setState({
      idYoutubeVideo : this.props.match.params.idyou
    })
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