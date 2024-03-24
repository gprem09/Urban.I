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
  CardHeader,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import { RiArrowRightSLine } from "react-icons/ri";

const ProjBox = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Card
      borderRadius="lg"
      overflow="hidden"
      width={isHovered ? "30%" : "20%"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      transition="width 0.3s ease-in-out"
      height="400px"
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
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="40%"
        opacity="0.38"
        zIndex="2"
        background="linear-gradient(180deg, rgba(18, 60, 24, 1) 0%, rgba(18, 60, 24, 0) 100%)"
      />
      <Image
        src="/images/yeelowtags.png"
        position="absolute"
        top="0"
        left="0"
        padding="1rem"
        opacity="0.8"
        zIndex="2"
      />
      <Box padding="0" height="100%" width="100%">
        <Image
          height="100%"
          position="absolute"
          src="/images/sendai.jpg"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          objectFit="cover"
        />
        <Stack
          position="absolute"
          bottom="0"
          left="0"
          padding="1rem"
          spacing="1.0rem"
          color="white"
          maxWidth="600px"
          zIndex="3"
        >
          <Heading fontSize="2xl" lineHeight="1em" color="white">
            Discover the most innovative designs today.
          </Heading>
          <Text color="white" noOfLines="2">
            Sendai University is renowned for its commitment to academic
            excellence.
          </Text>
          <Button
            marginTop="0.5rem"
            variant="white"
            justifyContent="space-between"
          >
            Get Started
            <RiArrowRightSLine style={{ width: "28px", height: "28px" }} />
          </Button>
        </Stack>
      </Box>
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
      <Flex gap="0.5rem" width="100%">
        <ProjBox />
        <ProjBox />
        <ProjBox />
        <ProjBox />
        <ProjBox />
      </Flex>
    </Stack>
  );
};
