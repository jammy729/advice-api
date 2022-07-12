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
    background: #1f2632;
  `

  const Middle = styled.div`
    background: blue;
    width: 500px;
    height: 350px;
    border-radius: 20px;
    padding: 10px 10px 10px 10px;
  `

  useEffect(() => {
    axios.get(baseURL).then(res => {
      adviceSet(res.data)
    })
  }, [])

  if (!advice) return null

  return (
  

    <Box display='grid' placeItems={ 'center center' } height='100vh' >
      <Box>
        
      </Box>
    </Box>
  )
}

export default App
  // <Outer>
    //   <Middle>
    //     <Heading size='sm' textAlign='center' color='primary.cyan'>
    //       ADVICE #{advice.slip.id}
    //     </Heading>
    //     <Text
    //       fontWeight='semibold'
    //       textAlign='center'
    //       alignItems='center'
    //       justifyContent='center'
    //     >
    //       {advice.slip.advice}
    //     </Text>
    //   </Middle>
    // </Outer>