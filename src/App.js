import React from "react";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";

import { Provider } from "./context";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function App() {
  return (
    <Provider>
      <div className="App">
        <div className="video-container">
          <Nav />
          <Hero />
        </div>
      </div>
    </Provider>
  );
}

export default App;
