import React, { createContext,useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom';

import toast from 'react-hot-toast';
import axios from 'axios'

axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;
export const shopContext = createContext();
const ShopContextProvider = ({children}) => {

    const navigate = useNavigate();
    const [user,setUser] = useState(null);
    const [products,setProducts] = useState([]);
     const [showUserLogin, setShowUserLogin] = useState(false);
     const [cartItems, setCartItems] = useState({});     
      const [isAdmin, setIsAdmin] = useState(false);
    const currency = import.meta.env.VITE_CURRENCY;
    const deliveryCharges = 10 //dollar
     // Fetch all products
    const fetchProducts = async ()=>{
           try {
               const {data} = await axios.get('/api/product/list');
               if(data.success){
                    setProducts(data.products)
               }
               else{
                    toast.error(data.message)
               }
           } catch (error) {
                toast.error(error.message)
           }
    }

    // check whether the user is logged in or not

    const fetchUser = async()=>{
        try {
           const {data} = await axios.get('/api/user/is-auth')
           if(data.success){
               setUser(data.user);
               setCartItems(data.user.cartData);
               
           }
           else{
               setUser(null)
               setCartItems({})
           }
        } catch (error) {
            setUser(null);
            setCartItems({});
        }
    }
     
        const handleUserLogOut = async ()=>{
           try {
               const {data} = await axios.post('/api/user/logout');
               if(data.success){
                    toast.success(data.message)
                    setUser(null);
                    setCartItems({});
                    navigate('/');

               }
               else{
                    toast.error(data.message);
               }
           } catch (error) {
               toast.error(error.message);
           }
        }

     //fetch admin

     const fetchAdmin = async ()=>{
          try {
             const {data}   = await axios.get('/api/admin/is-auth')
             setIsAdmin(data.success)
          } catch (error) {
                setIsAdmin(false)
          }
     }





     //add product to the cart
      const addToCart = async (itemId,size)=>{
           if(!size){
             return  toast.error("please select size first!!")
           }
           let cartData = structuredClone(cartItems)
           cartData[itemId] = cartData[itemId] || {}
           cartData[itemId][size] = (cartData[itemId][size] || 0) + 1
           setCartItems(cartData);
            if(user){
               try{
                    const {data} = await axios.post('/api/cart/add',{itemId,size})
                    if(data.success){
                         toast.success(data.message);
                    }
                    else{
                         toast.error(data.message)
                    }
               }
               catch(error){
                 toast.error(error.message);
               }
            }
            else{
               toast.error("please login to order the product");
            }
      }

      //count of the cart items

      const getCartCount  = ()=>{
         let count = 0
         for(const itemId in cartItems){
            for(const size in cartItems[itemId]){
                 count+= cartItems[itemId][size]
            }
         }
         return count;
      }
      const updateQuantity = async (itemId,size,quantity)=>{
           let cartData = structuredClone(cartItems);
           cartData[itemId][size] = quantity;
           setCartItems(cartData)
           if(user){
               try {
                    const {data} = await axios.post('/api/cart/update',{itemId,size,quantity})
                    if(data.success){
                         toast.success(data.message);
                    }
                    else{
                         toast.error(data.message)
                    }
               } catch (error) {
                     toast.error(error.message);
               }
           }
      }
      const getCartAmount = ()=>{
           let total = 0;
           for(const itemId in cartItems){
               const product = products.find((product)=> product._id === itemId)
               if(!product) continue;
               for(const size in cartItems[itemId]){
                  total += product.offerPrice * cartItems[itemId][size]
               }
           }
           return total;
      }

    useEffect(()=>{
        fetchProducts();
        fetchAdmin()
        fetchUser();
        
    },[])
     const value = {
          fetchProducts,
         navigate,
         user,
         setUser,
         setProducts,
         products,
         currency,
         showUserLogin,
         setShowUserLogin,
         cartItems,
         setCartItems,
         addToCart,
         getCartCount,
         getCartAmount,
         updateQuantity,
         deliveryCharges,
         isAdmin,
         setIsAdmin,
         axios,
         fetchUser,
         handleUserLogOut,
     }
  return (
       <shopContext.Provider value={value}>
              {children}
       </shopContext.Provider>
  )
}

export default ShopContextProvider;