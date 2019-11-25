import React, { Component } from "react";
import { Consumer } from "../context";
import Hero from "./Hero";
import { Nav, NavItem, NavLink } from "reactstrap";

class NavBar extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <div className="nav-container" id="header">
              <div>
                <div className="logo">
                  <span class="icon fas fa-code"></span>
                </div>
              </div>

              <div className="content">
                <div className="inner">
                  <h1>Shawn Casaus</h1>
                  <p>Full Stack Engineer with an eye for design. </p>
                  <a
                    className="fab fa-github"
                    href="https://github.com/seancasaus"
                  >
                    &nbsp;&nbsp;&nbsp;seancasaus
                  </a>
                  <br />
                  <a
                    className="icon fab fa-linkedin"
                    href="https://www.linkedin.com/in/sean-casaus-20b263b8/"
                  >
                    &nbsp;&nbsp;&nbsp;Sean Casaus
                  </a>
                  <br />
                  <a
                    className="icon far fa-envelope"
                    href="mailto:shawn.casaus@gmail.com"
                  >
                    &nbsp;&nbsp;&nbsp;shawn.casaus@gmail.com
                  </a>
                </div>
              </div>

              <Nav className="navBar" style={{ listStyle: "none" }}>
                <NavItem>
                  <button
                    onClick={() => {
                      value.videoIndex - 1 === -1
                        ? (value.videoIndex = 2)
                        : value.videoIndex--;
                      this.setState({ videoIndex: value.videoIndex });
                    }}
                  >
                    Projects
                  </button>
                </NavItem>

                <NavItem>
                  <button
                    onClick={() => {
                      value.videoIndex + 1 === 3
                        ? (value.videoIndex = 0)
                        : value.videoIndex++;
                      this.setState({ videoIndex: value.videoIndex });
                    }}
                  >
                    About
                  </button>
                </NavItem>
              </Nav>
              <Hero />
            </div>
          );
        }}
      </Consumer>
    );
  }
}

//default props for navbar
NavBar.defaultProps = {};

//require props for navbar
NavBar.propTypes = {};

export default NavBar;
