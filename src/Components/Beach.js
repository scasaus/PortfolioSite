import React, { Component } from "react";
import beachVideo from "./Assets/beach.mp4";
import beachMobile from "./Assets/beachMobile.jpg";

class Beach extends Component {
  render() {
    return (
      <div className="videoContainer beachPage">
        {" "}
        {/**Video used for the background of a medium to fullsized device */}{" "}
        <video
          autoPlay
          muted
          loop
          id="heroVideo"
          poster="#"
          alt="Background video of the ocean"
        >
          <source src={beachVideo} type="video/mp4" />
        </video>
        {/**Image used for the background of a small device */}{" "}
        <img
          src={beachMobile}
          alt="Mobile Background of the Ocean"
          style={{
            display: "none",
            height: "100%"
          }}
        />{" "}
      </div>
    );
  }
}

export default Beach;
