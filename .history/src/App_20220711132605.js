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
    >
      <Center maxW='400px' >
        <Containerbg='green'>
          <Text fontWeight='semibold' textAlignt='center'>
            {`"` + advice.slip.advice + `"`}
          </Text>
        </Containerbg=>
      </Center>
    </Flex>
  )
}

export default App
