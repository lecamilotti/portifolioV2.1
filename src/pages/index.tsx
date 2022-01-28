import { Flex, Wrap } from "@chakra-ui/react";
import About from "../components/About/Index";
import { Header } from "../components/Header";
import Hero from "../components/Hero";
import Portifolio from "../components/Portifolio";

import { Sidebar } from "../components/Sidebar";

export default function Home() {
  return (
    <>
      <Wrap h="100vh" overflow="hidden" justify="center">
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
      <About />
      <Portifolio />
    </>
  );
}
