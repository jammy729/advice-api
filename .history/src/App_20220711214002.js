import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Dice from './icon.dice.svg'
import {
  Text,
  Heading,
  Box,
  Image,
  Center,
  IconButton,
  keyframes
} from '@chakra-ui/react'
import { BsDice5Fill } from 'react-icons/bs'
import { motion } from 'framer-motion'

const App = () => {
  const baseURL = 'https://api.adviceslip.com/advice'
  const [advice, adviceSet] = useState(null)
  const [dice, diceSet] = useState(false)

  const animationKeyframes = keyframes`
  0% { transform: scale(1) rotate(0); border-radius: 20%; }
  25% { transform: scale(2) rotate(0); border-radius: 20%; }
  50% { transform: scale(2) rotate(270deg); border-radius: 50%; }
  75% { transform: scale(1) rotate(270deg); border-radius: 50%; }
  100% { transform: scale(1) rotate(0); border-radius: 20%; }
`

  const animation = `${animationKeyframes} 2s ease-in-out`

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
        <Box w='100%' h='71%'>
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
            transition={'0s 4s'}
            as={motion.div}
            mt='2rem'
            bg='primary.green'
            aria-label='Search database'
            icon={<BsDice5Fill />}
            size='lg'
            onClick={getData}
            color='black'
            borderRadius='full'
            _hover={{
              bg: 'primary.green'
            }}
            _active={{
              transition: '0s',
              bg: 'yellow',
              animation: { animation },
              animationDuration: '5s'
            }}
          />
        </Center>
      </Box>
    </Box>
  )
}

export default App
