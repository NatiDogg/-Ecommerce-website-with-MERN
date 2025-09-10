import React from 'react'
import { FaStar } from 'react-icons/fa';

const TestimonialCard = ({testimonial}) => {
       
              
  return (
      <div className='flex flex-col gap-4 justify-start items-start bg-slate-50/40 px-6 py-6 shadow-md rounded-md'>
          <div className='flex flex-row justify-between w-full items-center'>
                   <div className='flex flex-row gap-1'>
                         {testimonial.stars.map((star,index)=>{
                              return <div className='text-orange-700 ' key={index}>{star}</div>
                         })}
                   </div>
                   <div>
                     {testimonial.date} 
                   </div>
          </div>
           <div>
               {testimonial.description}
           </div>
           <div className='h-12 w-12 flex flex-row gap-3 items-center'>
              <img src={testimonial.Image} alt={`${testimonial.name} image`}  className='rounded-full object-cover ' />
               <p className='text-black w-full'>{testimonial.name}</p>
           </div>
          
      </div>
  )
}

export default TestimonialCard;