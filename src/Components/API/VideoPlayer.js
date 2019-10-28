import React from "react"
import YouTube from 'react-youtube';

export default class PlayerVideo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      idYoutubeVideo: this.props.id
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
      <YouTube
        videoId={this.state.idYoutubeVideo} //id it's for render video youtube
        opts={opts}
        onReady={this._onReady}
      />
    );
  }
 
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}