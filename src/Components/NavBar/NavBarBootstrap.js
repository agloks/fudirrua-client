import React from "react";

const NavBarBootstrap = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between flex">
    <div>
    <a className="navbar-brand" href="#"  alt="logo"/><img className= "navImages" src="/images/joker-icon.png" alt="a"/></div>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    {/* SANDUICE */}
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#" alt="notificações"/><img className= "navImages"src="/images/bell-icon.png" alt="a"/>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" alt="copiar link"/><img className= "navImages"src="/images/share-icon.png" alt="a"/>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" alt="Perfil"/>
                <img className= "navImages" src="/images/profile-icon.png" alt="a" />
          <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a className="dropdown-item" href="#">Editar Perfil</a>
            <a className="dropdown-item" href="#">LogOut/></a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
)}

export default NavBarBootstrap