import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";
import projects from "../projects";

interface projectProps {
  name: string;
  description: string;
  image: string;
  alt: string;
  link: string;
  gitHub: string;
  useState: boolean;
}

const myProjects = () => {
 
  return projects.map((project: projectProps) => {
    return (
      <Flex direction="column" h="100vh"  key={project.name}>
      <SimpleGrid
      
        flex='1'
        gap="4"
        minChildWidth="320px"
        align="flex-start"
      >
        <Box
        p={["6", "8"]}
        bg="gray.800"
        borderRadius={8}
        pb="4"
        >
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
              _hover={{ filter: "brightness(0.2)" }}
              transition="all 0.3s ease-in-out"
            />
          </Box>
        
        <GridItem
          m="auto"
          p="1rem"
          alignItems="center"
          mb="1rem"
          align="center"
        >
          {project.name}
          <Flex justifyContent="center" mt="1rem" w="100%">
            <HStack spacing="1rem" fontSize="lg">
              <Button
                as="a"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                _hover={{ filter: "brightness(0.5)" }}
                transition="all 0.3s ease-in-out"
                color="gray.50"
                leftIcon={<FaGlobe />}
              >
                <Text fontSize="sm">Live</Text>
              </Button>
              <Button
                as="a"
                href={project.gitHub}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                _hover={{ filter: "brightness(0.5)" }}
                transition="all 0.3s ease-in-out"
                color="gray.50"
                leftIcon={<FaGithub />}
              >
                <Text fontSize="sm">GitHub</Text>
              </Button>
            </HStack>
          </Flex>
          <Text fontSize="sm" mt="2rem">
            {project.description}
          </Text>
          
        </GridItem>
        </Box>
      </SimpleGrid>
      </Flex>
    );
  });
};

export default function Portifolio() {
  const [showProjects, setShowProjects] = useState(false);

  useEffect(() => {
    effect();
    }, []);
  
 const effect = () => {
   setTimeout(() => {
    setShowProjects(true);
   }, 500);
 };

 if (showProjects === true) {
  return (
    <Grid justify="center">
      {myProjects()}
      <Button
        as="a"
        w="20%"
        bg="gray.700"
        m="auto"
        p="auto"
        fontSize={["sm", "md", "lg"]}
        mt="2rem"
        cursor="pointer"
        alignContent="center"
        justifyContent="center"
        _hover={{ filter: "brightness(0.8)" }}
        transition="all 0.3s ease-in-out"
        onClick={() => setShowProjects(!showProjects)}
      >
        {showProjects ? "Hide Projects" : "Show Projects"}
      </Button>
      {showProjects ? myProjects() : null}
    </Grid>
  );
 } else {
  for (let i = 0; i < myProjects().length; i++) {
   return (
      <Grid justify="center">
        {i === 0 ? (
          <GridItem
            w="80%"
            minChildWidth="350px"
            spacing="2rem"
            m="auto"
            mt="2rem" 
            bg="gray.700" 
            borderRadius="xl"
            boxShadow="xl"
          >
            <Box> 
              <Box
                as="a"  
                href={projects[i].link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={projects[i].image}
                  alt={projects[i].alt}
                  maxWidth="100%"
                  maxHeight="100%"
                  objectFit="cover"
                  _hover={{ filter: "brightness(0.2)" }}
                  transition="all 0.3s ease-in-out"
                />
              </Box>
            </Box>
            <GridItem
              m="auto"
              p="1rem"
              alignItems="center"
              mb="1rem"
              align="center"
            >
              {projects[i].name}
              <Flex justifyContent="center" mt="1rem" w="100%">
                <HStack spacing="1rem" fontSize="lg">
                  <Button
                    as="a"
                    href={projects[i].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    _hover={{ filter: "brightness(0.5)" }}
                    transition="all 0.3s ease-in-out"
                    color="gray.50"
                    leftIcon={<FaGlobe />}
                  >
                    <Text fontSize="sm">Live</Text>
                  </Button>
                  <Button
                    as="a"
                    href={projects[i].gitHub}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    _hover={{ filter: "brightness(0.5)" }}
                    transition="all 0.3s ease-in-out"
                    color="gray.50"
                    leftIcon={<FaGithub />}
                  >
                    <Text fontSize="sm">GitHub</Text>
                  </Button>
                </HStack>
              </Flex>
              <Text fontSize="sm" mt="2rem">
                {projects[i].description}
              </Text>
            </GridItem>
          </GridItem>
        ) : null}
        {i === 1 ? (
          <GridItem
            w="80%"
            minChildWidth="350px"
            spacing="2rem"
            m="auto"
            mt="2rem"
            bg="gray.700"
            borderRadius="xl"
            boxShadow="xl"
          >
            <Box>
              <Box
                as="a"
                href={projects[i].link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={projects[i].image}     
                  alt={projects[i].alt}
                  maxWidth="100%"
                  maxHeight="100%"
                  objectFit="cover"
                  _hover={{ filter: "brightness(0.2)" }}
                  transition="all 0.3s ease-in-out"
                />
              </Box>
            </Box>
            <GridItem
              m="auto"
              p="1rem"
              alignItems="center"
              mb="1rem"
              align="center"
            >
              {projects[i].name}
              <Flex justifyContent="center" mt="1rem" w="100%">
                <HStack spacing="1rem" fontSize="lg">
                  <Button
                    as="a"
                    href={projects[i].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    _hover={{ filter: "brightness(0.5)" }}
                    transition="all 0.3s ease-in-out"
                    color="gray.50"
                    leftIcon={<FaGlobe />}
                  >
                    <Text fontSize="sm">Live</Text>
                  </Button>
                  <Button
                    as="a"
                    href={projects[i].gitHub}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    _hover={{ filter: "brightness(0.5)" }}
                    transition="all 0.3s ease-in-out"
                    color="gray.50"
                    leftIcon={<FaGithub />}
                  >
                    <Text fontSize="sm">GitHub</Text>
                  </Button>
                </HStack>
              </Flex>
              <Text fontSize="sm" mt="2rem">
                {projects[i].description}
              </Text>
            </GridItem>
          </GridItem>
        ) : null}
        
        
      </Grid>
      
   )
   
  }
  <Button
        as="a"
        w="20%"
        bg="gray.700"
        m="auto"
        p="auto"
        fontSize={["sm", "md", "lg"]}
        mt="2rem"
        cursor="pointer"
        alignContent="center"
        justifyContent="center"
        _hover={{ filter: "brightness(0.8)" }}
        transition="all 0.3s ease-in-out"
        onClick={() => setShowProjects(!showProjects)}
      >
        {showProjects ? "Hide Projects" : "Show Projects"}
      </Button>
 }


// function setShowProjects(arg0: boolean): void {
//   throw new Error("Function not implemented.");
}
// server side rendering the image
// const projectImages = () => {
//   return projects.map((project: projectProps) => {
//     return <img src={project.image} />;
//   });
// };
