import React from "react"

export default class Footer extends React.Component {
  constructor(props) {
    super(props)
  }

  footer() {
    return (
      <footer>
          <div className="icon-footer">
            <figure className="figure-icon-footer">
              <img src="/images/lupa-icon.png" alt="lupa-footer" />
            </figure>
          </div>
          <div className="icon-footer">
            <figure className="figure-icon-footer">
              <img src="/images/bell-icon.png" alt="bell-footer" />
            </figure>
          </div>
          <div className="icon-footer">
            <figure className="figure-icon-footer">
              <img src="/images/share-icon.png" alt="share-footer" />
            </figure>
          </div>
          <div className="icon-footer">
            <figure className="figure-icon-footer">
              <img src="/images/profile-icon.png" alt="profile-icon" />
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