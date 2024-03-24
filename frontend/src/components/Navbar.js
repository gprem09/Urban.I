import React from "react";
import { Flex, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { RiCircleFill } from "react-icons/ri";

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
        <Link to="/">
          <Button variant="lgrey" gap="0.4rem">
            <RiCircleFill style={{ width: "8px", height: "8px" }} />
            Home
          </Button>
        </Link>
        <Link to="/explore">
          <Button variant="lgrey">Explore</Button>
        </Link>
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
