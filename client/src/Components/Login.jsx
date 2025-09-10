import React,{useContext,useState} from 'react'
import { shopContext } from '../Context/ShopContextProvider';
import { MdClose } from 'react-icons/md';
const Login = () => {
     const {setShowUserLogin,navigate} = useContext(shopContext);
     const [state, setState] = useState("login");
      const [formData, setFormData] = useState({
          name : "",
          email : "",
          password : ""
      });
      const handleLoginPage = (page)=>{
          setState(page);
      }
      
            
       const handleInput = (e)=>{
       const {name,value} = e.target;
       setFormData(prevData=>(
        {
          ...prevData,
          [name] : value
        }
       ))
       
   }
     const onSumbitHandler =  (e)=>{
           e.preventDefault();

           try{
            console.log(formData);
              setFormData({
                   name : "",
                   email : "",
                   password : ""
              })
              setShowUserLogin(false);
           }
           catch(error){
              console.log(error.message());
           }
     }
  return (
      <section className='fixed inset-0 z-40 flex items-center justify-center text-sm text-gray-600 bg-black/40 '>
          <form action="" onSubmit={onSumbitHandler} className='bg-white relative rounded-lg shadow-md px-4 py-6 w-[80%] md:w-[40%] lg:w-[30%]  flex flex-col justify-start items-center gap-6'>
                <h1 className='text-3xl text-gray-600 font-bold '>User <span className='text-gray-900'>{state === "login" ? "Login" : "Register"}</span></h1>
                 {state === "register" ?
                     <div className='flex flex-col gap-4'>
                        <div className='flex flex-col gap-1 w-full'>
                           <label htmlFor="Name" className='text-gray-600'>Name:</label>
                           <input required onChange={(e)=>handleInput(e)} value={formData.name} name='name' type="text" id='Name' placeholder='your name..' className='px-4   py-2 w-full text-black border border-gray-400 rounded-sm' />
                        </div>
                       <div className='flex flex-col gap-1 w-full'>
                        <label htmlFor="Email" className='text-gray-600'>Email:</label>
                        <input required onChange={(e)=>handleInput(e)} value={formData.email} name='email' type="email" id='Email' placeholder='your email..' className='px-4   py-2 w-full text-black border border-gray-400 rounded-sm' />
                      </div>
                      <div className='flex flex-col gap-1 w-full'>
                        <label htmlFor="Password" className='text-gray-600'>Password:</label>
                        <input required  onChange={(e)=>handleInput(e)} value={formData.password} name='password' type="password" id='Password' placeholder='your email..' className='px-4 py-2 w-full text-black border border-gray-400 rounded-sm' />
                      </div>
                       <div className='flex flex-row gap-1 items-center'>
                         <p className='text-gray-700 text-sm'>Already have an Account?</p>
                          <p onClick={()=>handleLoginPage("login")} className='text-gray-700 text-sm cursor-pointer hover:underline hover:text-gray-800'>Click here</p>
                     </div>
                      <button type='submit' className='w-full bg-gray-700 hover:bg-gray-900 text-center px-2 py-2 text-white'>Create Account</button>

                     </div>
                     :
                       <div className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-1 w-full'>
                       <label htmlFor="Email" className='text-gray-600'>Email:</label>
                       <input required  onChange={(e)=>handleInput(e)} value={formData.email} name='email' type="email" id='Email' placeholder='your email..' className='px-4 py-2 w-full text-black border border-gray-400 rounded-sm' />
                    </div>
                     <div className='flex flex-col gap-1 w-full'>
                       <label htmlFor="Password" className='text-gray-600'>Password:</label>
                       <input required  onChange={(e)=>handleInput(e)} value={formData.password} name='password' type="password" id='Password' placeholder='your email..' className='px-4 py-2 w-full text-black border border-gray-400 rounded-sm' />
                    </div>
                     <div className='flex flex-row gap-1 items-center'>
                       <p className='text-gray-700 text-sm'>Create an Account?</p>
                        <p onClick={()=>handleLoginPage("register")} className='text-gray-700 text-sm cursor-pointer hover:underline hover:text-gray-800'>Click here</p>
                     </div>
                      <button type='submit' className='w-full bg-gray-700 hover:bg-gray-900 text-center px-2 py-2 text-white'>Login</button>
                    

                 </div>
                 }
                 <button type='button' onClick={()=>setShowUserLogin(false)} className='text-black absolute top-0 right-0 px-4 py-2 '><MdClose size={28} /></button>
          </form>
      </section>
  ) 
}

export default Login;