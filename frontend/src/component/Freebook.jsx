import React, { useState, useEffect } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Card from './Cards';
import axios from "axios";


function Freebook () {
    const [filter,setfilter]=useState([])
  useEffect(()=>{
  const getBook=async()=>{
try{
 const res=await axios.get("http://localhost:4001/book");
 
 const data=res.data.filter((data)=>data.category==="Free");
 setfilter(data)

}catch(error){
  console.log(error);
}
  }  
  getBook();
  },[])
  // const filterData=list.filter((data)=>data.category==="Free");
   var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
  <>
    <div className=' max-w-screen-2xl container mx-auto md:px-20 px-4'>
     <div>
       <h1 className='font-bold text-xl pd-2'>Free offer courese</h1>
      <p>A free offer course is a course that is provided at no cost to learners, allowing them to gain knowledge or skills without paying any fees. These courses are often offered for learning, promotion, skill development, or awareness, and may include video lectures, notes, assignments, or certificates (sometimes paid).</p>
     </div>
    
    <div>
   <Slider {...settings}>
  {filter.map((item) => (
    <Card item={item} key={item.id} />
  ))}
</Slider>

    </div>
    </div>
  </>
  )
}

export default Freebook
