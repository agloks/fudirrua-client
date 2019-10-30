import React from "react"
import PlayerVideo from "./VideoPlayer"
import randomKey from "../../random"
import {Link} from "react-router-dom"
import VideoFiltedContext from "../Context/Context"

export default class VideoCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      result: []
    }
    console.log("here")
  }

  cardChildren(item) { 
    return (
          <React.Fragment>
            <Link to={{pathname: `/video/player/${item.idYoutubeVideo}`}}>
              <img src={item.imageUrl} alt="img-you" className="img-you"/>
            </Link>
              <div className="css-card-body">
                <figure className="img-user">
                  <img src= "./images/profile-icon.png" alt="proile-icon"/>
                </figure>
              <Link to={{pathname: `/video/player/${item.idYoutubeVideo}`}} className="linkVideoPlayer">
                <div>
                  <h5 className="">{item.nameVideo}</h5>
                  <p className="">{item.videoDescription}</p>
                </div>
              </Link>
              </div>
            </React.Fragment>
    )
  }

  componentDidMount() {
    if(this.props.date !== undefined) {
      this.setState({
        result: this.props.date
      })
    } else {
      this.setState({
        result: this.props.resultFromFilter
      })
      console.log(this.props)
    }
  }

  cardDiv() {
    return( 
      <main className="container css-container">
          {this.state.result.map((item, index) => {
            {/* if(index > 12) { */}
              return (
              <div key={randomKey()} className="div-you" > 
                {this.cardChildren(item)}
              </div>
              ) 
            {/* } */}
          })}
      </main>
    )
  }

  render() {
    return (
        <React.Fragment>
          {this.cardDiv()}
        </React.Fragment>
        )
  }
}