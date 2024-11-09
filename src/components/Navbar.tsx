import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { BsBagCheckFill } from "react-icons/bs";
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';

  const Navbar = () => {
    const [isMenuOpen , setIsMenuOpen] = useState(false)
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen)
    }
  return (
    <div className='container pt-8 bg-slate-100'>
    <div className='flex justify-around items-center '>
    <div className='text-xl font-medium text-pink-600 font-serif'>Fashion<BsBagCheckFill /></div>
    <ul className='gap-10 lg:gap-16 hidden md:flex font-semibold'>
        <li className='menulink'><a href="#hero">Home</a></li>
        <li className='menulink'><a href="#bags">Bags Details</a></li>
        <li className='menulink'><a href="#contact">Contact</a></li>
    </ul>
    <div className='md:hidden' onClick={toggleMenu}>
    {isMenuOpen ?  <AiOutlineClose size={30}/> :
    <AiOutlineMenu  size={30} />
    }
    </div>
     </div> 
     {
      isMenuOpen && (
        <ul className='flex flex-col gap-4 mt-4 md:hidden'>
          <li className='menuLink'>
            <a href="#Hero" onClick={toggleMenu}>Home</a>
          </li>
          <li className='menuLink'>
            <a href="#about" onClick={toggleMenu}>About</a>
          </li>
          <li className='menuLink'>
            <a href="#project" onClick={toggleMenu}>Project</a>
          </li>
          <li className='menuLink'>
            <a href="#skills" onClick={toggleMenu}>Skills</a>
          </li>
          <li className='menuLink'>
            <a href="#contact" onClick={toggleMenu}>Contact</a>
          </li>
        </ul>
  )}
  </div>
  )
}

export default Navbar
