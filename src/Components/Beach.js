import React, { Component } from "react";
import beachVideo from "./Assets/beach.mp4";

class Beach extends Component {
  render() {
    return (
      <div className="videoContainer">
        <video
          autoPlay
          muted
          loop
          id="heroVideo"
          poster="#"
        >
          <source src={beachVideo} type="video/mp4" />
        </video>
      </div>
    );
  }
}

export default Beach;
