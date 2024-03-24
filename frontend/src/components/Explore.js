import React from "react";
import { Flex, Button } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";
import { RiArrowDownSLine } from "react-icons/ri";

export const Explore = () => {
  return (
    <Flex
      width="100%"
      height="100%"
      marginBlock="5rem"
      paddingInline="1rem"
      gap="0.5rem"
    >
      <Button variant="boutline" gap="2rem" opacity="0.6">
        City, Neighbourhood, ZIP, Address...{" "}
        <RiSearchLine style={{ width: "20px", height: "20px" }} />
      </Button>
      <Button variant="lgrey">
        Filter
        <RiArrowDownSLine style={{ width: "20px", height: "20px" }} />
      </Button>
      <Button variant="lgrey">
        Region <RiArrowDownSLine style={{ width: "20px", height: "20px" }} />
      </Button>
      <Button variant="lgrey">
        Ranking <RiArrowDownSLine style={{ width: "20px", height: "20px" }} />
      </Button>
      <Button variant="yellow">Search</Button>
    </Flex>
  );
};
