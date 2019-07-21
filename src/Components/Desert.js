import React, { Component } from "react";
import desertVideo from "./Assets/desert.mp4";

class Desert extends Component {
  render() {
    return (
      <div className="container Hero">
        <video
          autoPlay
          muted
          loop
          id="heroVideo"
          poster="#"
        >
          <source src={desertVideo} type="video/mp4" />
        </video>{" "}
      </div>
    );
  }
}

export default Desert;
