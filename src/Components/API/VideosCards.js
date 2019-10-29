import React from "react"
import PlayerVideo from "./VideoPlayer"
import randomKey from "../../random"
import {Link} from "react-router-dom"

export default class VideoCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      result: this.props.date
    }
  }

  cardChildren(item) { 
    return (
          <React.Fragment>
            <Link to={{pathname: `/video/player/${item.idYoutubeVideo}`}}>
              <img src={item.imageUrl} alt="img-you" class="img-you"/>
            </Link>
              <div className="css-card-body">
                <figure class="img-user">
                  <img src= "./images/profile-icon.png" />
                </figure>
              <Link to={{pathname: `/video/player/${item.idYoutubeVideo}`}}>
                <div>
                  <h5 class="">{item.nameVideo}</h5>
                  <p class="">{item.videoDescription}</p>
                </div>
              </Link>
              </div>
            </React.Fragment>
    )
  }

  componentDidMount() {
    console.log(this.state.result)
  }

  cardDiv() {
    return( 
      <main className="container css-container">
          {this.state.result.map((item, index) => {
            if(index > 12) {
              return (
              <div key={randomKey()} className="div-you" > 
                {this.cardChildren(item)}
              </div>
              ) 
            }
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