import React from "react";
import TextField from "@material-ui/core/TextField";

const Text = (props) => {
  return (
    <TextField
      variant="outlined"
      size="small"
      style={{backgroundColor:"#F5F5F5",outline:"none"}}
      {...props}  
    />
  );
};

export default Text;
