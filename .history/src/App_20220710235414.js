import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  Container,
  Text,
  Heading,
  Box,
  Center 
} from '@chakra-ui/react'
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
    <Container centerContent>
      {advice.slip.advicd}
    </Container>
  )
}

export default App
