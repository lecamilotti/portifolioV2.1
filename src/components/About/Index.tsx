import { Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

export default function About() {

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  })

  return (
    <Flex h="100vh" bg="gray.900" m="auto" p="auto" direction={isWideVersion ? "row" : "column"}>
      <Box as="span" m="auto" p="auto">
        <Image
          ml="2rem"
          src="/profile.jpeg"
          alt="Leandro Camilotti Picture"
          w={!isWideVersion ? "250px" : "70%"}
          display="inline-grid"
          border="4px"
          borderColor="primary"
          borderRadius="50%"
        />
      </Box>
      <Box as="span" flex="5" m="auto" p="auto" maxW="56rem" >
        <Text fontWeight="bold" color="gray.50" m="1.5rem" fontSize="2xl" mb="2rem">
          Hi there, I'm Leandro Camilotti.
        </Text>
        <Text color="gray.50" m="1.5rem" fontSize={!isWideVersion ? "1.2rem" : "2xl"}>
        A passionate and ambitious web developer who believes that web applications make a positive impact in people's life.
         I am always proactively learning new ways to build my skill set and add tools that will compliment those skills. 
         I`m currently on a Code BootCamp building my experience with own projects using tools like HTML, CSS, JavaScript, ReactJS, TypeScript, styled components, express, and Node.js.
        </Text>
      </Box>
    </Flex>
  );
}
