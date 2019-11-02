import React, { Component } from "react";
import forestVideo from "./Assets/forest.mp4";
import forestMobile from "./Assets/forestMobile.jpg";

class Forest extends Component {
  render() {
    return (
      <div className="videoContainer forestPage">
        {/**Video used for the background of a medium to fullsized device */}
        <video
          autoPlay
          muted
          loop
          id="heroVideo"
          poster="#"
          alt="Background video of a forest"
        >
          <source src={forestVideo} type="video/mp4" />
        </video>

        {/**Image used for the background of a small device */}
        <img src={forestMobile} alt="Mobile Background of a forest" style={{display: "none"}} />
      </div>
    );
  }
}

export default Forest;
