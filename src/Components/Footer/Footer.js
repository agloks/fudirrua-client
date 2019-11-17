import React from "react"
import {Link} from "react-router-dom"

export default class Footer extends React.Component {
  constructor(props) {
    super(props)
  }

  footer() {
    return (
      <footer>
          <div className="icon-footer">
            <figure className="figure-icon-footer">
              <Link to="/maps">
                <img src="/images/gps-icon.png" alt="lupa-footer" />
              </Link>
            </figure>
          </div>
          <div className="icon-footer">
            <figure className="figure-icon-footer">
              <Link to="/history">
                <img src="/images/history-icon.png" alt="lupa-footer" />
              </Link>
            </figure>
          </div>
          <div className="icon-footer">
            <figure className="figure-icon-footer">
              <Link to="/hearts">
                <img src="/images/heart-red.png" alt="bell-footer" />
              </Link>
            </figure>
          </div>
          <div className="icon-footer">
            <figure className="figure-icon-footer">
              <Link to="/share">
                <img src="/images/share-icon.png" alt="share-footer" />
              </Link>
            </figure>
          </div>
          <div className="icon-footer">
            <figure className="figure-icon-footer">
              <Link to="/user">
                <img src="/images/profile-icon.png" alt="profile-icon" />
              </Link>
            </figure>
          </div>
        </footer>
      )
    }

  render() {
    return (
      <React.Fragment>
        {this.footer()}
      </React.Fragment>
    )
  }
}