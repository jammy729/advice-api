import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from '@emotion/styled'
import { Container, Text, Heading, Box, Center, Flex } from '@chakra-ui/react'
const App = () => {
  const baseURL = 'https://api.adviceslip.com/advice'
  const [advice, adviceSet] = useState(null)

  const Outer = styled.div`
    display: grid;
    place-items: center center;

    height: 100vh;
    border: 1px solid black;
    background: white;
  `

  const Middle = styled.div`
    background: blue;
    width: 500px;
    height: 350px;
  `

  useEffect(() => {
    axios.get(baseURL).then(res => {
      adviceSet(res.data)
    })
  }, [])

  if (!advice) return null

  return (
    <Outer>
      <Middle>
        <Heading></Heading>
        <Text
          fontWeight='semibold'
          textAlign='center'
          alignItems='center'
          justifyContent='center'
        >
          {advice.slip.advice}
        </Text>
      </Middle>
    </Outer>
  )
}

export default App
