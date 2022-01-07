import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { format } from "path/posix";
import { FaGithub, FaGlobe, FaInfo } from "react-icons/fa";
import projects from "../projects";

interface projectProps {
  name: string;
  description: string;
  image: string;
  alt: string;
  link: string;
  gitHub: string;
}

const myProjects = () => {
  return projects.map((project: projectProps) => {
    return (
      <SimpleGrid
        w="1280px"
        mt={{ md: "20", lg: "2" }}
        p={{ sm: "10", md: "10", lg: "10", xl: "10" }}
        bg="gray.800"
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing="4"
        textAlign="center"
        rounded="lg"
        color="gray.600"
        key={project.name}
      >
        <Text
          as="title"
          fontSize="2xl"
          m="auto"
          p="auto"
          justifyContent="center"
          alignItems="center"
          fontWeight="bold"
        >
          Projects
        </Text>
        <Box
          key={project.name}
          boxShadow="2xl"
          w={["100%", "100%", "100%", "100%"]}
          h={["100%", "100%", "100%", "100%"]}
          maxW={["100%", "100%", "100%", "100%"]}
          rounded="2xl"
          shadow={["lg", "lg", "lg", "lg"]}
          bg="gray.700"
          mb="5"
        >
          <Text color="whiteAlpha.800" fontWeight="bold" fontSize="2xl">
            {project.name}
          </Text>
          <HStack>
            <Image
              src={project.image}
              justifyContent="center"
              m="auto"
              p="auto"
              maxW="500px"
              w={800}
              align="center"
              objectFit="cover"
              alt={project.alt}
            />

            {/* <Text>{project.description}</Text> */}
          </HStack>
          <Button
            colorScheme="gray"
            onClick={() => {
              window.location.href = project.gitHub;
            }}
            transition="all 0.3s"
            _hover={{ filter: "brightness(0.5)"}}
            
            leftIcon={<FaGithub />}
            m="2"
          >
            Github
          </Button>
          <Button
            onClick={project.link}
            colorScheme="gray"
            transition="all 0.3s"
            _hover={{ filter: "brightness(0.5)"}}
            m="2"
            leftIcon={<FaGlobe />}
          >
            Live Demo
          </Button>
          <Button
            onClick={project.description}
            colorScheme="gray"
            transition="all 0.3s"
            _hover={{ filter: "brightness(0.5)"}}
            m="2"
            leftIcon={<FaInfo />}
          >
            Description
          </Button>
        </Box>
      </SimpleGrid>
    );
  });
};

export default function Portifolio() {
  return <Flex justify="center">{myProjects()}</Flex>;
}

// server side rendering the image
const projectImages = () => {
  return projects.map((project: projectProps) => {
    return <img src={project.image} />;
  });
};