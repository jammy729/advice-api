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
  IconButton,
  useMediaQuery,
  keyframes,
  usePrefersReducedMotion
} from '@chakra-ui/react'
import { BsDice5Fill } from 'react-icons/bs'

const slip = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); } 
  `

const App = () => {
  const baseURL = 'https://api.adviceslip.com/advice'
  const [advice, adviceSet] = useState(null)
  const [dice, diceSet] = useState(false)

  const [mobile] = useMediaQuery('(min-width: 375px)')
  const prefersReducedMotion = usePrefersReducedMotion()
  const animation = prefersReducedMotion
    ? undefined
    : `${spin} infinite 20s linear`

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
      <Box
        w={['90%', '80%', '70%', null, '50%']}
        height='350px'
        bg='neutral.200'
        borderRadius='xl'
        p={4}
      >
        <Heading pt={3} textAlign='center' size='sm' color='primary.green'>
          ADVICE #{advice.slip.id}
        </Heading>
        <Box w='100%' h='75%'>
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
        </Box>
        <Box>
          <Image src={Dice} w='100%' alt='divider' />
        </Box>
        <Center>
          <IconButton
            mt='2rem'
            bg='primary.green'
            aria-label='Search database'
            icon={<BsDice5Fill />}
            size='lg'
            onClick={getData}
            color='black'
            borderRadius='full'
            _hover={{ bg: 'primary.green' }}
            _onClick={{ animation: { animation } }}
          />
        </Center>
      </Box>
    </Box>
  )
}

export default App
