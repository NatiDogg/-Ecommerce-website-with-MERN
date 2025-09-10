import React, { useContext, useEffect,useState } from 'react'
import { shopContext } from '../Context/ShopContextProvider';
import { dummyOrders } from '../Data/data';

const MyOrders = () => {
   const {currency,user} = useContext(shopContext);
   const [orders, setOrders] = useState([]);

   const loadOrderData = async ()=>{
       setOrders(dummyOrders);
   }
   

   useEffect(()=>{
       loadOrderData();
   },[]);
   useEffect(()=>{
        console.log(orders);
   },[orders])
   
    
  return (
    <section className='px-6 py-6 w-full bg-gray-100 '>
       <div className='max-w-[1360px] relative mx-auto px-4 py-4 flex flex-col gap-8'>
          <div className=' w-[75%] lg:w-[30%] flex flex-col gap-1'>
                  <div className='flex gap-1 items-center'>
                       <h2 className='font-semibold text-2xl'>My Orders</h2>
                        <h5 className='underline text-gray-600 text-[19px]'>List</h5>
                  </div>
                   <p className='text-gray-600 text-xs'>Explore our collection of stylish clothing and footwear made for comfort,quality and everday confidence.</p>
           </div>
           <div className='flex flex-col gap-6 '>
              {orders.length > 0 && orders.map((order,index)=>{
                 return  <div key={index} className='bg-white py-2'>
                           <div className='flex flex-col gap-2 px-1'>
                                {order.items.map((item,index)=>{
                                  return  <div key={index} className='flex flex-row items-center gap-6 md:gap-8 mb-2'>
                                         <div className='bg-gray-50'>
                                            <img src={item.product.image[0]} alt="" height={90} width={90} className='object-cover' />
                                         </div>
                                         <div className='flex flex-col gap-2'>
                                            <p className='text-black text-xs sm:text-sm line-clamp-1 font-bold'>{item.product.name}</p>
                                            <div className='flex flex-row gap-4'>
                                               <p className='text-gray-700 text-xs md:text-sm'><span className='font-semibold'>Price:</span> {currency}{item.product.offerPrice}</p>
                                               <p className='text-gray-700 text-xs md:text-sm'> <span className='font-semibold'>Quantity:</span> {item.quantity}</p>
                                               <p className='text-gray-700 text-xs md:text-sm'><span className='font-semibold'>Size:</span> {item.size}</p>

                                            </div>
                                         </div>
                                  </div>


                                 })}

                           </div>
                           <hr className='w-full h-0.5 bg-gray-200 mb-2' />
                           <div className='flex flex-col md:flex-row md:justify-between gap-4 items-center px-1'>
                              <div className='flex flex-col gap-2'>
                                 <p className='text-gray-800 font-semibold text-xs sm:text-sm'>OrderId: <span className='text-xs text-gray-500'>{order._id}</span></p>
                                 <div className='flex flex-row gap-4'>
                                    <p className='text-gray-800 font-semibold text-xs sm:text-sm'>Payment Status: <span className='text-xs text-gray-500'>{order.isPaid ? "Done" : "Pending"}</span></p>
                                     <p className='text-gray-800 font-semibold text-xs sm:text-sm'>Method: <span className='text-xs text-gray-500'>{order.paymentMethod}</span></p>
                                 </div>
                                 <div className='flex flex-row gap-4'>
                                    <p className='text-gray-800 font-semibold text-xs sm:text-sm'>Date: <span className='text-xs text-gray-500'>{new Date(order.createdAt).toDateString()}</span></p>
                                     <p className='text-gray-800 font-semibold text-xs sm:text-sm'>Amount: <span className='text-xs text-gray-500'>{currency}{order.amount}</span></p>
                                 </div>
                                 
                              </div>
                              <div className='flex flex-row gap-2 items-center'>
                                 <p className='text-sm text-gray-800 font-semibold '>Status:</p>
                                   <div className='flex flex-row gap-1 items-center'>
                                      <span className='min-w-2 h-2 rounded-full bg-green-500'></span>
                                      <p className='text-gray-400 text-sm'>{order.status}</p>
                                   </div>
                                  
                                   <button onClick={()=>{}} className='bg-gray-500 text-white text-xs px-4 py-1'>Track Order</button>

                              </div>

                           </div>

                         
                 </div>
              })}
           </div>
       </div>

    </section>
  )
}

export default MyOrders;