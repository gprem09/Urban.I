import { Flex, Text, Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex
      position="fixed"
      bottom="0.5rem"
      color="white"
      zIndex="100"
      paddingInline={["2rem", "4rem", "8rem"]}
      justifySelf="center"
      justifyContent="space-between"
      width={["100%", "80%"]}
      maxWidth="800px"
      alignItems="center"
      borderRadius="100px"
      height="72px"
    ></Flex>
  );
};

export default Navbar;
