import { Flex, Heading, Button, Stack } from "@chakra-ui/react";
export const Footer = () => {
  return (
    <Stack
      width="100%"
      height="300px"
      bg="lgray"
      alignItems="space-between"
      padding="2rem"
    >
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
    </Stack>
  );
};
