import React from "react";
import { Delete } from "@material-ui/icons";
import {
  Card,
  CardContent,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";

export default function NoteCard({ title, body }) {
  const cardStyle = {
    flex: 1,
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
            style={{ marginTop: 150 }}
            disableElevation
          >
            View Note
          </Button>
          <IconButton style={{ marginTop: 150, marginLeft: 100 }}>
            <Delete />
          </IconButton>
        </CardContent>
      </Card>
    </div>
  );
}
