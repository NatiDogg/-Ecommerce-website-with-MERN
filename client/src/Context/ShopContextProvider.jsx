import React, { createContext,useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { dummyProducts } from '../Data/data.js';
import toast from 'react-hot-toast';
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
           setProducts(dummyProducts);
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
           toast.success("item added sucessfully");
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
         setIsAdmin
     }
  return (
       <shopContext.Provider value={value}>
              {children}
       </shopContext.Provider>
  )
}

export default ShopContextProvider;