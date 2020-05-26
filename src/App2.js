import React from "react";

export function App2({ handleEvent, value }) {
  const style = {
    color: "red",
  };
  return (
    <div>
      <label>Enter Some text:</label>
      <input
        style={style}
        value={value}
        onChange={handleEvent}
        placeholder="Enter Username"
      />
    </div>
  );
}
