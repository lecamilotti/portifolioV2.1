import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text fontSize={["2xl", "3xl"]} fontWeight="bold" letterSpacing="tight" w="64">
      Leandro Camilotti
      <Text as="span" mr="2" color="pink.500">
        .
      </Text>
    </Text>
  );
}
