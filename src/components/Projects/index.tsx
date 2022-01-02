import { Grid, GridItem, Wrap } from "@chakra-ui/react";

export default function Projects() {
  return (
    <Wrap overflow="hidden" maxW={1280} h="100vh">
      <Grid templateColumns="repeat(5, 1fr)" gap={4}>
        <GridItem colSpan={2} h="200px" w="200px" bg="tomato" />
        <GridItem colSpan={2} h="200px" w="200px" bg="tomato" />
        <GridItem colSpan={2} h="200px" w="200px" bg="tomato" />
      </Grid>
    </Wrap>
  );
}
