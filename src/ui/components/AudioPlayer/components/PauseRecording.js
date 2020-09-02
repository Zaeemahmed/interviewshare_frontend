import React from "react";
import Circle from "../../Base/Circle";
import PauseIcon from "@material-ui/icons/Pause";

const PauseRecording = ({ handleClick }) => {
  return (
    <Circle>
      <PauseIcon style={{ color: "#31C4BF" }} onClick={handleClick} />
    </Circle>
  );
};

export default PauseRecording;
