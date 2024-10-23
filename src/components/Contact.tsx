import React from 'react'
import { FaMailBulk } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-1 gap-10'>
                <div className='space-y-8'>
                    <div className='flex flex-col gap-1'>
                    <h2 className='text-5xl text-red-600 mb-5 font-serif'>Order now</h2>
                        <label htmlFor="name">Name:</label>
                        <input type="text" className='h-[40px] bg-transparent border border-pink-600' id='name' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="email">Email:</label>
                        <input type="text" className='h-[40px] bg-transparent border border-pink-600' id='email' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="msg">Message:</label>
                        <textarea className='h-[40px] bg-transparent border border-pink-600' id='msg' rows={8}>
                        </textarea>
                    <div>
                    <button className='bg-pink-600 text-white w-32 border border-r-zinc-300 rounded-md mt-5 ' data-aos="zoom-in-up">Submit</button>
                </div>
            </div>
        </div>
        </div>
        </div>

  )
}

export default Contact
