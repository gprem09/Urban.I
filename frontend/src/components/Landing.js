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
    <Flex width="100%" height="100%" marginTop="5rem" marginInline="1rem">
      <Box
        position="relative"
        width="100%"
        height="500px"
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
          padding="1rem"
          spacing="1rem"
          color="white"
        >
          <Text fontSize="xl">Drifter</Text>
          <Heading fontSize="3xl" color="white">
            Discover the most innovative designs today.
          </Heading>
          <Flex gap="1rem">
            <Button variant="white">Get Started</Button>
            <Button variant="woutline">Learn More</Button>
          </Flex>
        </Stack>
      </Box>
    </Flex>
  );
};
