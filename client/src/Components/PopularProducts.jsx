import React,{useContext, useEffect, useState} from 'react'
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {Autoplay} from 'swiper/modules';
import { shopContext } from '../Context/ShopContextProvider.jsx';
import Item from './Item.jsx';
const PopularProducts = () => {
  const [popularProducts, setpopularProducts] = useState([]);
  const {products} = useContext(shopContext);
     useEffect (()=>{
          const data = products.filter((item)=>{
              return  item.popular
          })
          setpopularProducts(data.slice(0,6));
          
     },[products])
       
  return (
      <section data-testid = "popularProducts-section" className='px-6 py-6 w-full'>
                      <div className='max-w-[1360px] mx-auto px-4 py-4 flex flex-col gap-6'>
                           <div className=' w-[70%] lg:w-[33%] flex flex-col gap-1'>
                               <div className='flex gap-1 items-center'>
                                   <h2 className='font-semibold text-xl'>Popular</h2>
                                   <h5 className='underline text-gray-600 text-[18px]'>Products</h5>
                               </div>
                               <p className='text-gray-600 text-xs'>Explore our collection of stylish clothing and footwear made for comfort,quality and everday confidence.</p>
                           </div>
                           
                           {<Swiper
                             autoplay={{
                               delay: 4000,
                               disableOnInteraction: false,

                             }}
                             breakpoints={
                               {
                                555:{
                                  slidesPerView: 2,
                                  spaceBetween: 10
                                },
                                800:{
                                  slidesPerView: 3,
                                  spaceBetween: 10
                                },
                                1150:{
                                  slidesPerView: 4,
                                  spaceBetween: 10
                                },
                                1350:{
                                  slidesPerView: 5,
                                  spaceBetween: 10
                                },
                               }
                             }
                             modules={[Autoplay]}
                             className='max-h-[470px] max-w-[100%]'
                             >
                              {
                                 popularProducts.map((popularProduct,index)=>{
                                     return <SwiperSlide key={popularProduct.id}>
                                          <Item product= {popularProduct} />
                                     </SwiperSlide>
                                }) 
                              }
                              
                               

                            </Swiper>
                            }
                           
            
                      </div>
                 </section>
  )
}

export default PopularProducts;