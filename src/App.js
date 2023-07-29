import React from 'react'
import Home from './component/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Project from './component/Project'
import About from './component/About'
import Contact from './component/Contact'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>       
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/about' element={<About />}></Route>
        <Route exact path='/project' element={<Project />}></Route>
        <Route exact path='/contact' element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App