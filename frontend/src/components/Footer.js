import { Flex, Heading, Button, Stack } from "@chakra-ui/react";
export const Footer = () => {
  return (
    <Stack
      width="100%"
      height="300px"
      bg="lgray"
      alignItems="center"
      padding="2rem"
    >
      <Heading fontSize="2xl" maxWidth="500px">
        Sign up to our newsletter and receive the latest updates on your
        favourite projects.
      </Heading>
      <Button
        variant="white"
        width="300px"
        justifyContent="flex-start"
        opacity="0.6"
      >
        Email Address
      </Button>
    </Stack>
  );
};
