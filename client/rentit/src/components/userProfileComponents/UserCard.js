import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

export default function UserCard() {
  return (
    <Card sx={{ maxWidth: 600, display: "flex", height: "auto", p: "2rem" }}>
      <CardMedia
        component="img"
        height="300"
        src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
        alt="profile picture of a man"
      />
      <CardContent
        sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <Typography gutterBottom variant="h5" component="div">
          Ola Nordmann
        </Typography>
        <Typography variant="body2" color="text.secondary">
          05-03-1981
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Sørlia 45, 0693 Oslo
        </Typography>
        <Typography variant="body2" color="text.secondary">
          +47 999 99 999
        </Typography>
        <Typography variant="body2" color="text.secondary">
          o.nordm@rentit.no
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Førerkort klasse B
        </Typography>
      </CardContent>
    </Card>
  );
}
