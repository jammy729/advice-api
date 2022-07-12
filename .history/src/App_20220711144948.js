import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from '@emotion/styled'
import Dice from './icon.dice.svg'
import {
  Text,
  Heading,
  Box,
  Image,
  Container,
  Center,
  IconButton
} from '@chakra-ui/react'
import { IconName } from 'react-icons/bs'

const App = () => {
  const baseURL = 'https://api.adviceslip.com/advice'
  const [advice, adviceSet] = useState(null)
  const [dice, diceSet] = useState(false)

  const getData = async () => {
    axios.get(baseURL).then(res => {
      adviceSet(res.data)
    })
  }

  useEffect(() => {
    getData()
    if (diceSet) {
      getData()
    }
  }, [dice])

  if (!advice) return null

  return (
    <Box
      display='grid'
      placeItems={'center center'}
      height='100vh'
      width='100vw'
    >
      <Box w='500px' height='350px' bg='neutral.200' borderRadius='lg' p={4}>
        <Heading pt={3} textAlign='center' size='sm' color='primary.green'>
          ADVICE # {advice.slip.id}
        </Heading>
        <Text
          textAlign='center'
          fontSize='28px'
          fontWeight='semibold'
          alignItems='center'
          justifyContent='center'
          pt={5}
          px={5}
        >
          "{advice.slip.advice}"
        </Text>
        <IconButton aria-label='Search database' src={Dice} size='sm' />
      </Box>
    </Box>
  )
}

export default App
{
  /* <Center>
        <IconButton icon={<Dice />} size='sm' />
        <Container
          centerContent
          bg='primary.green'
          borderRadius='full'
          w='60px'
          h='60px'
          justifyContent='center'
          pos='fixed'
          mt='-880px'
        >
          <Image src={Dice} onClick={getData} />
        </Container>
      </Center> */
}
// <Outer>
//   <Middle>
//     <Heading size='sm' textAlign='center' color='primary.cyan'>
//       ADVICE #{advice.slip.id}
//     </Heading>
//     <Text
//       fontWeight='semibold'
//       textAlign='center'
//       alignItems='center'
//       justifyContent='center'
//     >
//       {advice.slip.advice}
//     </Text>
//   </Middle>
// </Outer>
