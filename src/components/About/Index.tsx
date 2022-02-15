import { Box, Flex, Image, Text } from "@chakra-ui/react";

export default function About() {
  return (
    <Flex h="100vh" bg="gray.900" gridRow={"auto"}>
      <Box flex="1" as="span" m="auto" p="auto" ml="4rem">
        <Image
          src="/profile.jpeg"
          alt="Leandro Camilotti Picture"
          maxW="320px"
          display="inline-grid"
          border="4px"
          borderColor="primary"
          borderRadius="50%"
        />
      </Box>
      <Box as="span" display="block" flex="1" m="auto" p="5">
        <Text fontWeight="bold" color="gray.50" fontSize="2xl" mb="2rem">
          Hi there, I'm Leandro Camilotti.
        </Text>
        <Text color="gray.50" fontSize="2xl">
        A passionate and ambitious web developer who believes that web applications make a positive impact in people's life.
         I am always proactively learning new ways to build my skill set and add tools that will compliment those skills. 
         I`m currently on a Code BootCamp building my experience with own projects using tools like HTML, CSS, JavaScript, ReactJS, TypeScript, styled components, express, and Node.js.
        </Text>
      </Box>
    </Flex>
  );
}
