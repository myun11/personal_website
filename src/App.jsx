import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import { Home, About, Projects, Contacts } from './pages';

import './App.css'

import React from 'react'
import Navbar from './components/Navbar';

const App = () => {
  
  return (
    <main className='bg-slate-300/20'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
            {/*  */}
          <Route path="/about" element-={<About/>} /> 
            {/* personal info, my timeline, undergrad, future prospects, current interests,*/}
          <Route path="/projects" element-={<Projects/>} />
            {/* gallery of projects */}
          <Route path="/contacts" element-={<Contacts/>} />
            {/* linkedin, github, email, insta */}
        </Routes>
      </Router>
    </main>
  )
}

export default App
