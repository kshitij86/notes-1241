import React, { Component } from "react";

export default class Spinner extends Component {
  render() {
    return (
      <div style={{ justifyContent: "center", alignContent: "center" }}>
        <h1
          style={{
            color: "black",
            fontFamily: "monospace",
            marginTop: 100,
            marginRight: 500,
            marginLeft: 550,
          }}
        >
          Loading...
        </h1>
      </div>
    );
  }
}
