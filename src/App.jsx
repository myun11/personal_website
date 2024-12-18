import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import { Home, Home2, About, Projects, Contacts } from './pages';

import './App.css'

import React from 'react'
import Navbar from './components/Navbar';

const App = () => {
  
  return (
    <main className="bg-vector bg-cover w-screen h-screen relative">
      <div className="">
        <div className="flex flex-col justify-center items-start text-white px-8 py-4">
          <h1 className="text-4xl font-bold">Michael Yun</h1>
          <h2 className="text-xl font-medium mt-2">Full Stack Developer</h2>
          <p className="text-base mt-4">
            I enjoy building applications and optimizing workflow.
          </p>
        </div>
        <div>
          {/* <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home2/>} />
                
              <Route path="/about" element={<About/>} /> 
                
              <Route path="/projects" element={<Projects/>} />
                
              <Route path="/contacts" element={<Contacts/>} />
                
            </Routes>
          </Router> */}
        </div>
      </div>
    </main>
  )
}

export default App
