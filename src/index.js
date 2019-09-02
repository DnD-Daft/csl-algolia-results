import React from "react";
import ReactDOM from "react-dom";

import PlacesDemo from "./places";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>The country values will all resolve to "Definitely not France"</h2>
      <PlacesDemo />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
