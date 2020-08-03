import React, { Component } from "react";
// import { Route, Link, BrowserRouter } from "react-router-dom";

import NavBar from "./components/NavBar";
import NoteList from "./components/NoteList";
import Api from "./api/func";

export default class App extends Component {
  state = {
    notes: [],
  };

  loadNotes = async () => {
    const response = await Api.fetchAllNotes();
    this.setState({
      notes: response.data,
      addNew: false,
    });
  };

  componentDidMount() {
    this.loadNotes();
  }

  navbarCallback = () => {};

  render() {
    return (
      <div style={{ flex: 1, justifyContent: "flex-start" }}>
        <NavBar addNewCallback={this.navbarCallback}></NavBar>
        <NoteList notes={this.state.notes} />
      </div>
    );
  }
}
