import { useState } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import Link from '@mui/material/Link';
import './App.css'

import React from 'react'

const App = () => {
  
  return (
    <main className="bg-blue-950">
      <div className="">
        <div className="flex flex-col justify-center items-start text-gray-100 px-4 py-4">
          <h1 className="text-4xl font-bold">Michael Yun</h1>
          <h2 className="text-xl font-medium mt-2">Full Stack Developer</h2>
          <h3 className="text-base text-gray-400 mt-4">
            I like to solve problems.
          </h3>
          <span className="mt-4">
            <Tooltip title="GitHub">
              <Link
                href="https://github.com/myun11/"
                rel="noopener"
                target="_blank"
                underline="none"
              >
                <IconButton aria-label="GitHub">
                <GitHubIcon sx={{ color: 'white', '&:hover': { color: 'lightgray' } }} />
                </IconButton>
              </Link>
            </Tooltip>
            <Tooltip title="LinkedIn">
              <Link
                href="https://www.linkedin.com/in/michael-yun-6562a3207/"
                rel="noopener"
                target="_blank"
                underline="none"
              >
                <IconButton aria-label="LinkedIn">
                  <LinkedInIcon sx={{ color: 'white', '&:hover': { color: 'lightgray' } }} />
                </IconButton>
              </Link>
            </Tooltip>
            <Tooltip title="LinkedIn">
              <Link
                href="https://www.instagram.com/heybbyitsmichael/"
                rel="noopener"
                target="_blank"
                underline="none"
              >
                <IconButton aria-label="Instagram">
                  <InstagramIcon sx={{ color: 'white', '&:hover': { color: 'lightgray' } }} />
                </IconButton>
              </Link>
            </Tooltip>
            <Tooltip title="Email Me">
              <Link
                href="mailto:yun.michael.ds@gmail.com"
                target="_blank"
                rel="noopener"
                underline="none"
              >
                <IconButton aria-label="Email">
                  <EmailIcon sx={{ color: 'white', '&:hover': { color: 'lightgray' } }} />
                </IconButton>
              </Link>
            </Tooltip>
          </span>
        </div>
        <div className="flex flex-col justify-center items-start text-gray-100 px-4 py-4">
          <h2 className="text-xl font-medium mt-2 uppercase">About</h2>
          <h3 className="text-base mt-4 text-gray-400 text-start">
            I'm a dedicated US citizen software engineer with a strong focus on creating 
            dynamic web applications and captivating data visualizations.
            I specialize in designing visually stunning, user-friendly interfaces that deliver
            exceptional user experiences. I aim to bring innovation and excellence to every project I undertake.
          </h3>
          <h3 className="text-base mt-4 text-gray-400 text-start">
            I come from a statistics and computer science background, specializing in technologies like
            React.js, AWS, ASP.NET Core, and R while equipped with a solid understanding of handling data. 
            In the past, I've built scalable and reusable applications and 
            dashboards which provided business insights to my teammates while saving them time and resources.  
          </h3>
          <h3 className="text-base mt-4 text-gray-400 text-start">
            In my free time, I enjoy cosplaying with my friends, tinkering with 3D print and Arduino-based cosplay props,
            and improving myself at the gym.
          </h3>
        </div>
        <div className="flex flex-col justify-center items-start text-gray-100 px-4 py-4">
          <h2 className="text-xl font-medium mt-2 uppercase">Experience</h2>
          2021 - 2022
          Full Stack Developer - AttainX
        </div>

        <div className ="flex flex-col justify-center items-start text-gray-100 px-4 py-4">
          <h2 className="text-xl font-medium mt-2 uppercase">Projects</h2>
          2024
          sumeru.dev - Genshin Impact Web App
        </div>

        <div className ="flex flex-col justify-center items-start text-gray-100 px-4 py-4">
          <h2 className="text-xl font-medium mt-2 uppercase">Education</h2>
          2017 - 2021
          Bachelor of Science - Statistics
          University of Illinois Urbana-Champaign
          
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
