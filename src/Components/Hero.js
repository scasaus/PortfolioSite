import React, { Component } from "react";
import { Consumer } from "../context";

//hero component
class Hero extends Component {
  


  render() {
    return (
      <Consumer>
        {value => {

          return (
            <div className="hero">
              <div className="heroComponent">{value.videoComponents[value.videoIndex].video}</div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

//default props for hero component
Hero.defaultProps = {};

//require props for hero component
Hero.propTypes = {};

export default Hero;
