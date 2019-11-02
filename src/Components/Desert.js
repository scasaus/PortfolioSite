import React, { Component } from "react";
import desertVideo from "./Assets/desert.mp4";
import desertMobile from "./Assets/desertMobile.jpg";

class Desert extends Component {


  render() {
    return (
      <div className="videoContainer desertPage">
        {/**Video used for the background of a medium to fullsized device */}
        <video
          autoPlay
          muted
          loop
          id="heroVideo"
          poster="#"
          alt="Background video of a desert"
        >
          <source className="videoContainer" src={desertVideo} type="video/mp4" />
        </video>

        {/**Image used for the background of a small device */}
        <img src={desertMobile} alt="Mobile Background of a Desert" style={{display: "none"}} />
      </div>
    );
  }
}

export default Desert;
