import React, { Component } from "react";

export default class Spinner extends Component {
  render() {
    return (
      <div style={{ justifyContent: "center", alignContent: "center" }}>
        <h1 style={{ color: "black", fontFamily: "monospace" }}>Loading...</h1>
      </div>
    );
  }
}
