import { useContext, useState } from 'react'
import Home from './Pages/Home.jsx'
import {Routes,Route} from 'react-router-dom';
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
function App() {
   const {showUserLogin} = useContext(shopContext);
  

  return (
     <main className='overflow-hidden text-tertiary min-h-screen flex flex-col  '>
        
        <Header />
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
           
            </Routes>
           </div>
         
             <Footer />
         
     </main>
  )
}

export default App
