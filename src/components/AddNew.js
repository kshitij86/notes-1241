import React, { Component } from "react";
import { TextField, Container, Button } from "@material-ui/core";

export default class AddNew extends Component {
  render() {
    return (
      <Container style={{ padding: 100 }}>
        <form
          style={{ backgroundColor: "#eee", padding: 70, borderRadius: 20 }}
        >
          <h1 style={{ fontFamily: "monospace" }}>Add New Note</h1>
          <TextField label="Note title goes here" />
          <br />
          <br />
          <br />
          <TextField
            label="Note body goes here"
            style={{ width: "70%", height: "20%" }}
          />
          <br />
          <br />
          <br />
          <Button variant="contained" color="primary">
            Add NEw Note
          </Button>
        </form>
      </Container>
    );
  }
}
