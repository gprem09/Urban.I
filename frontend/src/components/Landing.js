import React from "react";
import {
  Flex,
  Text,
  Heading,
  Image,
  Button,
  Stack,
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import { RiCircleFill } from "react-icons/ri";

const ProjBox = () => {
  return (
    <Card borderRadius="20px">
      <Box
        position="absolute"
        bottom="0"
        left="0"
        width="100%"
        height="60%"
        opacity="0.8"
        background="linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)"
      />
      <CardBody padding="0">
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
      </CardBody>
    </Card>
  );
};

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
      <ProjBox />
    </Stack>
  );
};
