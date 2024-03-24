import { Flex, Heading, Button, Input } from "@chakra-ui/react";
export const Footer = () => {
  return (
    <Flex width="100%" height="300px" bg="lgray">
      <Heading fontSize="2xl" maxWidth="500px">
        Sign up to our newsletter and receive the latest updates on your
        favourite projects.
      </Heading>
      <Input
        variant="outline"
        color="black"
        placeholder="Email Address..."
      ></Input>
      <Button variant="white">Email Address</Button>
    </Flex>
  );
};
