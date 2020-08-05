import React from "react"

export function UserInput({ handlerMethod, initialName }) {
  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) => handlerMethod(e, 2)}
        value={initialName}
      />
    </div>
  )
}
