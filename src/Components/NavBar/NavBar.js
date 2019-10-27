import React from "react"

export default function NavBar() {
  return (
    <nav className="navBar">
      <figure className="logo">
        <img
          src="https://cdn.onlinewebfonts.com/svg/img_556376.png"
          alt="" />
      </figure>
        <span className="search">
          <label htmlFor="inputSearch">
            <img src="https://files.slack.com/files-pri/T02CQ4EN4-FPWPK74MV/image.png" alt="lupa" />
          </label>
          <input placeholder="search..."  type="text" className="inputSearch " name="inputSearch"/>
        </span>
      </nav>
   )
}