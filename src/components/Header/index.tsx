import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { Logo } from "./Logo";


export function Header() {

  const {onOpen} = useSidebarDrawer();
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  })
  return (
    <Flex as="header" px="5" py="5"  direction={isWideVersion ? "row" : "column"} alignItems="center" justifyContent="space-between">
      <Flex alignItems="center" mr={isWideVersion ? "auto" : "0"}>
        {!isWideVersion && (
          <IconButton
          aria-label="open toggle menu"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          ml="2"
          ></IconButton>
        )}
      <Logo/>
      
      </Flex>
      
    </Flex>
  );
}