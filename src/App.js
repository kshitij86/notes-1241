import React, { Component } from "react";

import NavBar from "./components/NavBar";
import NoteList from "./components/NoteList";
import Spinner from "./components/Spinner";
import AddNew from "./components/AddNew";
import Api from "./api/func";

export default class App extends Component {
  state = {
    notes: [],
    loading: true,
    case: 0,
  };

  appStyle = {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    justifyItems: "center",
  };

  loadNotes = async () => {
    const response = await Api.fetchAllNotes();
    console.log(response);
    this.setState({
      notes: response.data,
      loading: false,
    });
  };

  switchComponentCallback = (dataFromChild) => {
    if (dataFromChild === true) {
      this.setState({
        case: 1,
      });
    } else {
      this.setState({
        case: 0,
      });
    }
  };

  switchComponents() {
    switch (this.state.case) {
      case 0:
        const notesComp = this.state.loading ? (
          <Spinner />
        ) : (
          <NoteList notes={this.state.notes} />
        );
        return notesComp;
      case 1:
        return <AddNew />;
      default:
        return <NoteList notes={this.state.notes} />;
    }
  }

  componentDidMount() {
    this.loadNotes();
  }

  render() {
    return (
      <div style={this.appStyle}>
        <NavBar callback={this.switchComponentCallback}></NavBar>
        {this.switchComponents()}
      </div>
    );
  }
}
