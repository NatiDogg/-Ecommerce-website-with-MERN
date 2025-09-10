import React,{useState} from 'react'
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'; 
import {BsFillTelephoneFill} from 'react-icons/bs'

const Contact = () => { 
   const [formData,setFormData] = useState({
       name: "",
       email: "",
       message: ""
   });

   const handleInput = (e)=>{
       const {name,value} = e.target;
       setFormData(prevData=>(
        {
          ...prevData,
          [name] : value
        }
       ))
       
   }
   const handleForm = (e)=>{
       e.preventDefault();
       console.log(formData);
       setFormData({
        name: "",
        email: "",
        message: ""
    })
   }

  return (
     <section className='w-full px-6 py-6 bg-slate-100/70'>
          <div className='max-w-[1360px] mx-auto px-4 py-4 grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='flex flex-col gap-4'>
                <div className=' w-[70%] lg:w-[60%] flex flex-col gap-1'>
                    <div className='flex gap-1 items-center'>
                        <h2 className='font-bold text-2xl'>Get</h2>
                         <h5 className='underline text-gray-600 text-[19px]'>In Touch</h5>
                    </div>
                     <p className='text-gray-500 text-sm'>Have questions or need help? send us a message, and we'll get back to you as soon as possible.</p>
                 </div>
                 <div className=''>
                   <form action="" className=' py-2 px-3' onSubmit={handleForm}>
                         <div className='flex flex-col md:flex-row gap-2 md:items-center justify-between'>
                            <input type="text" name="name"  placeholder='Enter your name' className='bg-white border border-slate-300 rounded-md focus:outline-slate-400  px-4 py-1.5 text-black w-full ' value={formData.name} onChange={(e)=> handleInput(e)} />
                             <input type="email" name='email' placeholder='Enter your email' className='bg-white border border-slate-300 rounded-md focus:outline-slate-400  px-4 py-1.5 text-black w-full ' onChange={(e)=> handleInput(e)} value={formData.email} />
                         </div>
                         <div className='mt-6'>
                            <textarea name="message" placeholder='write your message here..' id="textArea" cols={66} rows={4} className='bg-white border border-slate-400/70 rounded-md focus:outline-slate-400 px-4 py-2 text-black w-full ' value={formData.message} onChange={(e)=> handleInput(e)} ></textarea>
                         </div>
                         <button type='submit' className='mt-4 bg-black rounded-md px-4 py-3 md:px-6 md:py-3 text-white font-light  hover:bg-slate-950'>Send Message</button>
                   </form>
                 </div>
              </div>
              <div className=''>
                  <div className=' w-[70%] lg:w-[60%] flex flex-col gap-1'>
                    <div className='flex gap-1 items-center'>
                        <h2 className='font-bold text-2xl'>Contact</h2>
                         <h5 className='underline text-gray-600 text-[19px]'>Details</h5>
                    </div>
                     <p className='text-gray-500 text-sm'>We are always here to assit you! Feel free to reach out to us through any of the following methods.</p>
                 </div>
                 <div className='flex flex-col gap-4 px-4 justify-start mt-6'>
                     <div className='flex flex-col justify-start gap-1'>
                          <h4 className='font-semibold '>Location:</h4>
                           <address className='px-2 text-sm text-gray-600 flex flex-row gap-1 items-center'> <FaMapMarkerAlt />123 shegole street,Clothing City,Fc 12345</address>   
                     </div>
                     <div className='flex flex-col justify-start gap-1'>
                          <h4 className='font-semibold '>Email:</h4>
                          <p className='px-2 text-sm text-gray-600 flex flex-row gap-2 items-center'> <FaEnvelope /> Natnael.wondmu@gmail.com</p>  
                     </div>
                      <div className='flex flex-col justify-start gap-1'>
                          <h4 className='font-semibold '>Phone:</h4>
                          <p className='px-2 text-sm text-gray-600 flex flex-row gap-2 items-center'> <BsFillTelephoneFill />+251953902958</p>  
                     </div>


                    
                 </div>
              </div>
              
             
          </div>
       
     </section>
  )
}

export default Contact;