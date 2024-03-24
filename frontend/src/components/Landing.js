import React, { useState } from "react";
import {
  Flex,
  Text,
  Heading,
  Image,
  Button,
  Stack,
  Box,
  Card,
} from "@chakra-ui/react";
import { ProjBox } from "./Projbox";

export const Landing = () => {
  return (
    <Stack width="100%" height="100%" marginBlock="5rem" marginInline="1rem">
      <Box
        position="relative"
        width="100%"
        height="600px"
        borderRadius="20px"
        overflow="hidden"
      >
        <Box
          position="absolute"
          bottom="0"
          left="0"
          width="100%"
          height="60%"
          opacity="0.8"
          zIndex="2"
          background="linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)"
        />
        <Image
          src="/images/landingImage.jpg"
          alt="Landing Image"
          objectFit="cover"
          width="100%"
          height="100%"
          position="absolute"
          top="0"
          left="0"
        />
        <Stack
          position="absolute"
          bottom="0"
          left="0"
          padding="2rem"
          spacing="1.6rem"
          color="white"
          maxWidth="600px"
          zIndex="3"
        >
          <Text fontSize="xl" color="white">
            Drifter
          </Text>
          <Heading fontSize="6xl" lineHeight="1em" color="white">
            Discover the most innovative designs today.
          </Heading>
          <Flex gap="1rem">
            <Button variant="white">Get Started</Button>
            <Button variant="woutline">Learn More</Button>
          </Flex>
        </Stack>
      </Box>
      <Flex justifyContent="center" alignItems="center" paddingBlock="10rem">
        <Image
          src="/images/leftAbt.png"
          alt="Landing Image"
          width="100px"
          height="100px"
        />
        <Stack textAlign="center" alignItems="center" gap="1.2rem">
          <Heading fontSize="6xl" maxWidth="800px" lineHeight="1.2em">
            Create the next masterpiece that changes the world.
          </Heading>
          <Text maxWidth="530px">
            Our platform enables budding architects to contribute to a brighter
            future through innovative interactive 3D mapping technology.
          </Text>
          <Flex gap="1rem">
            <Button variant="boutline">View Projects</Button>
            <Button variant="white">Learn More</Button>
          </Flex>
        </Stack>
        <Image
          src="/images/rightAbt.png"
          alt="Landing Image"
          width="100px"
          height="100px"
        />
      </Flex>
      <Image
        src="/images/Frame 1707478446.png"
        alt="Landing Image"
        width="100%"
        height="100%"
        marginBottom="6rem"
      />
      <Flex
        justifyContent="center"
        gap="2rem"
        alignItems="center"
        paddingBlock="6rem"
      >
        <Stack maxWidth="500px" gap="1.2rem">
          <Heading fontSize="5xl">Envision the future.</Heading>
          <Text maxWidth="400px">
            View how thousands of the world’s best architectural designs would
            look in your neighbourhood, using machine learning and 3D mapping
            technology.
          </Text>
          <Flex gap="1rem">
            <Button variant="boutline">Try It Out Now </Button>
            <Button variant="white">Learn More</Button>
          </Flex>
        </Stack>
        <Image
          src="/images/Frame 1707478466.png"
          alt="Landing Image"
          width="660px"
          height="auto"
        />
      </Flex>
      <Flex gap="0.5rem" width="100%">
        <ProjBox image="/images/sendai.jpg" title="Sendai University" />
        <ProjBox image="/images/image 65.png" title="Shari Park" />
        <ProjBox image="/images/image 63.png" title="Oakford Green" />
        <ProjBox image="/images/image 76.png" title="Willowfield Valley" />
        <ProjBox image="/images/image 66.png" title="Sendai University" />
      </Flex>
    </Stack>
  );
};
