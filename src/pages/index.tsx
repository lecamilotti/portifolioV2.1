import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { Header } from "../components/Header";

import { Sidebar } from "../components/Sidebar";

export default function Home () {
  return (
    <Flex direction="row" h="100vh" >
      <Header />
      <Sidebar />
    </Flex>
  );
}
