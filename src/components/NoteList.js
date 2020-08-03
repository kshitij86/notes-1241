import React from "react";

import { Row, Col } from "react-simple-flex-grid";
import "react-simple-flex-grid/lib/main.css";
import NoteCard from "./NoteCard";

export default function NoteList({ notes }) {
  const noteItems = notes.map((note, idx) => (
    <Col span={3} key={idx}>
      <NoteCard title={note.note_title} body={note.note_body}></NoteCard>
    </Col>
  ));

  return <Row>{noteItems}</Row>;
}
