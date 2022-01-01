import { Flex, Text } from "@chakra-ui/react";


export function Logo() {
  return (
    <Flex direction="row">
      <Text
        fontSize={["2xl", "3xl"]}
        fontWeight="bold"
        letterSpacing="tighter"
        w="64"
      >
        Leandro Camilotti
        <Text as="span" mr="4" color="gray.500">
          .
        </Text>
      </Text>
    </Flex>
  );
}
