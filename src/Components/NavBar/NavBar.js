import React from "react"
import {Link} from "react-router-dom"

export default class NavBar extends React.Component {

  constructor(props) {
    super(props)
    this.removeModal = this.removeModal.bind(this)
  }

  mobile() {
    return (
      <span className="search">
          <label htmlFor="inputSearch">
            <img src="./images/lupa-icon.png" alt="lupa-nav" />
          </label>
        <Link to="/filters">
          <input placeholder="search..."  type="text" className="inputSearch " name="inputSearch"/>
        </Link>      
      </span>
    )
  }

  icons() {
    return (
      <div className="div-icons">
        <figure className="icons">
          <Link to="/maps">
            <img className= "navImages" src="./images/gps-icon.png" alt="a"/>
          </Link>
        </figure>
        <figure className="icons">
          <Link to="/history">
            <img className= "navImages" src="./images/history-icon.png" alt="a"/>
          </Link>
        </figure>
        <figure className="icons">
          <Link to="/hearts">
            <img className= "navImages" src="./images/heart-filled-icon.png" alt="a"/>
          </Link>
        </figure>
        <figure className="icons">
          <Link to ="/share" >
            <img className= "navImages" src="./images/share-icon.png" alt="a"/>
          </Link>
        </figure>
        <figure className="icons">
          <Link to="/user">
            <img className= "navImages" src="./images/profile-icon.png" alt="a" />
          </Link>
        </figure>
      </div>
    )
  }

  removeModal() {
    const searchDomMobile = document.getElementById("searchDom")
    searchDomMobile.style.display = "none"
  }

  computer() {
    return ( 
    <nav className="navBar">
    <figure className="logo">
        <Link to ="/" onClick={this.removeModal}>
          <img src="https://cdn.onlinewebfonts.com/svg/img_556376.png" alt="" />
        </Link>
    </figure>
      {this.mobile()}
      {this.icons()}
    </nav>
    )
  }


  render() {
    return (
      <React.Fragment>
        {this.computer()}
      </React.Fragment>
     )
  }
}