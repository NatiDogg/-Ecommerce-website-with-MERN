import React, { useContext,useEffect,useState } from 'react'
import { shopContext } from '../Context/ShopContextProvider.jsx';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import {IoCloseCircleOutline} from 'react-icons/io5'
import CartTotal from '../Components/CartTotal.jsx';
const Cart = () => {
    const {navigate,products,currency,cartItems,updateQuantity} = useContext(shopContext);
    const [cartData, setCartData] = useState([]);

    useEffect(()=>{
         if(products.length > 0){
            const tempData = []
            for(const itemId in cartItems){
                   for(const size in cartItems[itemId]){
                       if(cartItems[itemId][size] > 0){
                          tempData.push({
                            _id: itemId,
                            size: size
                           })
                       }
                   }
            }
            setCartData(tempData);

         }

    },[products,cartItems]);

    const increment = (id,size)=>{
        const currentQuantity = cartItems[id][size]
        updateQuantity(id,size,currentQuantity + 1)
    }
    const decrement = (id,size)=>{
         const currentQuantity = cartItems[id][size]
          if(currentQuantity > 1){
           updateQuantity(id,size,currentQuantity - 1)
         }
        
    }
  return (
    <section className='px-6 py-6 w-full bg-gray-100'>
       <div className='max-w-[1360px] mx-auto px-4 py-4 flex flex-col gap-8 '>
           
           <div className=' w-[70%] lg:w-[33%] flex flex-col gap-1'>
                  <div className='flex gap-1 items-center'>
                       <h2 className='font-semibold text-2xl'>Cart</h2>
                        <h5 className='underline text-gray-600 text-[19px]'>Overview</h5>
                  </div>
                     <p className='text-gray-600 text-xs'>Explore our collection of stylish clothing and footwear made for comfort,quality and everday confidence.</p>
            </div>
              {products.length > 0 && cartData.length > 0 ? (
                 <div className=' grid grid-cols-1 md:grid-cols-2 gap-6'>
                   <div className='bg-white flex flex-col gap-4 px-4 py-2 mt-1 md:mt-8 lg:mt-10'>
                           <div className='flex flex-row justify-between items-center px-2'>
                               <h4 className='text-black font-semibold text-sm'>Product Details</h4>
                                <div className='flex flex-row gap-6 '>
                                   <p className='text-black font-semibold text-sm'>Subtotal</p>
                                   <p className='text-black font-semibold text-sm'>Action</p>
                                </div>
                               
                           </div>
                           <div>
                            {cartData.map((item,i)=>{
                               const product = products.find((product)=>product._id === item._id);
                               const quantity = cartItems[item._id][item.size]
                               return (
                                  <div key={i} className='grid grid-cols-[6fr_1fr_1fr]  items-center bg-white p-2'>
                                      <div className='flex items-center md:gap-6 gap-3'>
                                         <div className='flex bg-white'><img src={product.image[0]} alt="productImg" className='w-20 ' /></div>
                                         <div className=''>
                                           <h5 className='hidden sm:block text-sm line-clamp-1'>{product.name}</h5>
                                           <div className='font-semibold mr-10 sm:mr-0 flex flex-row items-start gap-2 mb-1 text-sm '>
                                             size: <p className='text-gray-700'>{item.size}</p>
                                           </div>
                                           <div className='flex items-center justify-between mr-12 md:mr-0'>
                                                <div className='flex items-center ring-1 ring-slate-900/5 rounded-full overflow-hidden bg-white'>
                                                   <button onClick={()=>decrement(item._id,item.size)} className='p-1.5 bg-white text-gray-600 rounded-full shadow-md'><FaMinus className='text-xs' /></button>
                                                    <p className='px-2 text-gray-800'>{quantity}</p>
                                                    <button onClick={()=>increment(item._id,item.size)} className='p-1.5 bg-white text-gray-600 rounded-full shadow-md'><FaPlus className='text-xs' /></button>
                                                </div>
                                           </div>
                                         </div>
                                      </div>
                                      <p className='text-center mr-6 sm:mr-0 text-gray-700'>{currency}{product.offerPrice * quantity}</p>
                                      <button className='cursor-pointer mx-auto' onClick={()=>updateQuantity(item._id,item.size,0)}>
                                         <IoCloseCircleOutline className= "text-xl" />
                                      </button>
                                  </div>

                               );
                            })}
                           </div>
                    </div>
                  <div className='md:mx-auto md:w-[80%] bg-white px-4 py-2  mb-0  md:mb-26 '>
                       {/*Right Side*/}
                        <div className='flex-1 flex-col'>
                            <div className='max-w-[360px] w-full bg-white p-5 py-6 max-md:mt-8'>
                               <CartTotal />
                                <button onClick={()=> navigate('/place-order')} className='bg-black py-2 px-4 text-white rounded-md mt-8 w-full'>Proceed to Delivery</button>
                                
                            </div>
                        </div>
                   </div>

                </div>
              ):
                <div className='px-5'>
                   <p className='text-xl md:text-2xl  text-red-500 font-bold'>oops! nothing to display please go to the collection page add some item to the cart!!</p>
                </div>
               }
            

       </div>

    </section>
  )
}

export default Cart;