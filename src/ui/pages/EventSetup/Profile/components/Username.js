import React from "react";
import { Typography } from "@material-ui/core";

export default function Username() {
  return (
    <Typography
      variant="h5"
      style={{
        fontFamily: "PT Serif",
        fontWeight: "bold",
        letterSpacing: "0.08em",
        color:"#3C3E3F"
      }}
    >
      James Smith
    </Typography>
  );
}
