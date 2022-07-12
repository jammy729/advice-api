import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Text, Heading, Box, Center } from '@chakra-ui/react'
import styled from '@emotion/styled'
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
    <Box w='100vw' h='100vh' bg='green'>
      <Box bg='blue' display='flex' justifyContent='center' align></Box>
    </Box>
  )
}

export default App
