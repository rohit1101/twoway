import React from "react";
// import logo from "./logo.svg";
import "./App.css";

export function App(props) {
  return (
    <div className="App">
      <p>Lorem ipsum dolor, {props.name}</p>
    </div>
  );
}
