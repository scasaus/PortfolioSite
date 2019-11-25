import React from "react";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";

import { Provider } from "./context";

import "./App.css";

function App() {
  return (
    <Provider>
      <div className="App">
        <div className="video-container" style={{ height: "100%" }}>
          <NavBar />
        </div>
      </div>
    </Provider>
  );
}

export default App;
