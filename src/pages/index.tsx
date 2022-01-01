import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { Header } from "../components/Header";
import Hero from "../components/Hero";

import { Sidebar } from "../components/Sidebar";


export default function Home() {
  return (
    <><Flex direction="row" maxW={1280} align="center" p={3} m="auto" justify="space-between" overflow="hidden">
      <Header />
      <Sidebar />
    </Flex>
    
        <Hero />
    </>
    
  );
}
