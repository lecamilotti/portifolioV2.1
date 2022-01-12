import { Box, Button, Flex, Grid, GridItem, HStack, Image, Text } from "@chakra-ui/react";
import { FaGithub, FaGlobe } from "react-icons/fa";
import projects from "../projects";

const myProjects = projects => {;
const FirstTwoProjects = () => {
  for (let i = 0; i < myProjects().length; i++) {
    console.log(myProjects()[i].name);
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
       </Grid>
       
    )
    
   }
}

}
export default function FirstTwoProjects() {
  return (
    <FirstTwoProjects />
  );
}

