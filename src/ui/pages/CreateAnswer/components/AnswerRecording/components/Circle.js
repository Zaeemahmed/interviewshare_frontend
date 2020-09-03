import React from "react";
import { Flex } from "../../../../../components/Base/Base";

const Circle = ({ children, bgColor }) => {
  return (
    <Flex
      bg={bgColor}
      width="42px"
      height="42px"
      alignItems="center"
      justifyContent="center"
      style={{ boxSizing: "border-box" }}
      borderRadius="50%"
    >
      {children}
    </Flex>
  );
};

export default Circle;
