import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Button,
  useDisclosure
} from "@chakra-ui/react";

export const Header  = () => {
  return(
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={4}
      bg="teal.500"
      color="white"
    >
      <Flex align="center" mr={10}>
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            Dio Bank
        </Heading>
      </Flex>

      <Stack
        direction={{ base: "column", md: "row" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
        spacing={20}
      >
        <Text>Docs</Text>
        <Text>Examples</Text>
        <Text>Blog</Text>
      </Stack>

      <Box
        mt={{ base: 4, md: 0 }}
      >
        <Button
          variant="outline"
          _hover={{ bg: "teal.700", borderColor: "teal.700" }}
        >
          Create account
        </Button>
      </Box>
    </Flex>
  )
}
