import React, { Component } from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { Edit } from "@material-ui/icons";

const navBarStyle = {
  alignItems: "center",
  justifyContent: "center",
  background: "black",
  margin: 10,
};

export default class NavBar extends Component {
  // addNewNoteCallback = () => {
  //   this.props.
  // };

  render() {
    return (
      <div>
        <AppBar style={navBarStyle} position="static">
          <Toolbar>
            <Edit />
            <Typography variant="h6" style={{ marginLeft: 10 }}>
              Notes
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              style={{ marginLeft: 1000 }}
            >
              Add new
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
