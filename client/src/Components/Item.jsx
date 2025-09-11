import React,{useState,useContext} from 'react'
import { shopContext } from '../Context/ShopContextProvider.jsx';

const Item = ({product,className,index}) => {
   const {navigate,addToCart} = useContext(shopContext);
    const [hovered, setHoverd] = useState(false);
    const handleHover = ()=>{
       setHoverd(prevHov=> !prevHov);
      
    }
  return (
  
   
          <div data-testid={`item-${index}`} className=' bg-white px-2 py-3  overflow-hidden '>
                <div data-testid={`item-image-${index}`} className='flex items-center justify-center bg-[#f5f5f5] overflow-hidden relative' onClick={()=>
                  {
                    navigate(`/collection/${product.category.toLowerCase()}/${product._id}`);
                  scrollTo(0,0);
                  }}
                  >
                   <img onMouseEnter={()=>setHoverd(true)} onMouseLeave={()=> setHoverd(false)} src={product.image.length > 1 && hovered ? product.image[1] : product.image[0]} alt="product image" className='hover:bg-[#1b1b1726] transition-all duration-300 cursor-pointer' />
                </div>
                 <div className='pt-3'>
                    <h4 data-testid={`item-name-${index}`} className='text-[15px] font-[500] !py-0 line-clamp-1 uppercase'>{product.name}</h4>
                    <p data-testid={`item-desc-${index}`} className='line-clamp-1 text-gray-500'>{product.description}</p>
                    <div className='flex flex-row items-center justify-between gap-2'>
                       <p data-testid={`item-category-${index}`} className='text-[14px] text-slate-900 md:text-[15px]  font-bold'>{product.category}</p>
                        <button data-testid={`item-btn-${index}`} onClick={()=>addToCart(product._id)} className={`${className && className} border border-gray-300 px-1 py-1 hover:bg-gray-200 rounded-sm transition-all duration-300 text-[15px]`}>Add to Cart | ${product.offerPrice}</button>
                      
                    </div>
                 </div>
          </div>

    
  )
}

export default Item;