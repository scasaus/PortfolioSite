import React, { Component } from "react";
import { Consumer } from "../context";
import Hero from "./Hero";
import { Nav, NavItem, NavLink } from 'reactstrap';


class NavBar extends Component {
  render() {

    return (
      <Consumer>
        {value => {
          return (
              <div className="nav-container">
                <Nav className="navBar">
                  <NavItem>
                    <button onClick={() => {
                      (value.videoIndex - 1 === -1) ? value.videoIndex = 2 : value.videoIndex--;
                      this.setState({ videoIndex: value.videoIndex });
                      }}>left</button>
                  </NavItem>
                  <NavItem>
                    <button onClick={() => {
                      (value.videoIndex + 1 === 3) ? value.videoIndex = 0 : value.videoIndex++;
                      this.setState({ videoIndex: value.videoIndex });
                      }}>right</button>
                  </NavItem>
                  <NavItem>
                    <button onClick={() => {console.log(value.videoIndex)}}>display</button>
                  </NavItem>
                </Nav>
                <h1>{value.videoIndex}</h1>
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
