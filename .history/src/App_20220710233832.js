import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {

  const baseURL = "https://api.adviceslip.com/advice"

  useEffect (() => {
    axios.get(baseURL).then((res) => {
      set
    })
  }, [])
  return <>Hello</>
}

export default App
