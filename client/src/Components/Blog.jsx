import React from 'react'
import { blogs } from '../Data/data.js';

const Blog = () => {
  return (
       <section data-testid = "blog-section" className='px-6 py-10 w-full'>
                 <div className='max-w-[1360px] mx-auto px-4 py-4 flex flex-col gap-6'>
                    <div className=' w-[73%] lg:w-[30%] flex flex-col gap-1'>
                        <div className='flex gap-1 items-center'>
                                   <h2 className='font-semibold text-xl'>Our Expert</h2>
                                   <h5 className='underline text-gray-600 text-[18px]'>Blog</h5>
                        </div>
                        <p className='text-gray-600 text-xs'>stay ahead of fashion trends with styling tips,product reviews,and expert advice helping you shop smarter and dress better</p>
                      </div>
                        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
                           {blogs.map((blog,index)=>{
                              return <div key={index} className='relative mx-auto '>
                                      <div className='absolute inset-0 bg-black opacity-40 rounded-lg'></div>
                                      <div className='absolute bottom-6 left-2 flex flex-col gap-1 items-start justify-start'>
                                        <h3 className='text-sm font-semibold text-slate-50'>{blog.title}</h3>
                                        <h4 className='text-slate-50 font-light text-sm'>{blog.category}</h4>
                                         <button className='bg-white/30 mt-2 px-6 py-1 font-semibold text-sm text-white'>continue reading</button>
                                    </div>
                                     <img src={blog.image} alt="blog image" className='object-cover rounded-md' height={350} width={350} />
                                  </div>
                           })}
                           
                        </div>
                      
       
                 </div>
            </section>
  )
}

export default Blog;