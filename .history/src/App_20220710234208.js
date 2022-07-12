import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const baseURL = 'https://api.adviceslip.com/advice'
  const [advice, adviceSet] = useState(null)

  useEffect(() => {
    axios.get(baseURL).then(res => {
      adviceSet(res.data)
    })
  }, [])
  
  return <h1>{advice.slip.advice}</h1>
}

export default App
