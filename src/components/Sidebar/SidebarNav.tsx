import { Flex, useBreakpointValue } from "@chakra-ui/react";
import {
  RiBarChartGroupedFill,
  RiContactsBookLine,
  RiContactsLine,
  RiHome2Fill,
  RiHomeFill,
  RiProjector2Fill,
  RiSurveyFill,
} from "react-icons/ri";
import { NavLink } from "./NavLink";

export function SidebarNav() {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  if (!isWideVersion) {
    return (
      <Flex direction="column" p="5">
        <NavLink icon={RiHomeFill} href="/">
          Home
        </NavLink>
        <NavLink icon={RiSurveyFill} href="/">
          Projects
        </NavLink>
        <NavLink icon={RiContactsLine} href="/">
          About
        </NavLink>
        <NavLink icon={RiContactsBookLine} href="/">
          Contact
        </NavLink>
      </Flex>
    );
  }
  return (
    <Flex direction={"row"} p="5">
      <NavLink icon={RiHomeFill} href="/">
        Home
      </NavLink>
      <NavLink icon={RiSurveyFill} href="/">
        Projects
      </NavLink>
      <NavLink icon={RiContactsLine} href="/">
        About
      </NavLink>
      <NavLink icon={RiContactsBookLine} href="/">
        Contact
      </NavLink>
    </Flex>
  );
}
