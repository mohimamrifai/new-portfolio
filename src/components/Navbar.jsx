import React from 'react'

const Navbar = () => {
  return (
        <div className='navbar'>
        <ul className='navbar_links'>
            <a href="/" className='navbar_link'>Home</a>
            <a href="#about" className='navbar_link'>About me</a>
            <a href="#projects" className='navbar_link'>Projects</a>
        </ul>
      </div>
  )
}

export default Navbar