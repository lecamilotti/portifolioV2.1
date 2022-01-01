import { Box, Center, Flex, Spacer, Square, Text } from "@chakra-ui/react";

export default function Hero() {
  return (
    <Flex maxW={1280} m="center">
      <Box p="25vh">
        <Text>
        <Text as="h1" color="#66FCF1" fontWeight="bold" fontSize="4xl">
             Leandro Camilotti
        </Text>
        <Text as="h2" color="gray.100" fontWeight="bold" fontSize="2xl">
          Front End Developer
          </Text>
        <Text as="h3">
        Welcome to my personal page.
Here you can find my projects, my skills and contact me.
        </Text>
        </Text>
      </Box>
      <Spacer />
      <Box p="25vh" >
        Box 2
      </Box>
    </Flex>
  );
}
