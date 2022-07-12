import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Text, Heading, Box, Center, Flex } from '@chakra-ui/react'
const App = () => {
  const baseURL = 'https://api.adviceslip.com/advice'
  const [advice, adviceSet] = useState(null)

  useEffect(() => {
    axios.get(baseURL).then(res => {
      adviceSet(res.data)
    })
  }, [])

  if (!advice) return null

  return (
    <Flex
      width={'100vw'}
      height={'100vh'}
      alignContent={'center'}
      justifyContent={'center'}
      bg='white'
    >
      <Flex w='400px'>
        <Box bg='green' h='300px'>
          <Text fontWeight='semibold' textAlignt='center'>
            {`"` + advice.slip.advice + `"`}
          </Text>
        </Box>
      </Flex>
    </Flex>
  )
}

export default App
