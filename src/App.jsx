import React from "react"

import "./index.css"
import { UserInput } from "./UserInput"
import { UserOutput } from "./UserOutput"

export class App extends React.Component {
  state = {
    inValue: "Batman",
  }

  handleInput = (e, n) => {
    console.log(n)
    this.setState({ inValue: e.target.value })
  }

  render() {
    return (
      <div>
        <UserInput
          handlerMethod={this.handleInput}
          initialName={this.state.inValue}
        />
        <UserOutput name={this.state.inValue} />
      </div>
    )
  }
}
