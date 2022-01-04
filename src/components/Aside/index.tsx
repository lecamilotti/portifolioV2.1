/* eslint-disable @next/next/no-img-element */
import { Box, Flex } from "@chakra-ui/react";
import Programmer from "./programmer";


export default function Aside(){
  
  return (
    <Flex maxW={1280} m="auto"  width={["100%", "100%", "100%", "100%"]}>
      <Box ml="auto" mt="20" pt="10" >
        <Programmer />
        
       </Box>
    </Flex>
  );
}