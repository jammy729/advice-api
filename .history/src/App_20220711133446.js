import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from '@emotion/styled'
import { Container, Text, Heading, Box, Center, Flex } from '@chakra-ui/react'
const App = () => {
  const baseURL = 'https://api.adviceslip.com/advice'
  const [advice, adviceSet] = useState(null)

  const Outer = styled.div`
    position: absolute;
    display: table;
    width: 100%; /* This could be ANY width */
    height: 100%; /* This could be ANY height */
    background: #ccc;
  `

  const Middle = styled.div`
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  `

  const Content = styled.div`
    display: inline-block;
    text-align: center;
    background: #fff;
    padding : 20px;
    border : 1px solid #000;
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
        Content
ue
      </Middle>
    </Outer>
  )
}

export default App
