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
    <Box position='relative'>
      <Box
        height='40px'
        width='40px'
        position='absolute'
        top={0}
        right={0}
        left={0}
        bottom={0}
        margin='auto'
      ></Box>
    </Box>
  )
}

export default App
