import React from 'react'
import {Link} from 'react-router-dom';
const Footer = () => {
   const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };
   
  return (
     <footer className='w-full px-3 py-4 md:px-4 md:py-6 bg-slate-100 border border-t-slate-200 shadow-xl '>
          <div className='max-w-[1360px] mx-auto px-6 py-6 flex flex-col justify-start md:flex-row  md:justify-between items-start gap-8 '>
                <div className=' flex flex-col justify-start items-start gap-6'>
                     <Link to={'/'} onClick={scrollToTop} className='font-paci uppercase text-2xl font-semibold'>
                                         Shoppr <span className='text-slate-700'>.</span>
                      </Link>
                      <p className='text-slate-600 w-full md:w-[70%] text-sm'>Discover stylish clothing and shoes online, crafted for comfort and quality.Shop fashion-forward designs that elevate your lock and fit every lifestyle.</p>

              </div>
              <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 pl-0 md:pl-4 w-full'>
                      <div className='flex flex-col gap-4 w-full'>
                         <h3 className='font-semibold'>Quick Links</h3>
                          <ul className='text-gray-600 text-sm flex flex-col gap-2 w-full'>
                             <Link to={'/'} onClick={scrollToTop} className='hover:underline' >Home</Link>
                             <Link to={'/'} onClick={scrollToTop} className='hover:underline' >Best Sellers</Link>
                             <Link to={'/'} onClick={scrollToTop} className='hover:underline' >Offers & Deals</Link>
                             <Link to={'/contact'} onClick={scrollToTop} className='hover:underline' >Contact Us</Link>
                             <Link to={'/'} onClick={scrollToTop} className='hover:underline' >FAQs</Link>
                             
                          </ul>
                      </div>
                       <div className='flex flex-col gap-4 w-full'>
                         <h3 className='font-semibold'>Need Help?</h3>
                          <ul className='text-gray-600 text-sm flex flex-col gap-2 w-full'>
                             <li><Link to={'/'} onClick={scrollToTop} className='hover:underline'>Delivery information</Link></li>
                             <li><Link to={'/'} onClick={scrollToTop} className='hover:underline'>return & Refund Policy</Link></li>
                              <li><Link to={'/'} onClick={scrollToTop} className='hover:underline'>Payment Methods</Link></li>
                              <li><Link to={'/'} onClick={scrollToTop} className='hover:underline'>Track your Order</Link></li>
                              <li><Link to={'/contact'} onClick={scrollToTop} className='hover:underline'>Contact Us</Link></li>
                          </ul>
                      </div>
                       <div className='flex flex-col gap-4 w-full'>
                         <h3 className='font-semibold'>Follow Us</h3>
                          <ul className='text-gray-600 text-sm flex flex-col gap-2 w-full'>
                             
                             <li><a target='blank' href="https://www.instagram.com/nate_dogg65" className='hover:underline '>Instagram</a></li>
                              <li><a target='blank' href="" className='hover:underline'>Twitter</a></li>
                              <li><a target='blank' href="https://www.facebook.com/nate_dogg" className='hover:underline'>Facebook</a></li>
                              <li><a target='blank' href="https://www.youtube.com/" className='hover:underline'>YouTube</a></li>
                          </ul>
                      </div>
                      
                      
              </div>
             
               
             
               
          </div>
           <div className='max-w-[1360px] h-[1px] mt-6 mb-3  md:mt-8 bg-slate-400'></div>
           <p className='text-slate-600 text-center text-sm'>Copyright {new Date().getFullYear()} &copy; Nati All right reserved.</p>
       
     </footer>
  )
}

export default Footer;