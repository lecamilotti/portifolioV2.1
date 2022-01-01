import { Flex, useBreakpointValue } from "@chakra-ui/react";
import {
  RiBarChartGroupedFill,
  RiContactsLine,
  RiHome2Fill,
  RiProjector2Fill,
} from "react-icons/ri";
import { NavLink } from "./NavLink";

export function SidebarNav() {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  if (!isWideVersion) {
    return (
      <Flex direction="column" p="4">
        <NavLink icon={RiHome2Fill} href="/">
          Home
        </NavLink>
        <NavLink icon={RiProjector2Fill} href="/">
          Projects
        </NavLink>
        <NavLink icon={RiBarChartGroupedFill} href="/">
          About
        </NavLink>
        <NavLink icon={RiContactsLine} href="/">
          Contact
        </NavLink>
      </Flex>
    );
  }
  return (
    <Flex direction={"row"} p="4" >
      <NavLink icon={RiHome2Fill} p="1" href="/">
        Home
      </NavLink>
      <NavLink icon={RiProjector2Fill} p="1" href="/">
        Projects
      </NavLink>
      <NavLink icon={RiBarChartGroupedFill} p="1" href="/">
        About
      </NavLink>
      <NavLink icon={RiContactsLine} p="1" href="/">
        Contact
      </NavLink>
    </Flex>
  );
}
