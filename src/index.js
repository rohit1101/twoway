import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import { App2 } from "./App2";

class UserInput extends React.Component {
  state = {
    userName: "Max",
  };

  handleChange = (e) => {
    this.setState({ userName: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <App2 handleEvent={this.handleChange} value={this.state.userName} />
        <App name={this.state.userName} />
        <App name={this.state.userName} />
      </div>
    );
  }
}

ReactDOM.render(<UserInput />, document.getElementById("root"));
