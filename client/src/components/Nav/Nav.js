import React from "react";

const Nav = () => (
<nav className="white" role="navigation">
    <div className="nav-wrapper container">
      <a id="logo-container" href="/Home" className="brand-logo gold-text">BUD'S N' SUDS</a>      
      <ul className="right hide-on-med-and-down">
        <li><a href="/Profile">Profile</a></li>
      </ul>

      <ul className="right hide-on-med-and-down">
        <li><a href="/Crawls">Crawls</a></li>
      </ul>

      <ul className="right hide-on-med-and-down">
        <li><a href="/Pubs">Pubs</a></li>
      </ul>

      <ul className="right hide-on-med-and-down">
        <li><a href="/Buds">Buds</a></li>
      </ul>

      <ul id="nav-mobile" className="sidenav">
        <li><a href="#">Navbar Link</a></li>
        <li><a href="/Buds">Buds</a></li>
        <li><a href="/Pubs">Pubs</a></li>
        <li><a href="/Crawls">Crawls</a></li>
        <li><a href="/Profile">Profile</a></li>
      </ul>
      <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
    </div>
  </nav>
);

export default Nav;
