import React, { Component } from "react";
import logo from "./Assets/leWebConst.png";

class Nav extends Component {
  render() {
    return (
      //navbar
      <div className="Nav">
        <nav className="navbar navbar-default navbar-dark">
          <div>
            <div className="navbar-header">
              <a className="logo" href="#">
                <img src={logo} alt="le Web Constructeur Logo" />
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

//default props for navbar
Nav.defaultProps = {};

//require props for navbar
Nav.propTypes = {};

export default Nav;
