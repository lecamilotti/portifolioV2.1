import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";


export default function Aside(){
  return (
    <Flex maxW={1280} m="auto"  width={["100%", "100%", "100%", "100%"]}>
      <Box justifyContent="center" m="auto" p="20">
      <Image
      src="/../public/images/programer.png"
      alt="programer"
      width="500"
      height="400"
      
      />
        
       </Box>
    </Flex>
  );
}