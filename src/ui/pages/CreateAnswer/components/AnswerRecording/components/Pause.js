import React from "react";
import Circle from "./Circle";
import PauseIcon from "@material-ui/icons/Pause";

const PauseRecording = ({ handleClick }) => {
  return (
    <Circle bgColor="#D6E4F5">
      <PauseIcon style={{ color: "#2074D5" }} onClick={handleClick} />
    </Circle>
  );
};

export default PauseRecording;
