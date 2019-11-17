import React from "react"
import PlayerVideo from "./VideoPlayer"
import randomKey from "../../random"
import {Link} from "react-router-dom"
import VideoFiltedContext from "../Context/Context"
import {SphereSpinner} from "react-spinners-kit"

export default class VideoCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      result: []
    }
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
                  <h4 className="">{item.nameVideo}</h4>
                  {/* <p className="">{item.videoDescription}</p> */}
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
    }
  }

  cardDiv() {
    let existid = ""
    return( 
      <main className="container css-container">
          {this.state.result.length !== 0 ? this.state.result.map((item, index) => {
            if(index < 100) {
              if(!(existid.includes(item.idYoutubeVideo))) {
                existid += item.idYoutubeVideo
                return (
                  <div key={randomKey()} className="div-you" data-aos="zoom-out-left" > 
                    {this.cardChildren(item)}
                  </div>
                )
              }
            }
          }) : 
          <div class="mid mid-fail">
            <h2>Sem resultado em até 10 segundo ? provalvemente não existe videos de acordo com o filtro ou sua net caiu, tente outros filtros e verifique sua net=)</h2>
          </div>
          }
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