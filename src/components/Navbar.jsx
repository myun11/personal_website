import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'>
        <NavLink to="/" className="w-20 h-20 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
            <p className='blue-gradient_text text-2xl'>MY</p>
        </NavLink>
        <nav className='flex text-2xl gap-7 font-medium'>
            <NavLink to='/about' className={({ isActive } ) => isActive ?
            'text-blue-300' : 'text-white'}>
                About
            </NavLink>
            <NavLink to='/projects' className={({ isActive } ) => isActive ?
            'text-blue-300' : 'text-white'}>
                Projects
            </NavLink>
            <NavLink to='/contacts' className={({ isActive } ) => isActive ?
            'text-blue-300' : 'text-white'}>
                Contacts
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar