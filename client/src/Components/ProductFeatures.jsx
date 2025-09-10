import React from 'react'
import {FaTruckFast} from 'react-icons/fa6';
import { TbArrowBackUp } from 'react-icons/tb';
import {RiSecurePaymentLine} from 'react-icons/ri'

const ProductFeatures = () => {
  return (
       <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 px-3 py-2'>
                 <div className='flex gap-4 items-center'>
                    <div className='text-3xl'> <TbArrowBackUp   className='text-yellow-500 ' /></div>
                     <div className='flex flex-col gap-1'>
                        <h2 className='capitalize font-semibold text-black'>Easy return</h2>
                        <p className='text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores laudantium blanditiis quidem, hic sit quas quo amet similique labore eius eligendi minima.</p>
                     </div>
                    
                 </div>
                  <div className='flex gap-4 items-center'>
                    <div className='text-3xl'> <FaTruckFast   className='text-red-500 ' /></div>
                     <div className='flex flex-col gap-1'>
                        <h2 className='capitalize font-semibold text-black'>Fast Delivery</h2>
                        <p className='text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores laudantium blanditiis quidem, hic sit quas quo amet similique labore eius eligendi minima.</p>
                     </div>
                    
                 </div>
                 <div className='flex gap-4 items-center'>
                    <div className='text-3xl'><RiSecurePaymentLine className='text-blue-500 ' /></div>
                     <div className='flex flex-col gap-1'>
                        <h2 className='capitalize font-semibold text-black'>Secure Payment</h2>
                        <p className='text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores laudantium blanditiis quidem, hic sit quas quo amet similique labore eius eligendi minima.</p>
                     </div>
                    
                 </div>
       </div>
  )
}

export default ProductFeatures;