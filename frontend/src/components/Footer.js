import { Flex, Heading, Button, Stack, Text } from "@chakra-ui/react";
import { RiEye2Fill } from "react-icons/ri";
export const Footer = () => {
  return (
    <Stack width="100%" bg="lgray">
      <Flex width="100%" justifyContent="space-between" padding="3rem">
        <Flex gap="0.4rem">
          <RiEye2Fill style={{ width: "36px", height: "36px" }} />
          <Heading>urbanI</Heading>
        </Flex>
        <Stack gap="1rem">
          <Heading fontSize="2xl" maxWidth="500px">
            Sign up to our newsletter and receive the latest updates on your
            favourite projects.
          </Heading>
          <Flex width="500px">
            <Button
              variant="white"
              width="350px"
              justifyContent="flex-start"
              opacity="0.6"
            >
              Email Address
            </Button>
            <Button variant="yellow" width="150px">
              Subscribe
            </Button>
          </Flex>
        </Stack>
      </Flex>
      <Text textAlign="center" opacity="0.6" fontSize="sm">
        © 2024 urbanI. All Rights Reserved. | Privacy Policy | Terms of Service
        | Contact Us
      </Text>
    </Stack>
  );
};
