import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, useBreakpointValue, VStack } from "@chakra-ui/react";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { SidebarNav } from "./SidebarNav";

export function Sidebar() {

  const {isOpen, onClose} = useSidebarDrawer();
   const isDrawerSidebar = useBreakpointValue({
     base: true,
     md: false,
   })

   if (isDrawerSidebar) {
     return (
     
     <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
       <DrawerOverlay>
         <DrawerContent bg="gray.800" p="2" >
           <DrawerCloseButton mt ="6" />
           <DrawerHeader>Navigation</DrawerHeader>
           <DrawerBody>
             <SidebarNav/>
           </DrawerBody>
         </DrawerContent>
       </DrawerOverlay>
     </Drawer>
     
     )
   }

  return (
    <Box mr="8">
      <SidebarNav />
    </Box>
  );
}
