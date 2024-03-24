import React from "react";
import { Stack } from "@chakra-ui/react";
import { Chat } from "./chat";
import { Filter } from "./Filter";

export const Explore = () => {
  return (
    <Stack
      width="100%"
      height="100%"
      marginBlock="5rem"
      paddingInline="1rem"
      gap="0.5rem"
    >
      <Filter />
      <Chat />
    </Stack>
  );
};
