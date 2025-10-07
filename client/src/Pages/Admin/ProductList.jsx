import React,{useContext,useState} from 'react'

import { shopContext } from '../../Context/ShopContextProvider.jsx'

const ProductList = () => {
       const {products,currency,fetchProducts}  = useContext(shopContext);
        const [inStock, setInStock] = useState(true);
  return (
       <section className='px-0 py-2 md:px-6 md:py-6 w-full bg-gray-100'>
            <div className='max-w-[1360px] mx-auto px-4 py-4 flex flex-col gap-6'>
                <div className='flex flex-row justify-between gap-10 bg-white rounded-sm w-full px-4 py-1'>
                      <div className='flex flex-row justify-between gap-5 md:w-[30%]'>
                         <p className='text-black font-semibold text-sm md:text-[16px]'>Image</p>
                         <p className='text-black font-semibold text-sm md:text-[16px]'>Name</p>
                      </div>
                       <div className='flex flex-row items-center gap-4 md:gap-6'>
                           <p className='text-black font-semibold text-sm md:text-[16px]' >Category</p>
                           <p className='text-black font-semibold text-sm md:text-[16px]'>Price</p>
                           <p className='text-black font-semibold text-sm md:text-[16px]'>InStock</p>

                       </div>
                </div>
                 <div className='flex flex-col gap-4   py-1 w-full '>
                    {products.map((product,index)=>{
                           return <div key={index} className='flex bg-white rounded-sm flex-row justify-between items-center md:px-4 py-6 gap-8'>
                                  <div className='flex flex-row justify-between items-center gap-0 sm:gap-2  md:gap-5 w-[50%] md:w-[60%]'>
                                  <img src={product.image[0]} alt="product image" height={60} width={60} />
                                    <p className='text-black font-semibold text-xs w-[60%] md:w-full text-center'>{product.name}</p>
                                  </div>
                                  <div className='flex flex-row items-center gap-8 md:gap-10'>
                                       <p className='text-gray-600  font-semibold text-sm md:text-[16px]' >{product.category}</p>
                                       <p className='text-gray-600 font-semibold text-sm md:text-[16px]'>{currency}{product.offerPrice}</p>
                                        <div>
                                           <label className='relative inline-flex items-center cursor-pointer text-gray-900 gap-3' >
                                              <input type="checkbox" className='sr-only peer' defaultChecked = {product.inStock} />
                                              <div className='w-10 h-6 bg-slate-500 rounded-full peer peer-checked:bg-gray-900 transition-colors duration-200' />
                                               <span className='absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-4' />
                                           </label>
                                        </div>

                                  </div>

                           </div>
                    })}
                    
                 </div>

            </div>
       </section>
  )
}

export default ProductList;