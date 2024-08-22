import { Box, Flex, Text, Link, IconButton, Stack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <Box bg="teal.500" color="white" py={6}>
      <Flex
        as="footer"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding={4}
        maxW="1200px"
        mx="auto"
      >
        <Stack direction="column" spacing={2}>
          <Text fontWeight="bold">About Us</Text>
          <Link href="#" _hover={{ color: "teal.200" }}>Our Story</Link>
          <Link href="#" _hover={{ color: "teal.200" }}>Careers</Link>
        </Stack>

        <Stack direction="column" spacing={2}>
          <Text fontWeight="bold">Contact</Text>
          <Link href="#" _hover={{ color: "teal.200" }}>Support</Link>
          <Link href="#" _hover={{ color: "teal.200" }}>Email Us</Link>
        </Stack>

        <Stack direction="column" spacing={2}>
          <Text fontWeight="bold">Legal</Text>
          <Link href="#" _hover={{ color: "teal.200" }}>Privacy Policy</Link>
          <Link href="#" _hover={{ color: "teal.200" }}>Terms of Service</Link>
        </Stack>

        <Stack direction="row" spacing={4}>
          <IconButton
            as="a"
            href="#"
            aria-label="Facebook"
            icon={<FaFacebook />}
            variant="outline"
            colorScheme="whiteAlpha"
            _hover={{ bg: "teal.600" }}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="Twitter"
            icon={<FaTwitter />}
            variant="outline"
            colorScheme="whiteAlpha"
            _hover={{ bg: "teal.600" }}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="Instagram"
            icon={<FaInstagram />}
            variant="outline"
            colorScheme="whiteAlpha"
            _hover={{ bg: "teal.600" }}
          />
        </Stack>
      </Flex>
      <Text textAlign="center" mt={4}>
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </Text>
    </Box>
  );
};
