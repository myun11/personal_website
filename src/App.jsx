import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import { Home, Home2, About, Projects, Contacts } from './pages';

import './App.css'

import React from 'react'
import Navbar from './components/Navbar';

const App = () => {
  
  return (
    <main className="bg-blue-950 bg-cover w-screen h-screen relative">
      <div className="">
        <div className="flex flex-col justify-center items-start text-gray-100 px-8 py-4">
          <h1 className="text-4xl font-bold">Michael Yun</h1>
          <h2 className="text-xl font-medium mt-2">Full Stack Developer</h2>
          <h3 className="text-base text-gray-400 mt-4">
            I like to solve problems.
          </h3>
        </div>
        <div className ="flex flex-col justify-center items-start text-gray-100 px-8 py-4">
          <h2 className="text-xl font-medium mt-2">About</h2>
          <h3 className="text-base mt-4 text-gray-400 text-start">
          I'm a dedicated US citizen software engineer with a strong focus on creating 
          dynamic web applications and captivating data visualizations.
          I specialize in designing visually stunning, user-friendly interfaces that deliver
          exceptional user experiences.
          With past experience optimizing workflows and managing end-to-end development,
          I thrive on solving complex challenges. Driven by a constant hunger for learning
          and improvement, I aim to bring innovation and excellence to every project I undertake.
          </h3>
        </div>

        <div className ="flex flex-col justify-center items-start text-gray-100 px-8 py-4">
          <h2 className="text-xl font-medium mt-2">Experience</h2>
        </div>

        <div className ="flex flex-col justify-center items-start text-gray-100 px-8 py-4">
          <h2 className="text-xl font-medium mt-2">Projects</h2>
        </div>

        <div className ="flex flex-col justify-center items-start text-gray-100 px-8 py-4">
          <h2 className="text-xl font-medium mt-2">Education</h2>
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
