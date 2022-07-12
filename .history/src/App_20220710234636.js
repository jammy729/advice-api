import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  Container,
  Text,
  Heading
}
const App = () => {
  const baseURL = 'https://api.adviceslip.com/advice'
  const [advice, adviceSet] = useState(null)

  useEffect(() => {
    axios.get(baseURL).then(res => {
      adviceSet(res.data)
    })
  }, [])
  if (!advice) return null

  return <>
}

export default App
