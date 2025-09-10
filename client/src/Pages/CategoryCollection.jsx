import React,{useState,useEffect} from 'react'
import {useLocation,useParams} from 'react-router-dom'
import { dummyProducts } from '../Data/data.js';
import Item from '../Components/Item.jsx';

const CategoryCollection = () => {
       const [product, setProduct] = useState([]);
       
      
       const {category} = useParams();
        
       
      
       useEffect(()=>{
         const filteredProducts = dummyProducts.filter((product)=> product.category.toLowerCase() === category);
        
         setProduct(filteredProducts);
          
       },[category]);

       
  return (
     <section className='px-6 py-6 w-full'>
        <div className='max-w-[1360px] mx-auto px-4 py-4 flex flex-col gap-6'>
               <div className=' w-[70%] lg:w-[36%] flex flex-col gap-1'>
                  <div className='flex gap-1 items-center'>
                       <h2 className='font-semibold text-xl capitalize'>{category}</h2>
                        <h5 className='underline text-gray-600 text-[18px]'>Products</h5>
                  </div>
                     <p className='text-gray-500 text-sm'>Explore our collection of stylish clothing and footwear made for comfort,quality and everday confidence.</p>
                 </div>
               <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'>
                    {product.length > 0 ? product.map((product,index)=>{
                       return <Item product={product} key={index} className={"!text-[14px]"} />
                    }) : <p className="text-2xl font-semibold text-black">loading please wait...</p>} 
                 
               </div>
        </div>
       
     </section>
  )
}

export default CategoryCollection;