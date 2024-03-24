import React from "react";
import { Flex, Text, Button } from "@chakra-ui/react";
import { RiCircleFill } from "react-icons/ri";

export const Landing = () => {
  return (
    <Flex width="100%" height="100%">
      <Flex
        position="fixed"
        top="0"
        // color="black"
        // zIndex="100"
        // justifySelf="center"
        // justifyContent="space-between"
        // alignItems="center"
        // borderRadius="100px"
        height="72px"
        width="100%"
      ></Flex>
      <Button variant="lgrey">
        <RiCircleFill />
        Home
      </Button>
    </Flex>
  );
};
