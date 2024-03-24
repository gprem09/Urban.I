import React from "react";
import { Flex, Button } from "@chakra-ui/react";

export const Navbar = () => {
  return (
    <Flex
      bg="white"
      position="fixed"
      top="0"
      zIndex="100"
      paddingInline="1rem"
      justifySelf="center"
      justifyContent="space-between"
      alignItems="center"
      height="72px"
      width="100%"
    >
      <Flex gap="0.5rem">
        <Button variant="lgrey">Brandname</Button>
        <Button variant="lgrey">Home</Button>
        <Button variant="lgrey">Explore</Button>
        <Button variant="lgrey">Projects</Button>
        <Button variant="lgrey">Our Mission</Button>
      </Flex>
      <Flex gap="0.5rem">
        <Button variant="lgrey">Saved Projects</Button>
        <Button variant="boutline">My Account</Button>
      </Flex>
    </Flex>
  );
};
