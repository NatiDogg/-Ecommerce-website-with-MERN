import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({containerStyles,setMenuOpened,}) => {
  
   
    const navLinks = [
        {path: "/", title : "Home"},
        {path: "/collection", title : "Collection"},
        {path: "/testimonial", title : "Testimonial"},
        {path: "/contact", title : "Contact"}
    ]
  return (
       <nav className={`${containerStyles}   `}>
          {navLinks.map((link,index)=>{
                 return <Link onClick={()=>{setMenuOpened(false)}} key={index}  to={link.path}  >{link.title}</Link>
          })}

       </nav>
  )
}

export default NavBar;