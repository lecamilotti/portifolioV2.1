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
      <Flex direction="column">
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
    <Flex direction={"row"}>
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
