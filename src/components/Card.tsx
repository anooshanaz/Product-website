import React from 'react'
import Image from 'next/image'
import { DiVim } from 'react-icons/di'
interface propsType{
    title:string
    desc:string
    img: string
    tags:string[]
}

const Card:React.FC<propsType>= ({title,desc,img,tags}) => {
  return (
    <div className=' border border-pink-800 w-[300px] sm:w-[350px]' data-aos="flip-left">
    <div>
    <Image className='w-[350px] sm:w-[350px] h-60'
    src={img}
    width={350}
    height={350}
    alt={title}/>
    </div>
    <div className='p-4 space-y-4'>
        <div className='text-4xl font-extralight'>{title}</div>
        <div>{desc}</div>
        <div>
           {tags.map((el) => (
            <div className='tag' key={el}>{el}</div>
           ))}
        </div>
    </div>
    </div>
      
  )
}

export default Card
