import React from 'react'
import Hero from '../Components/Hero.jsx';
import Features from '../Components/Features.jsx';
import Categories from '../Components/Categories.jsx';
import PopularProducts from '../Components/PopularProducts.jsx'
import Blog from '../Components/Blog.jsx';
import banner from '../assets/banner.png'



const Home = () => {
  return (
       <>
        <Hero />
        <Features />
        <Categories />
        <PopularProducts />
          <div className='max-w-[1360px] px-2 lg:py-8  flex flex-row justify-center '>
             <img src={banner} alt="bannerImg" className='rounded min-w-[311px] object-cover max-w-[1250px]' />
          </div> 
        <Blog />
        

       </>
  )
} 

export default Home;


