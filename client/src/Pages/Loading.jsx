import React, {useContext} from 'react'
import { shopContext } from "../Context/ShopContextProvider.jsx";
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Loading = ()=>{
     const {navigate} = useContext(shopContext);
     let {search} = useLocation();  // search get a url after a question mark eg: ?next=cart
     const query = new URLSearchParams(search)
     const nextUrl = query.get('next');

     useEffect(()=>{
        if(nextUrl){
            setTimeout(()=>{
                     navigate(`/${nextUrl}`)
            },5000)
        }
     },[nextUrl]);
   return <div className="flex flex-row items-center justify-center h-screen">
           <div className="animate-spin rounded-full h-24 w-24 border-4 border-gray-300 border-t-gray-400" />

   </div>
}

export default Loading;