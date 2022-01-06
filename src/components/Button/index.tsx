import { Button } from "@chakra-ui/react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;

}

export default function Button(Button: ButtonProps) {
  return <Button colorScheme="gray"  transition="all 0.3s"  _hover={{ filter: "brightness(0.5)" }}  m="2"></Button>;
    
  
}
