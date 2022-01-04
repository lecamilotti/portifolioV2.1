import { Box, Button, HStack, Image, SimpleGrid} from "@chakra-ui/react";
import {FaFacebook, FaGithub, FaGlobe, FaTwitter} from "react-icons/fa";
import ProjectsData from "../data";

export default function Portifolio() {
  return (
    <SimpleGrid
    w="1280px"
    p={{ sm: '10', md: '10', lg: '10', xl: '10' }}
    bg='gray.800'
    columns={{ sm: 1, md: 2, lg: 3, xl: 4}}
    spacing='4'
    textAlign='center'
    rounded='lg'
    color='gray.500'
  >
    <Box boxShadow='lg' maxW={400} maxH={400} rounded='lg' bg='white'>
       {ProjectsData.name}
    <HStack>
      <Button colorScheme='gray' leftIcon={<FaGithub />}>
        Github
      </Button>
     <Button colorScheme='gray' leftIcon={<FaGlobe />}>
      Live Demo
  </Button>
</HStack>
</Box>
    
    
  </SimpleGrid>
  
  );
}
