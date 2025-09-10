import React from 'react'
import heroImg from '../assets/bg.png'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
       <section className={`w-full px-4 py-6 bg-[url('/src/assets/bg.png')] bg-cover bg-center bg-no-repeat h-[400px] md:h-[711px]`}>
             <div className='max-w-[1360px]  mx-auto flex gap-10 justify-between items-center  '>
                <div className=' px-1 md:px-6 py-10  md:py-12 flex flex-col justify-start md:justify-center items-start h-[600px] w-full'>
                     <p className=' mb-1 font-paci text-gray-500 font-light text-[17px] md:text-xl'>Fresh Fits for Frosty Days</p>
                      <div className='flex flex-col '>
                         <h1 className='uppercase font-semibold text-sm md:text-2xl '>Get More For Less-40% Off!</h1>
                         <h2 className='text-2xl md:text-5xl lg:text-6xl font-bold'>on Coats & Jackets</h2>
                          <p className='text-slate-950 font-bold text-sm md:text-xl'>Starting at <span className='bg-white text-black px-3 py-1 relative text-xl'><span className='absolute top-0 left-1 text-xs md:text-sm'>$</span> 99.99</span></p>
                      </div>
                       <div className='mt-12'>
                          <Link to={"/collection"} className='bg-slate-950 text-white px-7 py-4 md:px-10 md:py-5 rounded-sm hover:bg-slate-900'>
                              Shop Now
                          </Link>
                       </div>
                </div>
                 

             </div>
       </section>
  )
}

export default Hero;