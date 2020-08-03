import React, { Component } from "react";
// import { Route, Link, BrowserRouter } from "react-router-dom";

import NavBar from "./components/NavBar";
import NoteList from "./components/NoteList";
import Spinner from "./components/Spinner";
import Api from "./api/func";

export default class App extends Component {
  state = {
    notes: [],
    loading: true,
  };

  loadNotes = async () => {
    const response = await Api.fetchAllNotes();
    this.setState({
      notes: response.data,
      loading: false,
    });
  };

  componentDidMount() {
    this.loadNotes();
  }

  navbarCallback = () => {};

  render() {
    return (
      <div
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        <NavBar></NavBar>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <NoteList notes={this.state.notes} />
        )}
      </div>
    );
  }
}
