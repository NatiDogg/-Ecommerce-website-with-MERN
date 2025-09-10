import React from 'react';
import {LiaShippingFastSolid} from 'react-icons/lia';
import {BiSupport} from 'react-icons/bi';
import {TbPackageImport} from 'react-icons/tb'
import {MdCurrencyExchange} from 'react-icons/md';
const Features = () => {
  return (
     <section className='px-6 py-6 w-full'>
          <div className='max-w-[1360px] mx-auto grid grid-cols-2 md:grid-cols-4  gap-4 px-8 py-4'>
              <div className='flex flex-row gap-3 items-center'>
                  <LiaShippingFastSolid size={28} />
                  <div className='flex flex-col items-start '>
                     <h3 className='font-semibold text-[16px] lg:text-xl'>Free Shipping</h3>
                      <p className=' text-xs md:text-sm text-gray-600'>on above $100 order</p>
                  </div>
              </div>
              <div className='flex flex-row gap-3 items-center'>
                     <MdCurrencyExchange size={28} />
                  <div className='flex flex-col items-start '>
                     <h3 className='font-semibold text-[16px] lg:text-xl'>Member Discount</h3>
                      <p className=' text-xs md:text-sm text-gray-600'>Discount for elite members</p>
                  </div>
              </div>
              <div className='flex flex-row gap-3 items-center'>
                  <BiSupport size={28} />
                  <div className='flex flex-col items-start '>
                     <h3 className='font-semibold text-[16px] lg:text-xl'>Fast Support</h3>
                      <p className=' text-xs md:text-sm text-gray-600'>24/7 Customer support</p>
                  </div>
              </div>
              <div className='flex flex-row gap-3 items-center'>
                     <TbPackageImport size={28} />
                  <div className='flex flex-col items-start '>
                     <h3 className='font-semibold text-[16px] lg:text-xl'>Easy Returns</h3>
                      <p className=' text-xs md:text-sm text-gray-600'>14 Days easy returns</p>
                  </div>
              </div>

          </div>
     </section>
  )
}

export default Features;