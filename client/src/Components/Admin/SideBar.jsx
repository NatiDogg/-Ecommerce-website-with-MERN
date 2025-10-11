import React,{useContext} from 'react'
import { shopContext } from '../../Context/ShopContextProvider'
import { FaSquarePlus } from 'react-icons/fa6';
import { FaListAlt } from 'react-icons/fa';
import { MdFactCheck } from 'react-icons/md';
import { Link, NavLink, Outlet } from 'react-router-dom';
import {  BiLogOut } from 'react-icons/bi';

const SideBar = () => {

   const {navigate,setIsAdmin} = useContext(shopContext);
    const navItems = [
       {
        path: '/admin',
        label: "Add Item",
        icon : <FaSquarePlus />

       },
       {
        path: '/admin/list',
        label: "List",
        icon : <FaListAlt />

       },
       {
        path: '/admin/orders',
        label: "Orders",
        icon : <MdFactCheck />

       }



    ]
  return (
      <div className=' max-w-[1440px] flex flex-col sm:flex-row'>
         {/*sidebar*/}
         <div className='max-sm:flex items-center  justify-center bg-gray-200 pb-3  sm:min-w-[20%] sm:min-h-[100vh] rounded-xl'>
            <div className='flex  flex-col gap-y-6 max-sm:items-center text-center sm:flex-col pt-4 sm:pt-14'>
               {/*logo*/}
                <Link to={'/admin'} className='font-paci uppercase text-xl font-semibold' >
                      Shoppr <span className='text-slate-700'>.</span>
                </Link>
                 <div className='flex sm:flex-col sm:gap-x-5 gap-y-8 sm:pt-10 '>
                   {navItems.map((link,index)=>{
                       return  <NavLink  to={link.path} key={index} end={link.path === "/admin"} className={({isActive})=> isActive ? "flex items-center justify-start gap-x-2 p-5 lg:pl-12 text-[15px] font-[500] cursor-pointer h-10 text-slate-600 bg-slate-300 max-sm:border-b-4 sm:border-r-4 border-black ": "flex items-center justify-start gap-x-2 lg:pl-12 p-5 text-[15px] font-[500] cursor-pointer h-10 rounded-xl "}>
                        {link.icon} 
                         <div>
                            {link.label}
                         </div>
                        </NavLink>
                   })}

                   <div className='max-sm:ml-5 sm:mt-40 text-center px-9 '>
                      <button className='flex gap-1 items-center text-red-500 '>
                          <BiLogOut className='text-md sm:text-lg ' />
                            <div onClick={()=>{navigate('/'); setIsAdmin(false) }} className='hidden sm:flex '>
                               Logout
                            </div>
                      </button>
                   </div>
                 </div>
            </div>
         </div>
          <Outlet />
      </div> 
  )
}

export default SideBar;