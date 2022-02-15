import { Box, Flex } from "@chakra-ui/react";
import Image, { ImageProps } from "next/image";
import codePic from '../../images/programer.png';

export type AsideProps = Omit<ImageProps, "width" | "height" | "src">;

export const Aside: React.FC<AsideProps> = (props) => {
  return (
    <Flex maxW={1280} m="auto"  width={["100%", "100%", "100%", "100%"]}>
      <Box ml="auto" alignItems="center" justifyContent="center" pt="10" >

      <Image 
      src={codePic}
       width={500} height={400} alt="" {...props}
      />
        
       </Box>
    </Flex>
  );
};
export default Aside;