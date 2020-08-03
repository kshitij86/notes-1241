import React from "react";

import { Row, Col } from "react-simple-flex-grid";
import "react-simple-flex-grid/lib/main.css";
import NoteCard from "./NoteCard";

export default function NoteList({ notes }) {
  if (notes.length === 0) {
    return (
      <h1
        style={{
          fontFamily: "monospace",
          marginTop: 100,
          marginRight: 500,
          marginLeft: 550,
        }}
      >
        Nothing here
      </h1>
    );
  } else {
    const noteItems = notes.map((note, idx) => (
      <Col span={3} key={idx}>
        <NoteCard
          title={note.note_title}
          body={note.note_body}
          id={note.note_id}
        ></NoteCard>
      </Col>
    ));

    return <Row>{noteItems}</Row>;
  }
}
