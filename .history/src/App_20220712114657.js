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
import './style.css'

const App = () => {
  const baseURL = 'https://api.adviceslip.com/advice'
  const [advice, adviceSet] = useState(null)
  const [dice, diceSet] = useState(false)
  const [spin, setSpin] = useState(false)

  //   const animationKeyframes = keyframes`
  //   0% { transform: scale(1) rotate(0); border-radius: 20%; }
  //   25% { transform: scale(1.1) rotate(90deg); border-radius: 40%; }
  //   50% { transform: scale(1.2) rotate(180deg); border-radius: 500%; }
  //   75% { transform: scale(1.1) rotate(270deg); border-radius: 20%; }
  //   100% { transform: scale(1) rotate(0); border-radius: 20%; }
  // `
  //   const animation = `${animationKeyframes} 3s ease-in-out infinite`

  const animate = () => {
    setSpin(true)
    setTimeout(() => setSpin(false), 2000)
  }
  const getData = async () => {
    axios.get(baseURL).then(res => {
      adviceSet(res.data)
      console.log(res.data)
    })
  }

  const diceRoll = () => {
    getData()
    animate()
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
        w={['90%', '80%', '60%', null, '45%']}
        height='450px'
        bg='neutral.200'
        borderRadius='xl'
        p={4}
      >
        <Heading
          pt={3}
          textAlign='center'
          size='sm'
          color='primary.green'
          letterSpacing={1}
        >
          ADVICE #{advice.slip.id}
        </Heading>
        <Box w='100%' h='335px'>
          <Text
            textAlign='center'
            fontSize='28px'
            fontWeight='semibold'
            alignItems='center'
            justifyContent='center'
            pt={7}
            px={5}
          >
            "{advice.slip.advice}"
          </Text>
        </Box>
        <Center>
          <Image src={Dice} w='90%' alt='divider' />
        </Center>
        <Center>
          <IconButton
            className={spin ? 'spin' : null}
            as={motion.div}
            mt='2rem'
            bg='primary.green'
            aria-label='Search database'
            icon={<BsDice5Fill />}
            size='lg'
            onClick={diceRoll}
            color='black'
            _hover={{
              bg: 'primary.green'
            }}
            _active={{
              bg: 'primary.lightcyan'
            }}
          />
        </Center>
      </Box>
      <Container>asd</Container>
    </Box>
  )
}

export default App

// _active={{
//   transition: '0s',
//   bg: 'yellow',
//   animation: { animation },
//   animationDuration: '5s'
// }}
