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
    <Container
      bg='green'
      h='100vh'
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      {advice.slip.advice}
    </Container>
  )
}

export default App
