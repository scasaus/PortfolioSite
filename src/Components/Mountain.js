import React, { Component } from "react";
import mountainVideo from "./Assets/mountain.mp4";

class Mountain extends Component {
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
          <source src={mountainVideo} type="video/mp4" />
        </video>{" "}
      </div>
    );
  }
}

export default Mountain;
