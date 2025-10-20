import React, { useContext } from 'react'
import { shopContext } from '../Context/ShopContextProvider';
import { useLocation } from 'react-router-dom';

const CartTotal = ({method,setMethod}) => {
    const {currency,getCartAmount,getCartCount,deliveryCharges}  = useContext(shopContext);
    const location = useLocation();
    const isOrderPage = location.pathname.includes("place-order");
  return (
     <div>
        <h3 className='font-semibold text-xl '>Order Summary <span className='text-sm text-gray-700 '>({getCartCount()} Items)</span></h3>
        <hr className='border-gray-300 my-5' />

         {/*payment method*/}
          {isOrderPage && (
             <div className='mb-6 '>
                  <div className='my-6 '>
                     <h4 className='text-semibold text-xl mb-5'>Payment <span>Method</span></h4>
                      <div className='flex gap-3'>
                          <div onClick={()=> setMethod('COD')} className={`${method === "COD" ? 'bg-gray-900 text-white ': 'bg-gray-300 text-black'} py-2 px-4 rounded-md text-xs cursor-pointer `} >
                             Cash on Delivery
                          </div>
                          <div onClick={()=> setMethod('Stripe')} className={`${method === "Stripe" ? 'bg-gray-900 text-white ': 'bg-gray-300 text-black'} py-2 px-4 rounded-md  text-xs cursor-pointer `} >
                             Stripe
                          </div>
                      </div>
                  </div>
                  <hr className='border-gray-300 ' />
             </div>
          )}
          <div className='mt-4 space-y-2'>
              <div className='flex flex-row justify-between'>
                 <h5 className='text-gray-900 text-[17px]  '>Price:</h5>
                 <p className='font-bold text-gray-500'>{currency}{getCartAmount()}</p>
              </div>
              <div className='flex flex-row justify-between'>
                 <h5 className='text-gray-900 text-[17px]  '>Shipping Fee:</h5>
                 <p className='font-bold text-gray-500'>{getCartAmount() === 0 ? '$0.00' : `${currency}${deliveryCharges}.00`}</p>
              </div>
              <div className='flex flex-row justify-between'>
                 <h5 className='text-gray-900 text-[17px]  '>Tax (2%):</h5>
                 <p className='font-bold text-gray-500'>{currency}{(getCartAmount() * 2)/100}</p>
              </div>
              <div className='flex justify-between text-lg font-medium mt-3'>
                 <h4 className='text-gray-900 text-[16px]'>Total Amount:</h4>
                 <p className='font-bold text-gray-600'>{currency}{getCartAmount() === 0 ?"0.00" : getCartAmount() + deliveryCharges + (getCartAmount() * 2)/100 }</p>

              </div>
          </div>
     </div>
  )
}

export default CartTotal;