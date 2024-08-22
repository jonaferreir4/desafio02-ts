import { Box } from "@chakra-ui/react"
import { Footer } from "./Footer"
import { Header } from "./Header/Header"

export const Layout = ({ children }: any) => {
  return(
    <Box
      maxW="100%"
      maxH="100vh"
    >
      <Header />
      { children }
      <Footer />
    </Box>
  )
}
