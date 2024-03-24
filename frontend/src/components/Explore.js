import React from "react";
import {
  Flex,
  Button,
  Stack,
  Grid,
  GridItem,
  Image,
  Heading,
  Text,
} from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";
import { RiArrowDownSLine } from "react-icons/ri";
import { Chat } from "./chat";
import { Explorebox } from "./Explorebox";

export const Explore = () => {
  return (
    <Stack
      width="100%"
      height="100%"
      marginBlock="5rem"
      paddingInline="1rem"
      gap="0.5rem"
    >
      <Flex gap="0.5rem">
        <Button variant="boutline" gap="2rem" opacity="0.6">
          City, Neighbourhood, ZIP, Address...{" "}
          <RiSearchLine style={{ width: "20px", height: "20px" }} />
        </Button>
        <Button variant="lgrey">
          Filter
          <RiArrowDownSLine style={{ width: "20px", height: "20px" }} />
        </Button>
        <Button variant="lgrey">
          Region <RiArrowDownSLine style={{ width: "20px", height: "20px" }} />
        </Button>
        <Button variant="lgrey">
          Ranking <RiArrowDownSLine style={{ width: "20px", height: "20px" }} />
        </Button>
        <Button variant="yellow">Search</Button>
      </Flex>
      <Flex>
        <Stack width="30%" minWidth="300px" height="auto">
          <Chat />
        </Stack>
        <Stack width="100%">
          <Stack gap="0" marginBottom="0.5rem">
            <Text fontSize="lg" fontWeight="600">
              Real Estate Plans For You
            </Text>
            <Text fontSize="sm">5,790 results</Text>
          </Stack>
          <Grid
            templateColumns="repeat(3, 1fr)"
            gap="0.5rem"
            mt="6"
            width="100%"
          >
            <Explorebox image="/images/image 64.png" />
            <Explorebox image="/images/image 63.png" />
            <Explorebox image="/images/image 65.png" />
            <Explorebox image="/images/image 76.png" />
            <Explorebox image="/images/landingImage.jpg" />
            <Explorebox image="/images/sendai.jpg" />
          </Grid>
          {/* <Image width="100%" src="/images/Frame 1707478485.png" /> */}
        </Stack>
      </Flex>
    </Stack>
  );
};
