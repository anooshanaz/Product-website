import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { BsBagCheckFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className='container pt-8 bg-slate-100'>
    <div className='flex justify-around items-center '>
    <div className='text-xl font-medium text-pink-600 font-serif'>Fashion<BsBagCheckFill /></div>
    <ul className='gap-10 lg:gap-16 hidden md:flex font-semibold'>
        <li className='menulink'><a href="#hero">Home</a></li>
        <li className='menulink'><a href="#bags">Bags Details</a></li>
        <li className='menulink'><a href="#contact">Contact</a></li>
    </ul>
    <GiHamburgerMenu className='md:hidden' size={30} />
     </div> 
    </div>
  )
}

export default Navbar
