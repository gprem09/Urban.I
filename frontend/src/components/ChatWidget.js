import React, { useState } from "react";
import { Box, Button } from "@chakra-ui/react";

export const ChatWidget = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <Button
      position="fixed"
      bottom="1rem"
      right="1rem"
      zIndex="100"
      variant="yellow"
      width="100px"
      height="100px"
    ></Button>
  );
};
