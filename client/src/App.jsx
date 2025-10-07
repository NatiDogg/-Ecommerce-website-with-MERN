import { useContext, useState } from 'react'
import Home from './Pages/Home.jsx'
import {Routes,Route,useLocation} from 'react-router-dom';
import Header from './Components/Header.jsx';
import Collection from './Pages/Collection.jsx'
import CategoryCollection from './Pages/CategoryCollection.jsx'
import Contact from "./Pages/Contact.jsx";
import ProductDetails from './Pages/ProductDetails.jsx';
import Footer from './Components/Footer.jsx';
import Testimonial from './Pages/Testimonial.jsx';
import Cart from './Pages/Cart.jsx';
import MyOrders from './Pages/MyOrders.jsx';
import PlaceOrder from './Pages/PlaceOrder.jsx';
import Login from './Components/Login.jsx';
import { shopContext } from './Context/ShopContextProvider.jsx';
import { Toaster } from 'react-hot-toast';
import SideBar from './Components/Admin/SideBar.jsx';
import AdminLogin from './Components/Admin/AdminLogin.jsx';
import AddProduct from './Pages/Admin/AddProduct.jsx';
import ProductList from './Pages/Admin/ProductList.jsx';
import Orders from './Pages/Admin/Orders.jsx';

function App() {
   const {showUserLogin,isAdmin} = useContext(shopContext); 
   const location = useLocation();
   const isAdminPath =   location.pathname.includes("admin");
   
  

  return (
     <main className='overflow-hidden text-tertiary min-h-screen flex flex-col  '>
        
       
        {!isAdminPath &&  <Header /> }
        {showUserLogin && <Login />}
         <Toaster  position="bottom-right"
            reverseOrder={false} 
         />
         
           <div className='flex flex-col flex-1'>
            <Routes>
               <Route path='/' element={<Home/>} />
               <Route path='/collection' element={<Collection />} />
               <Route path='/collection/:category' element={<CategoryCollection />} />
                  <Route path='/collection/:category/:id' element={<ProductDetails />} />
                  <Route path='/testimonial' element={<Testimonial />} />
                  <Route path='/contact' element={<Contact />} />
                  <Route path='/cart' element={<Cart />} />
                  <Route path='/place-order' element={<PlaceOrder />} />
                  <Route path='/my-orders' element={<MyOrders />} />
                   <Route path='/admin' element={isAdmin ? <SideBar /> : <AdminLogin />}  >
                           <Route index element={isAdmin ? <AddProduct /> : null} />
                           <Route path='list' element={<ProductList />} />
                           <Route path='orders' element={<Orders />} />

                      
                   </Route>

           
            </Routes>
           </div>
         
             {!isAdminPath && <Footer />}
         
     </main>
  )
}

export default App
