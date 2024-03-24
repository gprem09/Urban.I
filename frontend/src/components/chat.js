import React, { useState } from "react";
import axios from "axios";
import profiles from "./profilesData";
import { RiSendPlaneFill } from "react-icons/ri";
import {
  Box,
  Button,
  Input,
  VStack,
  Text,
  Link,
  Container,
  Grid,
  GridItem,
  InputGroup,
  InputRightElement,
  Spacer,
} from "@chakra-ui/react";

export const Chat = () => {
  const [inputText, setInputText] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [selectedProfiles, setSelectedProfiles] = useState([]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

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
    <Container
      maxW="container.xl"
      height="100%"
      display="flex"
      direction="flex-end"
    >
      <VStack spacing={4} flexDirection="column-reverse">
        {chatHistory.map((chat, index) => (
          <Box
            key={index}
            p={5}
            shadow="md"
            borderWidth="1px"
            borderRadius="md"
          >
            <Text>
              <strong>You:</strong> {chat.question}
            </Text>
            <Text>
              <strong>Bot:</strong> {chat.answer}
            </Text>
          </Box>
        ))}
      </VStack>
      <Spacer />
      <form
        onSubmit={handleSubmit}
        height="100%"
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column-reverse",
        }}
      >
        <VStack mt="4">
          <InputGroup>
            <Input
              value={inputText}
              outline="1px solid #C4C7C8"
              onChange={handleInputChange}
              placeholder="Type your message here..."
            />
            <InputRightElement>
              <Button type="submit" colorScheme="yellow" padding="0">
                <RiSendPlaneFill style={{ width: "20px", height: "20px" }} />
              </Button>
            </InputRightElement>
          </InputGroup>
        </VStack>
      </form>
      <Grid display="none" templateColumns="repeat(4, 1fr)" gap={6} mt="6">
        {selectedProfiles.length > 0
          ? selectedProfiles.map((profile, index) => (
              <GridItem
                key={index}
                p={5}
                shadow="md"
                borderWidth="1px"
                borderRadius="md"
              >
                <Text fontSize="xl">{profile.name}</Text>
                <Text>Country: {profile.country}</Text>
                <br />
                <Text>{profile.profile}</Text>
                <br />
                <Link href={profile.website} isExternal>
                  <strong>Visit Website</strong>
                </Link>
              </GridItem>
            ))
          : profiles.map((profile, index) => (
              <GridItem
                key={index}
                p={5}
                shadow="md"
                borderWidth="1px"
                borderRadius="md"
              >
                <Text fontSize="xl">{profile.name}</Text>
                <Text>Country: {profile.country}</Text>
                <br />
                <Link href={profile.website} isExternal>
                  <strong>Visit Website</strong>
                </Link>
              </GridItem>
            ))}
      </Grid>
    </Container>
  );
};
