import {
  Box,
  Button,
  Center,
  Flex,
  Spacer,
  Square,
  Text,
  useBreakpointValue,
  Wrap,
} from "@chakra-ui/react";

export default function Hero() {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  if (! isWideVersion) {
  return (
    <Flex maxW={1280} m="center" width={["100%", "100%", "100%", "100%"]}>
      <Box m="20">
        <Text>
          <Text as="h1" color="primary" fontWeight="bold" fontSize={["2xl", "4xl"]}>
            Leandro Camilotti
          </Text>
          <Text as="h2" color="gray.50" m={2} fontWeight="bold" fontSize={["21","2xl"]}>
            Front End Developer
          </Text>
          <Text as="h3">
            Welcome to my personal page.
            <br />
            Here you can find my projects, my skills and contact me.
          </Text>
        </Text>
        <Button
          size="md"
          mt={4}
          height="48px"
          width="200px"
          variant="unstyled"
          border="2px"
          onClick={() => {
            
            window.location.href = "https://drive.google.com/file/d/1uHPPrKcIsGIVQzPULqK52hH06-Povzl_/view";
          }}
          formTarget="_blank"
          borderColor="primary"
        >
          Download CV
        </Button>
      </Box>

      
    </Flex>
    
  )
  } else {

    return (
    <Flex maxW={1280} m="center" width={["100%", "100%", "100%", "100%"]}>
      <Box m="auto">
        <Text>
          <Text as="h1" color="primary" fontWeight="bold" fontSize={["2xl", "4xl"]}>
            Leandro Camilotti
          </Text>
          <Text as="h2" color="gray.50" m={2} fontWeight="bold" fontSize="2xl">
            Front End Developer
          </Text>
          <Text as="h3">
            Welcome to my personal page.
            <br />
            Here you can find my projects, my skills and contact me.
          </Text>
        </Text>
        <Button
          size="md"
          mt={4}
          height="48px"
          width="200px"
          variant="unstyled"
          border="2px"
          onClick={() => {
            
            window.location.href = "https://drive.google.com/file/d/1uHPPrKcIsGIVQzPULqK52hH06-Povzl_/view";
          }}
          formTarget="_blank"
          borderColor="primary"
        >
          Download CV
        </Button>
      </Box>

      <Spacer />
      <Box p="25vh">Box 2</Box>
    </Flex>
    )
}
}
