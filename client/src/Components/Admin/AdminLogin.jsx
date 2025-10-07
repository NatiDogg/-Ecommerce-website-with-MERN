import React,{useContext, useEffect,useState} from 'react'
import { shopContext } from '../../Context/ShopContextProvider';

const AdminLogin = () => {
     const {isAdmin,setIsAdmin,navigate,axios} = useContext(shopContext);
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");

     const onSubmitHandler = async (e)=>{
        e.preventDefault();
        setIsAdmin(true);

        try{
          
        }
        catch(error){

        }


     }

     useEffect(()=>{
          if(isAdmin){
            navigate("/admin");
          }
     },[isAdmin]);
  return !isAdmin && (
     <section className=' bg-slate-100/50 px-4 py-6 w-full h-screen flex flex-col justify-center items-center '>
              <div className='bg-white px-8 py-6 shadow-2xl rounded-md '>
                  <h1 className='text-2xl md:text-3xl text-gray-500 font-bold text-center'>Admin <span className='text-gray-800'>Login</span></h1>
                  <form onSubmit={onSubmitHandler} action="" className='flex flex-col gap-3 mt-4'>
                         <div className='flex flex-col gap-1'>
                            <label htmlFor="Email" className='text-gray-600'>Email:</label>
                            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" id="Email" className='px-4 py-2 w-full text-black border border-gray-400 rounded-sm' />
                         </div>
                         <div className='flex flex-col gap-1'>
                            <label htmlFor="Password" className='text-gray-600'>Password:</label>
                            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" id="Password" className='px-4 py-2 w-full text-black border border-gray-400 rounded-sm' />
                         </div>

                         <button className=' mt-2 px-4 py-2 bg-gray-800 text-white hover:bg-gray-900'>Login</button>
                  </form>
              </div>
     </section>  
  )
}

export default AdminLogin;