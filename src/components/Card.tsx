import {Box, Button, Center, Input } from '@chakra-ui/react'
import { login } from '../services/login'

interface ICard {
  id?: number,
  paragraph?: string,
  details?: string
}



export const Card = ({ id, paragraph, details }: ICard) => {
  return(
    <Box minHeight='59.7vh' backgroundColor='#9413dc' padding='25px'>
    <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
      <Center>
        <h1>Faça o login</h1>
      </Center>
      <Input placeholder="email" />
      <Input placeholder="password" />
      <Center>
        <Button onClick={login} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
          Button
        </Button>
      </Center>
    </Box>
  </Box>
  )
}