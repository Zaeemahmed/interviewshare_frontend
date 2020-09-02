import React from "react";
import Circle from "../../Base/Circle";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

const PlayRecording = ({ handleClick }) => {
  return (
    <Circle>
      <PlayArrowIcon style={{ color: "#31C4BF" }} onClick={handleClick} />
    </Circle>
  );
};

export default PlayRecording;
