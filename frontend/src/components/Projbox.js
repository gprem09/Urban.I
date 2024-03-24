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
import { RiArrowRightSLine } from "react-icons/ri";

export const ProjBox = ({ image, title }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Card
      borderRadius="lg"
      overflow="hidden"
      width={isHovered ? "30%" : "20%"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      transition="all 0.3s ease-in-out"
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
        opacity={isHovered ? "0.60" : "0.38"}
        zIndex="2"
        background="linear-gradient(180deg, rgba(18, 20, 44, 1) 0%, rgba(18, 20, 44, 0) 100%)"
      />
      <Image
        src="/images/yeelowtags.png"
        display={isHovered ? "block" : "none"}
        position="absolute"
        top="0"
        left="0"
        padding="1rem"
        opacity="0.8"
        zIndex="3"
      />
      <Box padding="0" height="100%" width="100%">
        <Image
          height="100%"
          position="absolute"
          src={image}
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
            {title}
          </Heading>
          <Text color="white" noOfLines="2">
            Sendai University is renowned for its commitment to academic
            excellence.
          </Text>
          <Button
            marginTop="0.5rem"
            variant={isHovered ? "yellow" : "white"}
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
