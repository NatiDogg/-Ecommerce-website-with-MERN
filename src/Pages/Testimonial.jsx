import React from 'react'
import TestimonialCard from '../Components/TestimonialCard.jsx';
import { FaStar } from 'react-icons/fa';
import user1 from '../assets/testimonials/user1.jpg';
import user2 from '../assets/testimonials/user2.jpg';
import user3 from '../assets/testimonials/user3.jpg';


const Testimonial = () => {

          const stars = [];
           for(let i = 0; i<5;i++){
                  stars.push(<FaStar />);
           }

           


    const testimonials = [
            { 
              name: "Donald jackman",
              description: `"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum unde incidunt obcaecati quidem harum praesentium laboriosam voluptate ex totam sit mollitia nihil, nemo quod optio facilis amet quam pariatur a!"`,
              date: "22 jan 2025",
              Image: user1,
              stars : stars

            },
            { 
              name: "Michaela Lee",
              description: `"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum unde incidunt obcaecati quidem harum praesentium laboriosam voluptate ex totam sit mollitia nihil, nemo quod optio facilis amet quam pariatur a!"`,
              date: "10 Mar 2025",
              Image: user2,
              stars : stars

            },
            { 
              name: "Sarah Thomas",
              description: `"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum unde incidunt obcaecati quidem harum praesentium laboriosam voluptate ex totam sit mollitia nihil, nemo quod optio facilis amet quam pariatur a!"`,
              date: "22 jan 2025",
              Image: user3,
              stars : stars

            },
            { 
              name: "Natnael Wondimu",
              description: `"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum unde incidunt obcaecati quidem harum praesentium laboriosam voluptate ex totam sit mollitia nihil, nemo quod optio facilis amet quam pariatur a!"`,
              date: "22 sep 2025",
              Image: user1,
              stars : stars

            }

            
    ]
  return (

       <section className='px-6 py-6 w-full  '>
           <div className='max-w-[1360px] mx-auto px-4 py-4 flex flex-col gap-6'>
                <div className=' w-[70%] lg:w-[36%] flex flex-col gap-1'>
                  <div className='flex gap-1 items-center'>
                       <h2 className='font-bold text-2xl'>People</h2>
                        <h5 className='underline text-gray-600 text-[18px]'>Says</h5>
                  </div>
                     <p className='text-gray-500 text-sm'>Real stories from our happy customers sharing their experience,style inspiration, and trusted feedback on what they love</p>
                 </div>

                 <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 '>
                        {testimonials.map((testimonial,index)=>(
                               <TestimonialCard key={index} testimonial = {testimonial} />
                        ))}
                 </div>
             
           </div>

       </section>
  )
}

export default Testimonial;