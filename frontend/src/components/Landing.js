import React from "react";
import {
  Flex,
  Text,
  Heading,
  Image,
  Button,
  Stack,
  Box,
} from "@chakra-ui/react";
import { RiCircleFill } from "react-icons/ri";

export const Landing = () => {
  return (
    <Stack width="100%" height="100%" marginTop="5rem" marginInline="1rem">
      <Box
        position="relative"
        width="100%"
        height="600px"
        borderRadius="20px"
        overflow="hidden"
      >
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
          maxWidth="500px"
        >
          <Text fontSize="xl" color="white">
            Drifter
          </Text>
          <Heading fontSize="5xl" lineHeight="1em" color="white">
            Discover the most innovative designs today.
          </Heading>
          <Flex gap="1rem">
            <Button variant="white">Get Started</Button>
            <Button variant="woutline">Learn More</Button>
          </Flex>
        </Stack>
      </Box>
      <Flex justifyContent="center" alignContent="center">
        <Stack textAlign="center">
          <Heading maxWidth="800px">
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
      </Flex>
    </Stack>
  );
};
