import React from 'react'
import Heading from './Heading'
import Card from './Card'
const data=[
    {
        id:1,
        title:"Black Color",
        desc: "Bag with black colour in affordable prices",
        img: "/b1.jpg",
        tag:["Order now"]
    },
    {
        id:2,
        title:"Red Color",
        desc: "Bag with red colour in affordable prices",
        img: "/b2.jpg",
        tag:["Order now"]
    },  
    {
        id:3,
        title:"Blue Color",
        desc: "Bag with blue colour in affordable prices",
        img: "/b3.jpg",
        tag:["Order now"]
    },  
    {
        id:4,
        title:"Golden Color",
        desc: "Bag with golden colour in affordable prices",
        img: "/b4.jpg",
        tag:["Order now"]
    },  
    {
        id:5,
        title:"Unique Color",
        desc: "Bag with unique colour in affordable prices",
        img: "/b5.jpg",
        tag:["Order now"]
    },  
    {
        id:6,
        title:"Dark blue Color",
        desc: "Bag with dark blue colour in affordable prices",
        img: "/b6.jpg",
        tag:["Order now"]
    },  
    {
        id:7,
        title:"White Color",
        desc: "Bag with white colour in affordable prices",
        img: "/b7.jpg",
        tag:["Order now"]
    },  
    {
        id:8,
        title:"Dark Maron Color",
        desc: "Bag with dark maron colour in affordable prices",
        img: "/b8.jpg",
        tag:["Order now"]
    },  
    {
        id:9,
        title:"Pink Color",
        desc: "Bag with Pink colour in affordable prices",
        img: "/b9.jpg",
        tag:["Order now"]
    },    
    
]
    
const Bags = () => {
  return (
    <div id='bags' className='container pt-32  text-red-600 font-serif'>
        <Heading  title='Bags Details' />
        <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2  lg:grid-cols-3 place-items-center'>
            {data.map((el) => (<Card
            key={el.id} title={el.title} desc={el.desc} img={el.img} tags={el.tag}/>))}
        </div>

    </div>
  )
}

export default Bags
