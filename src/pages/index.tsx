import { Box, Flex, SimpleGrid, Spacer, Text, theme, Wrap } from "@chakra-ui/react";
import { Header } from "../components/Header";
import Hero from "../components/Hero";

import { Sidebar } from "../components/Sidebar";

export default function Home() {
  return (
    <Wrap maxWidth="100vw" maxH="100vh" overflow="hidden" justify="center">
      <Flex
        direction="row"
        maxW={1280}
        width={["100%", "100%", "100%", "100%"]}
        align="center"
        p={[4, 5]}
        m="auto"
        justify="space-between"
        overflow="hidden"
      >
        <Header />
        <Sidebar />
      </Flex>
      <Hero />
      </Wrap>
  );
}
