import React from "react"
import {Link} from "react-router-dom"

export default class NavBar extends React.Component {

  mobile() {
    return (
      <span className="search">
          <label htmlFor="inputSearch">
            <img src="./images/lupa-icon.png" alt="lupa-nav" />
          </label>
        <input placeholder="search..."  type="text" className="inputSearch " name="inputSearch"/>
      </span>
    )
  }

  icons() {
    return (
      <div class="div-icons">
        <figure className="icons">
          <Link to="/news">
            <img className= "navImages" src="./images/bell-icon.png" alt="a"/>
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

  computer() {
    return ( 
    <nav className="navBar">
    <figure className="logo">
        <Link to ="/">
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