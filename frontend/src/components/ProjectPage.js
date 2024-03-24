import React from "react";
import { Stack, Image, Flex } from "@chakra-ui/react";
import { ProjBox } from "./Projbox";

export const ProjectPage = () => {
  return (
    <Stack
      width="100%"
      height="100%"
      marginBlock="5rem"
      paddingInline="1rem"
      gap="0.5rem"
    >
      <Image src="/images/project_head.png" width="100%" height="auto" />
      <Flex gap="0.5rem" width="100%" paddingBlock="4rem">
        <ProjBox image="/images/sendai.jpg" title="Sendai University" />
        <ProjBox image="/images/image 65.png" title="Shari Park" />
        <ProjBox image="/images/image 63.png" title="Oakford Green" />
        <ProjBox image="/images/image 76.png" title="Willowfield Valley" />
        <ProjBox image="/images/image 66.png" title="Sendai University" />
      </Flex>
      <Image src="/images/projbottom.png" width="100%" height="auto" />
    </Stack>
  );
};
