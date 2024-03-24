import React, { useState, useEffect } from "react";
import axios from "axios";
import profiles from "./profilesData";
import { RiSendPlaneFill } from "react-icons/ri";
import {
  Box,
  Button,
  Input,
  VStack,
  Text,
  Flex,
  Container,
  Grid,
  GridItem,
  InputGroup,
  InputRightElement,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import { Explorebox } from "./Explorebox";

const imageList = [
  "/images/image 64.png",
  "/images/image 63.png",
  "/images/image 65.png",
  "/images/image 76.png",
  "/images/landingImage.jpg",
  "/images/sendai.jpg",
  "/images/image 64.png",
  "/images/image 63.png",
  "/images/image 65.png",
  "/images/image 76.png",
  "/images/landingImage.jpg",
  "/images/sendai.jpg",
  "/images/image 64.png",
  "/images/image 63.png",
  "/images/image 65.png",
  "/images/image 76.png",
  "/images/landingImage.jpg",
  "/images/sendai.jpg",
  "/images/image 64.png",
  "/images/image 63.png",
  "/images/image 65.png",
  "/images/image 76.png",
  "/images/landingImage.jpg",
  "/images/sendai.jpg",
  "/images/image 64.png",
  "/images/image 63.png",
  "/images/image 65.png",
  "/images/image 76.png",
  "/images/landingImage.jpg",
  "/images/sendai.jpg",
  "/images/image 64.png",
  "/images/image 63.png",
  "/images/image 65.png",
  "/images/image 76.png",
];

export const ExploreBoxGrid = ({ selectedProfiles, profiles }) => {
  return (
    <Grid
      templateColumns="repeat(3, 1fr)"
      gap="0.5rem"
      mt="6"
      width="100%"
      height="500px"
      overflowY="scroll"
    >
      {
        selectedProfiles && selectedProfiles.length > 0 && profiles
          ? selectedProfiles.map((profile, index) => (
              <GridItem key={index}>
                <Explorebox
                  country={profile.country}
                  name={profile.name}
                  website={profile.website}
                  image={imageList[index]}
                />
              </GridItem>
            ))
          : profiles
          ? profiles.map((profile, index) => (
              <GridItem key={index}>
                <Explorebox
                  country={profile.country}
                  name={profile.name}
                  website={profile.website}
                  image={imageList[index]}
                />
              </GridItem>
            ))
          : null // Render null if selectedProfiles is empty or profiles is undefined
      }
    </Grid>
  );
};

export const Chat = () => {
  const [inputText, setInputText] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [selectedProfiles, setSelectedProfiles] = useState([]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };
  useEffect(() => {
    ExploreBoxGrid({ selectedProfiles, profiles });
  }, [selectedProfiles, profiles]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!inputText.trim()) return;

    try {
      const response = await axios.post("http://localhost:8080/chat", {
        input_text: inputText,
      });
      const reply = response.data.response;

      setChatHistory((chatHistory) => [
        ...chatHistory,
        { question: inputText, answer: reply },
      ]);
      setInputText("");
      const suggestedProfileNames = extractProfileNames(reply);
      if (suggestedProfileNames.length > 0) {
        const suggestedProfiles = profiles.filter((profile) =>
          suggestedProfileNames.includes(profile.name)
        );
        setSelectedProfiles(suggestedProfiles);
      } else {
        setSelectedProfiles([]);
      }
    } catch (error) {
      console.error("ERROR", error);
    }
  };

  const extractProfileNames = (reply) => {
    return profiles
      .filter((profile) => reply.includes(profile.name))
      .map((profile) => profile.name);
  };

  return (
    <Flex width="100%">
      <Stack width="30%" minWidth="300px" height="auto">
        <Stack
          alignContent="flex-end"
          justifyContent="flex-start"
          height="100%"
        >
          <Stack
            gap="0.5rem"
            height="500px"
            justifyContent="flex-end"
            paddingInline="0.5rem"
          >
            {chatHistory.map((chat) => (<><Text
                  padding="1rem"
                  bg="brand.deep"
                  borderRadius="20px  20px 0 20px"
                >
                  {chat.question}
                </Text>
                <Text
                  padding="1rem"
                  bg="lgray"
                  borderRadius="20px  20px 20px 0"
                >
                  {chat.answer}
                </Text></>
                
            ))}
            </Stack>
            <form onSubmit={handleSubmit} width="100%" height="100%">
              <VStack mt="4" width="100%">
                <InputGroup>
                  <Input
                    value={inputText}
                    outline="1px solid #C4C7C8"
                    onChange={handleInputChange}
                    placeholder="Type your message here..."
                  />
                  <InputRightElement>
                    <Button type="submit" colorScheme="yellow" padding="0">
                      <RiSendPlaneFill
                        style={{ width: "20px", height: "20px" }}
                      />
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </VStack>
            </form>
        </Stack>
      </Stack>
      <Stack width="100%">
        <Stack gap="0" marginBottom="0.5rem">
          <Text fontSize="lg" fontWeight="600">
            Real Estate Plans For You
          </Text>
          <Text fontSize="sm">5,790 results</Text>
        </Stack>
        <ExploreBoxGrid
          selectedProfiles={selectedProfiles}
          profiles={profiles}
        />
      </Stack>
    </Flex>
  );
};

export default Chat;
