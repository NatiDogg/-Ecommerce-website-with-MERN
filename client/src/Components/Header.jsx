import React,{useState,useContext, useEffect} from 'react'
import {Link, useLocation} from 'react-router-dom'
import NavBar from '../Components/NavBar.jsx'
import {FaSearch,FaShoppingBasket} from 'react-icons/fa'
import {FaBars,FaBarsStaggered} from 'react-icons/fa6'
import userImg from '../assets/user.png';
import {RiUserLine} from 'react-icons/ri'
import {shopContext} from '../Context/ShopContextProvider.jsx';


const Header = () => {
      const {user,setUser,navigate,setProducts,setShowUserLogin,getCartCount,handleUserLogOut,products,fetchProducts} = useContext(shopContext);
    const [menuOpened,setMenuOpened] = useState(false);
    const [showSearch,setShowSearch] = useState(false);
    const location = useLocation();
    const isHomepage = location.pathname === "/" ? true : false;
    const isOnCollectionPage = location.pathname.endsWith('/collection');
     const onCollectionPage = location.pathname  === "/collection";
     const [value, setValue] = useState("");
     const items = getCartCount();
     
      
     useEffect(()=>{
        if (location.pathname !== "/collection") {
            fetchProducts()
        }
     },[location.pathname])

     
 
    const toggleMenu = ()=>{
        setMenuOpened(prevMenu=> !prevMenu);
    }
    const handleInput = (e) => {
      const inputValue = e.target.value;
      const lowerCaseInput = inputValue.toLowerCase();
      if ( !onCollectionPage && lowerCaseInput !== "") {
        navigate("/collection");
      }
       const newFilteredProducts = products.filter(product => {
        const lowerCaseProductName = product.name.toLowerCase();
        return lowerCaseProductName.includes(lowerCaseInput);
      });

      setProducts(newFilteredProducts);
      setValue(inputValue);
       
       
    };
    const handleProduct = ()=>{
          setValue("");
          
          
    }

    
     
  return (
      <header className={`w-full px-4 py-2 ${!isHomepage ? "bg-gradient-to-l from-gray-50 via-white to-gray-50" : " bg-gray-200 "}` }>
            <section className='max-w-[1360px] py-2 px-3 md:py-3 md:px-6 flex justify-between items-center'>
                 <div className=' flex justify-start'>
                   <Link to={'/'} className='font-paci uppercase text-2xl font-semibold'>
                     Shoppr <span className='text-slate-700'>.</span>
                  </Link>
                    
                 </div>
                  <div>
                      {/*navBar*/}
                      <NavBar   setMenuOpened= {setMenuOpened} containerStyles={`${menuOpened ? "flex flex-col items-start gap-y-8 fixed top-16 right-6 p-5 bg-white shadow-lg w-60 rounded-lg ring-1 ring-slate-900/5 z-50  ": "hidden lg:flex gap-6  p-1"}`} />
                  </div>
                  <div className='flex gap-1 items-center '>
                         <div className={`  items-center justify-between px-1 hidden md:flex ${showSearch && `${isHomepage ? 'bg-white rounded-full' : "bg-slate-200 rounded-full"} w-[230px]  py-1.5 rounded-full transition-all duration-200`}  `}>
                            <div>
                               <input onChange={(e)=>handleInput(e)} value={value} type="text" placeholder='type here..' className={`${showSearch ? 'w-[190px] text-sm px-6 bg-transparent outline-none  ': "hidden"}`} />
                            </div>
                             <div onClick={()=>setShowSearch(prevShow=> !prevShow)} className='cursor-pointer'>
                                 <FaSearch data-testid="search-icon" onClick={handleProduct} size={27} className='  text-white bg-slate-700 px-1 rounded-full  ' /> 
                             </div>
                             
                         </div>
                         <div className='flex items-center gap-4 '>
                           {/*menu button*/}
                              {
                                 menuOpened ? <div>
                                      <FaBarsStaggered onClick={toggleMenu} className='lg:hidden cursor-pointer text-xl' />

                                 </div> :
                                  <div>
                                     <FaBars  onClick={toggleMenu} className='lg:hidden cursor-pointer text-xl' />
                                 </div>
                              }
                               {/*Cart*/}
                                 <div data-testid= "cart-icon" onClick={()=>navigate('/cart')} className='flex gap-2     items-center cursor-pointer p-2 rounded-full bg-white relative' >
                                    <FaShoppingBasket size={27} />
                                       <label  className='absolute bottom-8 -right-2 text-xs font-bold' >{items}</label> 
                                </div>
                                 {/*user profile*/}
                                   {user ? <div className='cursor-pointer group relative'>
                                        <img src={userImg} alt="user image" height={45} width={45} />
                                        <ul className='  absolute text-sm top-5 -left-2 bg-white z-50 shadow-lg w-[90px] py-4 px-2 rounded-lg hidden group-hover:flex flex-col gap-2 ' >
                                           <li onClick={()=> navigate('/my-orders')} className=' text-gray-800 rounded-md hover:text-black cursor-pointer'>orders</li>
                                          <li onClick={handleUserLogOut} className=' text-gray-800 rounded-md hover:text-black cursor-pointer'>Log out</li>
                                        </ul>
                                   </div> :   
                                     <button onClick={()=>setShowUserLogin(true)} className='flex items-center gap-1 btn-dark  rounded-full'>
                                          login 
                                          <RiUserLine className='text-xl text-center' />
                                     </button>
                                    }
                         </div>

                         
                       
                  </div>
            </section>
            
          
      </header>
  )
}

export default Header; 