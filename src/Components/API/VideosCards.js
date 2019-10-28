import React from "react"
import PlayerVideo from "./VideoPlayer"
import randomKey from "../../random"

export default class VideoCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      result: this.props.date
    }
  }

  cardChildren(idYoutubeVideo) { 
    return (
          <div className="card">
            <div className="card-body">
              <PlayerVideo id = {idYoutubeVideo} />
            </div>
          </div>
    )
  }

  componentDidMount() {
    console.log(this.state.result)
  }

  cardDiv() {
    return( 
      <div className="container">
        <div className="row">
          {this.state.result.map((item) => {
            return (
              <div key={randomKey()} className="col-sm-4" > 
                {this.cardChildren(item.idYoutubeVideo)}
              </div>
              )
          })}
        </div>
      </div>
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