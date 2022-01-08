import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
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
        key={project.name}
        columns={[1, 2, 2, 3]}
        spacing={[10, 10, 10, 10]}
        bg="gray.800"
        textAlign="center"
        justifyContent={["center", "center", "center", "center"]}
        alignItems="center"
        rounded="lg"
        color="gray.600"
        p={[10, 10, 10, 10]}
      >
        {/* <Text
          as="title"
          fontSize="2xl"
          m="auto"
          p="auto"
          justifyContent="center"
          alignItems="center"
          fontWeight="bold"
        >
          Projects
        </Text> */}
        <Box
        p={[10, 10, 10, 10]}
          key={project.name}
          boxShadow="2xl"
          w="28rem"
          maxW="30rem"
          rounded="2xl"
          shadow={["lg", "lg", "lg", "lg"]}
          bg="gray.700"
          m="auto"
          pt="3"
          pb="3"
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
              fit="scale-down"
              width={["100%", "100%", "100%", "100%"]}
              align="center"
              objectFit="cover"
              alt={project.alt}
            />

            {/* <Text>{project.description}</Text> */}
          </HStack>
          <Button
            colorScheme="gray"
            variant="outline"
            href={project.link}
            target="_blank"
            transition="all 0.3s"
            _hover={{ filter: "brightness(0.5)" }}
            leftIcon={<FaGithub />}
            m="2"
          >
            Github
          </Button>
          <Button
            onClick={project.link}
            colorScheme="gray"
            transition="all 0.3s"
            _hover={{ filter: "brightness(0.5)" }}
            m="2"
            leftIcon={<FaGlobe />}
          >
            Live Demo
          </Button>
          <Button
            onClick={project.description}
            colorScheme="gray"
            transition="all 0.3s"
            _hover={{ filter: "brightness(0.5)" }}
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
// const projectImages = () => {
//   return projects.map((project: projectProps) => {
//     return <img src={project.image} />;
//   });
// };
