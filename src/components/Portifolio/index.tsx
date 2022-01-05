import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { FaGithub, FaGlobe } from "react-icons/fa";
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
      <>
        <Text
          as="title"
          fontSize="2xl"
          fontWeight="bold"
          mb={4}
          color="gray.800"
          justifyContent="center"
        >
          Projects
        </Text>
        <SimpleGrid
          w="1280px"
          p={{ sm: "10", md: "10", lg: "10", xl: "10" }}
          bg="gray.800"
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          spacing="4"
          textAlign="center"
          rounded="lg"
          color="gray.500"
          key={project.name}
        >
          <Box
            key={project.name}
            boxShadow="lg"
            maxW={400}
            maxH={400}
            rounded="lg"
            bg="white"
          >
            <Image src={project.image} size="500px" alt={project.alt} />
            <HStack>
              <Text>{project.name}</Text>
              <Text>{project.description}</Text>
              <Button
                colorScheme="gray"
                onClick={project.gitHub}
                leftIcon={<FaGithub />}
              >
                Github
              </Button>
              <Button
                onClick={project.link}
                colorScheme="gray"
                leftIcon={<FaGlobe />}
              >
                Live Demo
              </Button>
            </HStack>
          </Box>
        </SimpleGrid>
      </>
    );
  });
};

export default function Portifolio() {
  return <Flex justify="center">{myProjects()}</Flex>;
}
