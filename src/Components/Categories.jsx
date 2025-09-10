import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import {categories} from '../Data/data.js';
import { shopContext } from '../Context/ShopContextProvider.jsx';

const Categories = () => {
    const {navigate} = useContext(shopContext);
   
  return (
        <section className='px-6 py-2 w-full'>
                 <div className='max-w-[1360px] mx-auto px-4 py-4 flex flex-col gap-6'>
                      <div className='flex gap-1 items-center'>
                         <h2 className='font-semibold text-xl'>Category</h2>
                          <Link to={'/collection'} className='underline text-gray-600 text-[18px]'>List</Link>
                      </div>
                      <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
                         {categories.map((category,index)=>{
                               return  <div key={category.name} className='flex flex-col items-center gap-4'>
                                 <img onClick={()=> {navigate(`/collection/${category.name.toLowerCase()}`); window.scrollTo(0, 0); }} className='bg-gray-100 rounded-md cursor-pointer hover:bg-gray-200 object-cover' src={category.image} alt={category.name} height={350} width={350} />
                                  <h3 className='font-semibold uppercase text-xs md:text-sm'>{category.name}</h3>
                               </div>
                         })}   
                      </div>
       
                 </div>
            </section>
  )
}

export default Categories;