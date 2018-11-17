import React from "react";
import ReactDOM from "react-dom";
import CalcForm from "./calculate.js";
import "./styles.css";
/**
 * This function object contains the entire app
 * <CalcForm /> is a statefull component that handles the score calculation as well as updating the view
 */
function App() {
  return (
    <div className="App">
      <div id="title">Bowling Score Calculator</div>
      <CalcForm />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
