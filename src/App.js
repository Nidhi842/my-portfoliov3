import React from 'react'
import Home from './component/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Project from './component/Project'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>       
        <Route exact path='/' element={<Home />}>Home</Route>
        <Route exact path='/project' element={<Project />}>Project</Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App