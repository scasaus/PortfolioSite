import React, { Component } from "react";
import { Consumer } from "../context";


//hero component
class Hero extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <div className="">
              <React.Fragment>{value.videoComponents[value.videoIndex].video}</React.Fragment>
              <button onClick={() => {
                (value.videoIndex - 1 === -1) ? value.videoIndex = 2 : value.videoIndex--;
                this.forceUpdate();
                }}>left</button>
              <button onClick={() => {
                (value.videoIndex + 1 === 3) ? value.videoIndex = 0 : value.videoIndex++;
                this.forceUpdate();
                }}>right</button>
              <button onClick={() => {console.log(value.videoIndex)}}>display</button>
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
