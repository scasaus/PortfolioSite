import React, { Component } from "react";

import Beach from "./Components/Beach";
import Desert from "./Components/Desert";
import Forest from "./Components/Forest";

const Context = React.createContext();


export class Provider extends Component {

  state = {
    videoComponents: [
      {
        id: 0,
        video: <Beach />
      },
      {
        id: 1,
        video: <Desert />
      },
      {
        id: 2,
        video: <Forest />
      }
    ],
    videoIndex: 0
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
