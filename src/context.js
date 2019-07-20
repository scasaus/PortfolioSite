import React, { Component } from "react";

import Beach from "./Components/Beach";
import Desert from "./Components/Desert";
import Mountain from "./Components/Mountain";

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
        video: <Mountain />
      }
    ]
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
