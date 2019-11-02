import React, { Component } from "react";
import desertVideo from "./Assets/desert.mp4";

class Desert extends Component {


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
          <source className="videoContainer" src={desertVideo} type="video/mp4" />
        </video>{" "}
      </div>
    );
  }
}

export default Desert;
