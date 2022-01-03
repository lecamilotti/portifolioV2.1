import { Box, Grid, GridItem, Wrap } from "@chakra-ui/react";

export default function Projects() {
  return (
      <Grid
        templateColumns="1fr, 1fr, 1fr, 1fr(auto-fit)"
        gap={4}
        overflow="hidden"
        maxW={1280}
        h="100vh"
        w="100vw"
        justify="center"
      >
        <GridItem colSpan={2} objectFit="fill" bg="tomato" > <Box>Teste</Box></GridItem>
        
        <GridItem colSpan={2} bg="tomato" />
        <GridItem colSpan={2} bg="tomato" />
      </Grid>
  
  );
}
