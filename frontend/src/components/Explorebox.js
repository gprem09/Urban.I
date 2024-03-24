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
import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
import { RiHeartAddLine, RiHeartLine } from "react-icons/ri";

export const Explorebox = ({ image, name, country, website }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link to="/map">
      <Card
        borderRadius="lg"
        overflow="hidden"
        width="100%"
        transition="all 0.3s ease-in-out"
        height="200px"
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
        <Flex
          top="0"
          width="100%"
          height="auto"
          position="absolute"
          padding="0.5rem"
          justifyContent="space-between"
        >
          <Button
            fontSize="sm"
            padding="0.5rem"
            height="24px"
            variant="yellow"
            zIndex="4"
          >
            Sponsored
          </Button>
          <RiHeartAddLine
            style={{ width: "28px", height: "28px", zIndex: "4" }}
          />
        </Flex>
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
          objectFit="cover"
          top="0"
          left="0"
          padding="1rem"
          opacity="0.8"
          zIndex="3"
        />
        <Box padding="0" height="100%" width="100%">
          <Image
            width="100%"
            height="100%"
            position="absolute"
            src={image}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
            objectFit="cover"
            filter={isHovered ? "brightness(80%)" : "brightness(100%)"}
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
              {name}
            </Heading>
            <Stack gap="0">
              <Text color="white" noOfLines="1">
                Sendai University
              </Text>
              <Flex opacity="0.6" alignItems="center" gap="0.2rem">
                <RiHeartLine
                  style={{
                    width: "16px",
                    height: "16px",
                    zIndex: "4",
                  }}
                />
                <Text color="white ">3.8k Likes</Text>
              </Flex>
            </Stack>
          </Stack>
        </Box>
      </Card>
    </Link>
  );
};
