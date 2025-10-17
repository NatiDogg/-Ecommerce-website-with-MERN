import React, { useContext,useState,useEffect } from 'react'
import { shopContext } from '../../Context/ShopContextProvider';
import toast from 'react-hot-toast';


const Orders = () => {
  const {currency,axios} = useContext(shopContext);
  const [orders, setOrders] = useState([]);
  const fetchAllOrders = async () =>{
        try {
         const {data} = await axios.post('/api/order/list');
         if(data.success){
             setOrders(data.orders)
         }
         else{
            toast.error(data.message)
         }
        } catch (error) {
           toast.error(error.message)
        }
  }

  useEffect(()=>{
     fetchAllOrders ();
  },[]);


  const statusHandler = async(e,orderId)=>{
         try {
            const {data} = await axios.post('/api/order/status',{orderId, status: e.target.value});
            if(data.success){
               await fetchAllOrders();
               toast.success(data.message);
               
            }
         } catch (error) {
            console.log(error)
         }
  }
  return (
       <section className='px-0 py-2 md:px-6 md:py-6 w-full bg-gray-100'>
            <div className='max-w-[1360px] mx-auto px-4 py-4 flex flex-col gap-8 '>
                    {orders.map((order,index)=>{
                       return  <div key={order._id} className='flex bg-white px-2 py-3 w-full flex-col gap-1'>
                              {order.items.map((item,index)=>{
                                  return <div className='px-4 py-2 flex flex-row gap-2' key={index}>
                                       <div>
                                           <img src={item.product.image[0]} alt="ordered product image" className='max-h-20 max-w-20 bg-gray-200' />
                                       </div>
                                        <div className='flex flex-col gap-4 justify-start'>
                                           <h4 className='text-sm font-semibold  text-black'>{item.product.name}</h4>
                                           <div className='flex flex-row gap-4 items-center'>
                                                <h5 className='capitalize text-sm font-semibold'>price: <span className='text-gray-500'>{currency}{item.product.offerPrice}</span></h5>
                                                <h5 className='capitalize text-sm font-semibold'>Quantity: <span className='text-gray-500'>{item.quantity}</span></h5>
                                                <h5 className='capitalize text-sm font-semibold'>size: <span className='text-gray-500'>{item.size}</span></h5>
                                           </div>
                                        </div>
                                   </div>
                              })}
                               <hr className='h-0.5 bg-gray-300 ' />
                               <div className='flex flex-col justify-center items-center md:flex-row md:justify-between gap-8 md:items-start  px-4'>
                                  <div className='flex flex-col gap-2 '>
                                      <h6 className='capitalize text-sm text-gray-900 font-semibold'>orderId: <span className='text-gray-500'>{order._id}</span></h6>
                                      <div className='flex flex-col lg:flex-row gap-2 lg:gap-4'>
                                         <h6 className='capitalize text-sm text-gray-900 font-semibold'>customer: <span className='text-gray-500'>{order.address.firstName} {order.address.lastName}</span></h6>
                                          <h6 className='capitalize text-sm text-gray-900 font-semibold'>phone: <span className='text-gray-500'>{order.address.pnumber}</span></h6>
                                      </div>
                                      <h6 className='capitalize text-sm flex flex-row gap-0.5 text-gray-900 font-semibold'>address: <address className='text-gray-500 lowercase'>{order.address.street}, {order.address.state}, {order.address.zipcode} `</address></h6>
                                      <div className='flex flex-col lg:flex-row gap-2 lg:gap-4'>
                                         <h6 className='capitalize text-sm text-gray-900 font-semibold'>Payment status: <span className='text-gray-500'>{order.isPaid ? "Done" : "Pending"}</span></h6>
                                          <h6 className='capitalize text-sm text-gray-900 font-semibold'>method: <span className='text-gray-500'>{order.paymentMethod}</span></h6>
                                      </div>
                                      <div className='flex flex-col lg:flex-row gap-2 lg:gap-4'>
                                         <h6 className='capitalize text-sm text-gray-900 font-semibold'>Date: <span className='text-gray-500'>{new Date(order.createdAt).toDateString()}</span></h6>
                                          <h6 className='capitalize text-sm text-gray-900 font-semibold'>amount: <span className='text-gray-500'>{currency}{Number(order.amount).toFixed(2)}</span></h6>
                                      </div>
                                  </div>
                                  <div>
                                     <h6 className='capitalize flex flex-row items-center text-sm text-gray-900 font-semibold'>Status:
                                         <span className='text-gray-800 ml-2'>
                                            <select onChange={(e)=>statusHandler(e,order._id)} className='bg-gray-100 ring-1 ring-slate-900/50 text-xs font-semibold focus:outline-none focus:border focus:border-gray-200 text-center px-1 py-1' name="" id="" value={order.status} >
                                             <option  value="Order Placed">Order Placed</option>
                                             <option   value="Packing">Packing</option>
                                             <option  value="Shipped">Shipped</option>
                                             <option  value="Out for delivery">Out for delivery</option>
                                             <option  value="Delivered">Delivered</option>
                                            </select>
                                         </span>

                                        </h6>
                                  </div>

                               </div>
                       </div>

                    })}
            </div>
       </section>
  )
}

export default Orders;



