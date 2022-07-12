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
    /*place-items is a shorthand for align-items and justify-items*/

    height: 100;
    border: 1px solid black;
    background: gainsboro;
  `

  const Middle = styled.div`
    background: white;
  `

  const Content = styled.div`
    display: inline-block;
    text-align: center;
    background: #fff;
    padding: 20px;
    border: 1px solid #000;
  `
  useEffect(() => {
    axios.get(baseURL).then(res => {
      adviceSet(res.data)
    })
  }, [])

  if (!advice) return null

  return (
    <Outer>
      <Middle>asdf</Middle>
    </Outer>
  )
}

export default App
