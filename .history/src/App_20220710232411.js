import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <Router>
      {/* NAVBAR */}
      <Routes>
        <Route exact path='/' />
      </Routes>
    </Router>
  )
}

export default App
