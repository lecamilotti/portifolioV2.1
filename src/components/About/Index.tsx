import { Avatar, Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";

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
        <Box as="span" display="block" flex="2" maxW="300px" m={4} p={5}>
          <Text 
          
          fontWeight="bold"
          color="gray.50"
          fontSize="2xl"
          >
            About Me
          </Text>
          <Text 
           
           color="gray.50"
           fontSize="2xl"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti sed ab, commodi in necessitatibus, neque incidunt alias eius cum eos ea! Et nemo aut unde fugiat corporis voluptate, aspernatur repudiandae.
          </Text>
          </Box>
      </Box>
    </Flex>
  );
}
