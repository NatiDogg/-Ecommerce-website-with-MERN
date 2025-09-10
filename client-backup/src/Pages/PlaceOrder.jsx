import React,{useContext, useState} from 'react'
import CartTotal from '../Components/CartTotal'
import { shopContext } from '../Context/ShopContextProvider.jsx';
import { useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
const PlaceOrder = () => {
      const [method,setMethod] = useState("COD");
      const {navigate,cartItems,setCartItems,products} = useContext(shopContext);
      
      const [formData,setFormData] = useState({
         fname : "",
         lname : "",
         email : "",
         pnumber : "",
         street : "",
         city : "",
         state : "",
         zipcode : "",
         country : ""

      });
      const onChangeHandler = (e)=>{
          const {name,value} = e.target;
       setFormData(prevData=>(
        {
          ...prevData,
          [name] : value
        }
       ))
      }
      
      const getData = ()=>{
        const allFieldsEmpty = Object.values(formData).some(value => value === '');
          if(allFieldsEmpty){
             return toast.error("please fill all the form fields!!");
          }
         setFormData({
           fname : "",
         lname : "",
         email : "",
         pnumber : "",
         street : "",
         city : "",
         state : "",
         zipcode : "",
         country : ""
         })
      }
      
  return (
    <section className='px-6 py-6 w-full bg-gray-100  '>
         <div className='max-w-[1360px] relative mx-auto px-4 py-4 flex flex-col gap-8'>
               <div className=' w-[75%] lg:w-[50%] flex flex-col gap-1'>
                  <div className='flex gap-1 items-center'>
                       <h2 className='font-semibold text-2xl'>Delivery</h2>
                        <h5 className='underline text-gray-600 text-[19px]'>Information</h5>
                  </div>
                   <p className='text-gray-600 text-xs'>Explore our collection of stylish clothing and footwear made for comfort,quality and everday confidence.</p>
                </div>
                <div className='px-2 py-2 grid grid-cols-1 md:grid-cols-2 gap-6'>
                   <div className='w-full px-2 py-1 '>
                       <form  className='w-full flex flex-col gap-4' action="">
                            <div className='flex flex-row w-full gap-4'>
                              <input required onChange={(e)=>onChangeHandler(e)} value={formData.fname} name='fname' type="text" placeholder='First Name' className='w-full py-2 px-2 rounded-sm text-sm outline-none focus:outline-gray-300' />
                              <input required onChange={(e)=>onChangeHandler(e)} type="text" value={formData.lname} name='lname' placeholder='Last Name' className='w-full py-2 px-2 rounded-sm text-sm outline-none focus:outline-gray-300' />
                            </div>
                            <div className='flex w-full'>
                              <input required onChange={(e)=>onChangeHandler(e)} type="email" value={formData.email} name='email' placeholder='Email' className='w-full py-2 px-2 rounded-sm text-sm outline-none focus:outline-gray-300' />
                            </div>
                            <div className='flex w-full'>
                              <input required onChange={(e)=>onChangeHandler(e)} type="text" value={formData.pnumber} name='pnumber' placeholder='Phone Number' className='w-full py-2 px-2 rounded-sm text-sm outline-none focus:outline-gray-300' />
                            </div>
                            <div className='flex w-full'>
                              <input required onChange={(e)=>onChangeHandler(e)} type="text" value={formData.street} name='street' placeholder='Street' className='w-full py-2 px-2 rounded-sm text-sm outline-none focus:outline-gray-300' />
                            </div>
                            <div className='flex flex-row w-full gap-4'>
                              <input required onChange={(e)=>onChangeHandler(e)} type="text" value={formData.city} name='city' placeholder='City' className='w-full py-2 px-2 rounded-sm text-sm outline-none focus:outline-gray-300' />
                              <input required onChange={(e)=>onChangeHandler(e)} value={formData.state} name='state' type="text" placeholder='State' className='w-full py-2 px-2 rounded-sm text-sm outline-none focus:outline-gray-300' />
                            </div>
                            <div className='flex flex-row w-full gap-4'>
                              <input required onChange={(e)=>onChangeHandler(e)} type="text" value={formData.zipcode} name='zipcode' placeholder='Zip Code' className='w-full py-2 px-2 rounded-sm text-sm outline-none focus:outline-gray-300' />
                              <input required onChange={(e)=>onChangeHandler(e)} type="text" value={formData.country} name='country' placeholder='Country' className='w-full py-2 px-2 rounded-sm text-sm outline-none focus:outline-gray-300 ' />
                            </div>
                       </form>
                   </div>
                   <div className='lg:mx-auto lg:w-[25%] lg:absolute lg:right-28 lg:bottom-6 lg:top-0  bg-white px-4 py-4'>
                      <CartTotal method={method} setMethod={setMethod} />
                       <button type='submit' onClick={getData} className='bg-black py-2 px-4 text-white rounded-md mt-8 w-full'>Proceed to Order</button>
                   </div>
                </div>
               
           
         </div>
        
    </section>
  )
}

export default PlaceOrder;