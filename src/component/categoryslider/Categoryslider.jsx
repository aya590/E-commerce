import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react'
import Loading from '../Loading/loading';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Categoryslider() {
    const [ categories,setcartegories]=useState(null)

    async function getcategory(){
        const option ={
            url:"https://ecommerce.routemisr.com/api/v1/categories",
            method : "GET",
        };
        let {data} = await axios.request(option)
        setcartegories(data.data);
        console.log(data.data);
        
    
    }

      
  useEffect
  (() =>{getcategory() },[])

  return (
   <>
<section className='my-3'>
    <h2 className='mb-5  text-lg text-gray-600 font-semibold'>shop popular categories </h2>
{!categories ?<Loading/>: <Swiper slidesPerView={6} loop={true} >
     {categories.map((categories)=> <SwiperSlide key={categories._id}>
        <div className=' h-64 '>
        <img  className="w-full h-full object-cover" src={categories.image} alt="" />  
        </div>
   
        <h3 className='mt-2'> {categories.name}</h3>

     </SwiperSlide>) }</Swiper> }
</section>
   </>

  )
}
