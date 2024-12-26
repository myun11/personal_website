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
import Radio from './components/Radio';

import React, { useState, useEffect, useRef } from 'react'

const App = () => {
    // Function to check if the star is outside the viewport
    function checkStarPosition() {
      const starRect = star.getBoundingClientRect();
      if (starRect.right < 0 || starRect.left > viewportWidth) {
        star.remove();
      }
    }

  function createStar() {
    const container = document.querySelector('.container');
    // Create a star element
    const star = document.createElement('div');
    star.className = 'star';

    // Set random position within the container
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    let startX = Math.random() * viewportWidth - 100;
    let startY = Math.random() * viewportHeight - 100;
    
    const starSize = Math.random() * 16 + 0.01;
    star.style.width = `${starSize}px`;
    star.style.height = `${starSize}px`;

    // Ensure the star stays within the viewport boundaries
    startX = Math.min(startX, viewportWidth - starSize);
    startY = Math.min(startY, viewportHeight - starSize);

    star.style.left = `${startX}px`;
    star.style.top = `${startY}px`;

    // Append the star to the container
    container.appendChild(star);

    // Function to check if the star is outside the viewport
    function checkStarPosition() {
      const starRect = star.getBoundingClientRect();
      if (starRect.right < 0 || starRect.left > viewportWidth +1000) {
        star.remove();
      }
    }

    // Remove the star after the animation ends
    star.addEventListener('animationiteration', checkStarPosition);
    star.addEventListener('animationend', () => {
      star.remove();
    });
  }
 // Create stars immediately on page load
 useEffect(() => {
  for (let i = 0; i < 25; i++) { // Adjust the number of initial stars as needed
    createStar();
  }
  }, []);

  // Launch a star at random intervals
  useEffect(() => {
    const interval = setInterval(() => {
      createStar();
    }, Math.random() * 20 + 20); // Random interval

    return () => clearInterval(interval);
  }, []);

  // Used to keep the state of tabs which will also change through scrolling
  const [nav, setNav] = useState("About")
  const sectionRefs = useRef({});
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setNav(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // Adjust threshold as needed
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);


  return (
    <main className="w-full h-full bg-[#0b1228]">
      <div className="">
        <div className="md:columns-2">
          {/* Left Panel */}
          <div className="p-8 md:sticky md:top-0 md:col-span-1 md:h-screen">
            <div className="flex flex-col justify-center items-start text-gray-100 px-4 py-4">
              <h1 className="text-4xl font-bold">Michael Yun</h1>
              <h2 className="text-xl font-medium mt-2">Full Stack Developer</h2>
              <h3 className="text-start text-base text-gray-400 mt-4">
                I'm the one staying up late, turning ideas into innovative, seamless solutions.
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
            <div className="text-white max-md:hidden flex flex-col">
              <button className={nav == "About" ?      "text-white" : "text-gray-400 "} onClick={() => document.getElementById('About')?.scrollIntoView({behavior: 'smooth'})}>About</button>
              <button className={nav == "Experience" ? "text-white" : "text-gray-400 "} onClick={() => document.getElementById('Experience')?.scrollIntoView({behavior: 'smooth'})}>Experience</button>
              <button className={nav == "Projects" ?   "text-white" : "text-gray-400 "} onClick={() => document.getElementById('Projects')?.scrollIntoView({behavior: 'smooth'})}>Projects</button>
              <button className={nav == "Education" ?  "text-white" : "text-gray-400 "} onClick={() => document.getElementById('Education')?.scrollIntoView({behavior: 'smooth'})}>Education</button>
              <Radio/>
            </div>

          </div>
          {/* Right Panel */}
          <div className="container overflow-y-scroll p-8"> 
            <div ref={(el) => (sectionRefs.current["About"] = el)} id="About" className="min-h-screen flex flex-col justify-center items-start text-gray-100 px-4 py-4">
              <h2 className="text-xl font-medium mt-2 uppercase">About</h2>
              <h3 className="text-base mt-4 text-gray-400 text-start">
                I'm a dedicated US citizen software engineer with a strong focus on creating 
                dynamic web applications and captivating data visualizations.
                I specialize in designing visually stunning, user-friendly interfaces that deliver
                exceptional user experiences. I aim to bring innovation and excellence to every project I undertake.
              </h3>
              <h3 className="text-base mt-4 text-gray-400 text-start">
                I have a statistics and computer science background, specializing in technologies like
                React.js, AWS, ASP.NET Core, and R while equipped with a solid understanding of handling data. 
                I've built scalable and reusable applications and 
                dashboards which provided business insights to my teammates while saving them time and resources.  
              </h3>
              <h3 className="text-base mt-4 text-gray-400 text-start">
                In my free time, I enjoy cosplaying with my friends, tinkering with 3D printing and Arduino-based cosplay props,
                practicing guitar, and chasing personal records at the gym.
              </h3>
            </div>

            <div ref={(el) => (sectionRefs.current["Experience"] = el)} id="Experience" className="min-h-screen flex flex-col items-start text-gray-100 px-4 py-4">
              <h2 className="text-xl font-medium mt-2 uppercase py-4">Experience</h2>
              <div className ="text-start my-4">
                <p className="text-sm text-gray-400">2023 - Present</p>
                <h2 className="pb-4">
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
                </h2>
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
              </div>
              <div className="text-start my-4">
                <p className="text-sm text-gray-400">2021 - 2022</p>
                <h2 className="pb-4">
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
                  Worked closely with cross-functional teams including Product Managers, Scrum Master, UI/UX Designer,
                  Cloud Engineer, Business Intelligence, and Business Analyst.
                </div>

                <div className="mt-2 mb-2 flex flex-wrap">
                  <Bubble text="React"/>
                  <Bubble text="AWS"/>
                  <Bubble text="Node.js"/>
                  <Bubble text="MaterialUI"/>
                  <Bubble text="RESTful APIs"/>
                  <Bubble text="Microservices"/>
                  <Bubble text="Data Visualization"/>
                  <Bubble text="CI/CD Pipelines"/>
                  <Bubble text="Agile"/>
                  <Bubble text="Authentication"/>
                  <Bubble text="Authorization"/>
                </div>
                
                {/* React - AWS - Node.js - .NET - MaterialUI
                AWS Lambda, DynamoDB, S3, ReactJS, Postman */}
              </div>
            </div>

            <div ref={(el) => (sectionRefs.current["Projects"] = el)} id="Projects" className ="min-h-screen flex flex-col justify-center items-start text-gray-100 px-4 py-4">
              <h2 className="text-xl font-medium mt-2 uppercase">Projects</h2>
              <div className ="text-start my-4">
                <p className="text-sm text-gray-400">2024</p>
                <h2 className="pb-4">
                  <Tooltip title="Project Link">
                    <Link
                      href="https://sumeru.dev/"
                      target="_blank"
                      rel="noopener"
                      underline="none"
                    >
                      <p className="text-gray-100">sumeru.dev - Genshin Impact Web App
                      <ShortcutIcon fontSize="small" sx={{
                        color: 'white',
                        '&:hover': { color: 'lightgray' }
                      }}/>
                      </p>
                    </Link>
                  </Tooltip>
                </h2>
                <div className="text-start text-gray-400">
                  A responsive web application designed to consolidate and visualize game assets and data.
                  View your favorite characters and their stat distributions, factions, artwork, skills, and more.
                  As one of the biggest contributors to this public API, I designed new schemas and assets, documented them thoroughly,
                  and provided guidelines to help future contributors contribute constructively.
                </div>
                <div className="mt-2 mb-2 flex flex-wrap">            
                  <Bubble text="React"/>
                  <Bubble text="TailwindCSS"/>
                  <Bubble text="RegEx Validation"/>
                  <Bubble text="Theme Customization"/>
                  <Bubble text="Pagination"/>
                  <Bubble text="Sort and Filtering"/>
                  <Bubble text="API Architecture"/>
                  <Bubble text="Responsive Design"/>
                  <Bubble text="Figma"/>
                  <Bubble text="Git"/>
                </div>
              </div>
              <div className ="text-start my-4">
                <p className="text-sm text-gray-400">2021</p>
                <h2 className="">
                  <Tooltip title="Project Link">
                    <Link
                      href="https://github.com/myun11/427project/"
                      target="_blank"
                      rel="noopener"
                      underline="none"
                    >
                      <p className="text-gray-100">Statistical Consultant - University of Illinois
                      <ShortcutIcon fontSize="small" sx={{
                        color: 'white',
                        '&:hover': { color: 'lightgray' }
                      }}/>
                      </p>
                      
                    </Link>
                  </Tooltip>
                  <div className="text-start text-gray-400">
                    Connected local clients and small business owners with actionable solutions and data driven insights.
                    Performed statistical analyses via hypothesis testing, multicollinearity testing,
                    correlation analysis, data visualization, and results presentation on survey data of international Chinese students on what combination of
                    motivational factors and intrinsic behaviors affected English proficiency.
                  </div>
                  <div className="mt-2 mb-2 flex flex-wrap">
                    <Bubble text="Data Analysis"/>           
                    <Bubble text="R"/>
                    <Bubble text="RShiny"/>
                    <Bubble text="ggplot2"/>
                    <Bubble text="dplyr"/>
                    <Bubble text="tidyverse"/>
                    <Bubble text="rpart"/>
                    <Bubble text="corrplot"/>
                  </div>
                </h2>
              </div>
            </div>

            <div ref={(el) => (sectionRefs.current["Education"] = el)} id="Education" className ="flex flex-col justify-center items-start text-gray-100 px-4 py-4">
              <h2 className="text-xl font-medium mt-2 uppercase">Education</h2>
              <div className ="text-start my-4">
                <p className="text-sm text-gray-400">2017-2021</p>
                <h2 className="">
                  <Tooltip title="University Link">
                    <Link
                      href="https://illinois.edu/"
                      target="_blank"
                      rel="noopener"
                      underline="none"
                    >
                      <p className="text-gray-100">Bachelor of Science - Statistics (with Computer Science focus)
                      <ShortcutIcon fontSize="small" sx={{
                        color: 'white',
                        '&:hover': { color: 'lightgray' }
                      }}/>
                      </p>
                      
                    </Link>
                  </Tooltip>
                  <div className="text-start text-gray-400">
                  University of Illinois Urbana-Champaign
                  </div>
                  <div className="mt-2 mb-2 flex flex-wrap">
                    <Bubble text="Java"/>           
                    <Bubble text="Python"/>           
                    <Bubble text="C++"/>
                    <Bubble text="R"/>
                    <Bubble text="Object Oriented Programming"/>
                    <Bubble text="Data Structures and Algorithms"/>
                  </div>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
