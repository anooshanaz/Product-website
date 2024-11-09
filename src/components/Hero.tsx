import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id='hero' className='min-h-screen'
      <Navbar/>
      <div className='container grid lg:grid-cols-1 h-[calc(100vh-600px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-items- items-center mt-20 font-serif justify-around '>
          <div>
            <p data-aos="zoom-in" className='text-red-600'>Shop Online</p>
            <p data-aos="zoom-in-up" className='text-red-600'>Your Best Choice</p>
            <span data-aos="zoom-in-up" className='text-black font-normal text-[20px] sm:text[20px] justify-center mt-2'>
              <p>Welcome to Fashion bag, your go-to online destination for a stylish and versatile collection of bags. Whether you're looking for trendy handbags,</p>
              <p>practical backpacks, or sleek crossbody bags, we have something for every occasion. Our curated selection features high-quality materials,</p>
              <p>timeless designs, and the latest fashion trends to suit your unique style.</p>
         <div className='mt-5'><button className='bg-pink-600 text-white p-2 rounded-lg text-[20px] hover:bg-red-200' data-aos="flip-left">Order now</button>
    </div>
          </span>
          </div>
          </div>
        </div>
      </div>
  
  
  

  )
}

export default Hero
