import { useState } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import Link from '@mui/material/Link';
import ShortcutIcon from '@mui/icons-material/ArrowOutward';
import './App.css'
import Bubble from './components/Bubble';

import React from 'react'

const App = () => {
  

  // const data = [
  //   {
  //     company : "AttainX",
  //     companyURL : "https://attainx.com/",
  //     description: "",
  //     technologies: [],
  //     dates:
  //   }
  // ]
  
  return (
    <main className="bg-slate-900">
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
            and chasing goals at the gym.
          </h3>
        </div>
        <div className="flex flex-col justify-center items-start text-gray-100 px-4 py-4">
          <h2 className="text-xl font-medium mt-2 uppercase py-4">Experience</h2>
          <div className ="text-start my-4">
            <p className="text-sm text-gray-400">2023 - Present</p>
            <h2 className="">
              <Tooltip title="Company Link">
                <Link
                  href="https://eliteprep.com/"
                  target="_blank"
                  rel="noopener"
                  underline="none"
                >
                  <p className="text-gray-100">SAT/AP College Prep Tutor - Elite Prep
                  <ShortcutIcon fontSize="small" sx={{
                    color: 'white',
                    '&:hover': { color: 'lightgray' }
                  }}/>
                  </p>
                  
                </Link>
              </Tooltip>
              <div className="text-start text-gray-400">
                  Lead and form relationships with students and parents on structured class programs.
                  Identify critical struggle points in lesson plans and manage time accordingly.
                  Provide constructive feedback while tracking weekly improvements.
              </div>

              <div className="mt-2 mb-2 flex flex-wrap">            
                <Bubble text="Presentation"/>
                <Bubble text="Communication"/>
                <Bubble text="Mentoring"/>
                <Bubble text="Customer Service"/>
                <Bubble text="Computer Science"/>
                <Bubble text="Calculus 1-3"/>
                <Bubble text="SAT Math"/>
                <Bubble text="Statistics"/>
                <Bubble text="Physics"/>
              </div>
            </h2>
          </div>
          <div className="text-start my-4">
            <p className="text-sm text-gray-400">2021 - 2022</p>
            <h2 className="">
              <Tooltip title="Company Link">
                <Link
                  href="https://attainx.com/"
                  target="_blank"
                  rel="noopener"
                  underline="none"
                >
                  <p className="text-gray-100">Full Stack Developer - AttainX                    
                  <ShortcutIcon fontSize="small" sx={{
                    color: 'white',
                    '&:hover': { color: 'lightgray' }
                  }}/>
                  </p>
                  
                </Link>
              </Tooltip>
            </h2>

            <div className="text-start text-gray-400">
              Built and deployed scalable solutions in an Agile environment to deliver innovative, data driven analytics and business insights.
              Collaborated with local civilian and federal clients to achieve digital modernization goals.
            </div>

            <div className="mt-2 mb-2 flex flex-wrap">
              <Bubble text="React"/>
              <Bubble text="AWS"/>
              <Bubble text="Node.js"/>
              <Bubble text="MaterialUI"/>
              <Bubble text="RESTful APIs"/>
              <Bubble text="Microservices"/>
              <Bubble text="Data Visualization"/>
            </div>
            
            {/* React - AWS - Node.js - .NET - MaterialUI
            AWS Lambda, DynamoDB, S3, ReactJS, Postman */}
          </div>
        </div>

        <div className ="flex flex-col justify-center items-start text-gray-100 px-4 py-4">
          <h2 className="text-xl font-medium mt-2 uppercase">Projects</h2>
          <div className="text-start">
            2024
            sumeru.dev - Genshin Impact Web App
            <div className="mt-2 mb-2 flex flex-wrap">
              <Bubble text="React"/>
              <Bubble text="TailwindCSS"/>
              <Bubble text="RegEx"/>
              <Bubble text="Responsive Design"/>
              <Bubble text="Git"/>
            </div>
          </div>
          
          2021
          Statistical Consultant - University of Illinois
          R - RShiny - ggplot2 - dplyr - tidyverse - rpart - corrplot
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
