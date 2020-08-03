import React, { Component } from "react";
import { AppBar, Toolbar, Button, IconButton } from "@material-ui/core";
import { Refresh } from "@material-ui/icons";

export default class NavBar extends Component {
  state = {
    addNewClicked: false,
  };

  navBarStyle = {
    background: "black",
  };

  refreshPage = () => {
    window.location.reload();
  };

  addNewComponent = () => {
    this.props.callback(this.state.addNewClicked);
  };

  addNewHandler = () => {
    this.setState({
      addNewClicked: true,
    });
    this.addNewComponent();
  };

  homeHandler = () => {
    this.setState({
      addNewClicked: false,
    });
    this.addNewComponent();
  };

  render() {
    return (
      <AppBar position="sticky" style={this.navBarStyle}>
        <Toolbar>
          <Button
            color="secondary"
            style={{ flexGrow: 1 }}
            onClick={() => {
              this.homeHandler();
            }}
          >
            Notes
          </Button>
          <IconButton
            onClick={() => {
              this.refreshPage();
            }}
          >
            <Refresh color="secondary" />
          </IconButton>
          <Button
            color="secondary"
            onClick={() => {
              this.addNewHandler();
            }}
          >
            Add New
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}
