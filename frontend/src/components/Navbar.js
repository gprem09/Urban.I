import React from "react";
import { Flex, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { RiCircleFill } from "react-icons/ri";
import { RiEye2Fill } from "react-icons/ri";
import { RiHeartsFill } from "react-icons/ri";
import { RiAccountCircleFill } from "react-icons/ri";
import { RiCompass3Fill } from "react-icons/ri";
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
        <Link to="/">
          <Button variant="lgrey" gap="0.4rem">
            <RiCircleFill style={{ width: "8px", height: "8px" }} />
            Home
          </Button>
        </Link>
        <Link to="/explore">
          <Button variant="lgrey" gap="0.4rem">
            {/* <RiCompass3Fill style={{ width: "20px", height: "20px" }} /> */}
            Explore
          </Button>
        </Link>
        <Link to="/project">
          <Button variant="lgrey" gap="0.4rem">
            {/* <RiMapPinRangeFill style={{ width: "20px", height: "20px" }} /> */}
            Projects
          </Button>
        </Link>
      </Flex>
      <Link to="/">
        <Button variant="lgrey" gap="0.2rem">
          <RiEye2Fill style={{ width: "24px", height: "24px" }} />
          urbanI
        </Button>
      </Link>
      <Flex gap="0.5rem">
        <Button variant="lgrey" gap="0.4rem">
          <RiHeartsFill style={{ width: "20px", height: "20px" }} />
          Favourites
        </Button>
        <Button variant="boutline" gap="0.4rem">
          <RiAccountCircleFill style={{ width: "20px", height: "20px" }} />
          Account
        </Button>
      </Flex>
    </Flex>
  );
};
