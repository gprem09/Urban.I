import React from "react";
import { Image, Stack } from "@chakra-ui/react";
import { Filter } from "./Filter";
export const InteractiveMap = () => {
  return (
    <Stack
      width="100%"
      height="100%"
      marginBlock="5rem"
      paddingInline="1rem"
      gap="0.5rem"
    >
      <Filter />
      <Image src="/images/Group 60.png"></Image>;
    </Stack>
  );
};
