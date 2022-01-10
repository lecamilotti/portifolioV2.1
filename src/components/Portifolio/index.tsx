import {
  Box,
  Button,
  Flex,
  GridItem,
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
      minChildWidth='350px'
      spacing='40px'     
      >
        <Box>
          <Box
            as="a"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={project.image}
              alt={project.alt}
              maxWidth="100%"
              maxHeight="100%"
              objectFit="cover"
            />
          </Box>
        </Box>
        <GridItem>
          <Flex justifyContent="center" alignItems="center" w="100%">
            <HStack spacing="0.5rem">
              <Button
                as="a"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                color="gray.50"
                leftIcon={<FaGlobe/>}
              >
                <Text fontSize="sm">Live</Text>
              </Button>
              <Button
                as="a"
                href={project.gitHub}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                color="gray.50"
                leftIcon={<FaGithub />}
              >
                <Text fontSize="sm">GitHub</Text>
              </Button>
              <Button
                as="a"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                color="gray.50"
                leftIcon={<FaInfo />}
              >
                <Text fontSize="sm">Info</Text>
              </Button>
            </HStack>
          </Flex>
          <Text fontSize="sm">{project.description}</Text>
        </GridItem>
      </SimpleGrid>
    );
  });
};

export default myProjects;
// export default function Portifolio() {
//   return <Flex justify="center">{myProjects()}</Flex>;
// }

// server side rendering the image
// const projectImages = () => {
//   return projects.map((project: projectProps) => {
//     return <img src={project.image} />;
//   });
// };
