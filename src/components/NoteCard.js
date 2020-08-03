import React from "react";
import { Delete } from "@material-ui/icons";
import {
  Card,
  CardContent,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import Api from "../api/func";

export default function NoteCard({ title, body, id }) {
  async function dropNote(drop_id) {
    const response = await Api.dropOneNote(drop_id);
    console.log(response.data);
    window.location.reload();
  }

  const cardStyle = {
    background: "#eee",
    width: 300,
    height: 300,
    margin: 10,
  };
  return (
    <div>
      <Card style={cardStyle}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            {title}
          </Typography>
          <Typography variant="h5" component="h2">
            {body}
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            style={{ marginBottom: 10 }}
            disableElevation
          >
            View Note
          </Button>
          <IconButton
            style={{ marginBottom: 10, marginLeft: 100 }}
            onClick={() => {
              dropNote(id);
            }}
          >
            <Delete />
          </IconButton>
        </CardContent>
      </Card>
    </div>
  );
}
