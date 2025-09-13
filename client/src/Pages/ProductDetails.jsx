import React, { useContext, useEffect,useState } from 'react'
import {shopContext} from '../Context/ShopContextProvider.jsx'
import { useLocation, useParams,Link} from 'react-router-dom';
import {TbHeart, TbShoppingBagPlus, TbStarFilled, TbStarHalf} from 'react-icons/tb';
import {FaTruckFast} from 'react-icons/fa6';
import Item from '../Components/Item.jsx';
import ProductDescription from '../Components/ProductDescription.jsx';
import ProductFeatures from '../Components/ProductFeatures.jsx';



const ProductDetails = () => {
      const location = useLocation();
      const {products,currency,addToCart,cartItems} = useContext(shopContext);
      const [image, setImage] = useState(null);
      const [size, setSize] = useState(null);
      const { category, id} = useParams();
      const [relatedProducts, setRelatedProducts] = useState([]);
      const [productInfo, setProductInfo] = useState("description");

      const product = products.find((item)=> item._id === id);
      const ProductDescriptionButtons = ['Description','Care Guide','Color Guide']
        
         
      useEffect(()=>{
           if(product){
              setImage(product.image[0]);
              
           }
      },[product]);
      useEffect(()=>{
             if(products.length > 0){
                const relatedProducts = products.filter((product)=>{
                    return product._id !== id && product.category.toLowerCase() === category
                })
              
                setRelatedProducts(relatedProducts); 
                
             }
      },[products,id])

      const handleProductInfo = (info) =>{
          setProductInfo(info);
      }
          
  return (
          <section data-testid = "product-details-page" className='px-6 py-6 w-full bg-gray-100'>
                {product ? 
                <div className='max-w-[1360px] mx-auto px-4 py-4 flex flex-col gap-12'>
                      <div className='flex flex-row gap-1 '>
                           <p className='text-gray-500 text-sm flex flex-row gap-1'><Link to={'/'}>Home</Link>/</p>
                           <p className='text-gray-500 text-sm flex flex-row gap-1'><Link to={'/collection'}>Collection</Link>/</p>
                            <p className='text-gray-500 text-sm flex flex-row gap-1'><Link to={`/collection/${category}`}>{category}</Link>/</p>
                            <p data-testid="product-title" className='text-gray-500 text-sm'>{product.name}</p> 
                      </div>
                     <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                             <div className=' px-3 md:px-5 text-black flex flex-row  gap-4 '>
                                 {product.image.length > 1 ? 
                                     <div className='flex  flex-col gap-2 justify-start'>
                                           {product.image.map((itemImage,index)=>{
                                                return <div className={`${image === itemImage? 'border border-gray-400 shadow-2xl ': ""}bg-white  shadow-md cursor-pointer`} onClick={()=>setImage(itemImage)} key={index}>
                                                      <img src={itemImage} alt="product image" height={100} width={100} />
                                                </div>
                                           })}
                                           

                                     </div>
                                 :
                                 ""}
                                  <div data-testid="product-main-image" className='bg-white shadow-md rounded-sm h-[300px] md:h-[430px] '>
                                      <img src={image} alt="" height={370} width={460} className='object-cover aspect-square' />
                                  </div>
                             </div>
                             <div className='text-black shadow-md rounded-sm  bg-white px-3 md:px-5 py-3 flex flex-col gap-2'>
                                 <div>
                                   <p data-testid="product-name" className='text-xl md:text-2xl font-semibold text-black'>{product.name}</p> 
                                 </div>
                              {/*Rating*/}
                              <div className='flex flex-row gap-1 items-center'>
                                      <div className='flex flex-row gap-0.5 text-yellow-400'>
                                          <TbStarFilled  />
                                          <TbStarFilled />
                                          <TbStarFilled  />
                                          <TbStarFilled  />
                                            <TbStarHalf  />
                                       </div>
                                    <p className='text-sm text-gray-500'>(22)</p>
                                     
                               </div>
                               <div className='flex items-baseline gap-4 '>
                                  <h3 className='text-gray-600 font-semibold line-through text-3xl'>{currency} {product.price}.00</h3>
                                   <h4>{currency} {product.price}.00</h4>
                               </div>
                                <div className=' w-full md:w-[80%]'>
                                    <p data-testid="product-description" className='text-gray-700 '>{product.description}</p>
                                </div>
                                 <div className='flex flex-row gap-2 mt-1'>
                                    {product.sizes.sort((a,b)=>{
                                        const order = ["S","M","L","XL","XXL"]
                                        return order.indexOf(a) - order.indexOf(b)
                                    }).map((item,index)=>{
                                        return <button data-testid = {`size-option-${item}`} onClick={()=>setSize(item)} key={index} className={`bg-gray-100 shadow-sm px-6 text-sm py-2 text-black ${item === size ? "border border-slate-800": ""}`}>
                                             {item}
                                        </button>
                                        
                                    })}
                                 </div>
                                 <div className='flex flex-row items-center gap-2 mt-2 w-full'>
                                      <button data-testid = "add-to-cart"  onClick={()=>{addToCart(product._id,size);setSize("")}} className=' flex flex-row gap-1 items-center justify-center w-full lg:w-[50%] px-6 py-2 md:px-10 md:py-2 bg-slate-950 text-white '>Add to Cart <TbShoppingBagPlus /></button>
                                      <button className='bg-gray-100 text-black py-3 px-4 md:px-6'><TbHeart/></button>
                                     
                                 </div>
                                 <div className='flex flex-row gap-2 mt-1 text-black items-center'>
                                      <FaTruckFast size={25} />
                                      <p className='text-gray-800'>Free Delivery on orders over 500$</p>
                                      
                                 </div>
                                  <hr className='w-2/3 h-0.5 bg-gray-200 mt-2'></hr>
                                  <div className='mt-1'>
                                     <p className='capitalize text-gray-400 text-[13px]'>Authenticy You can Trust</p>
                                     <p className='capitalize text-gray-400 text-[13px]'>Enjoy cash on delivery for your convenience</p>
                                     <p className='capitalize text-gray-400 text-[13px]'>easy return and exchanges within 7 days</p>
                                  </div>
                                 
                             </div>
                         
                     </div>
                     <div className='bg-white px-4 py-4 rounded-md '>
                          <div className='flex flex-row gap-8 px-4 py-4'>
                               {ProductDescriptionButtons.map((button,index)=>{
                                   return <p key={index} onClick={()=>handleProductInfo(button.toLowerCase().trim())} className={`text-black font-semibold cursor-pointer ${productInfo === button.toLowerCase() ? "text-black border-b-4 border-black " : ""}`}>{button}</p>
                               })}
                             
                          </div>
                           <hr className='w-[80%] h-0.5 -mt-2 bg-gray-200' />
                           <div className='px-4 mt-2 '>
                                <ProductDescription productInfo={productInfo} />
                           </div>
                     </div>
                     <div className='bg-white rounded-md shadow-sm'>
                         {/*product features*/}
                          <ProductFeatures />
                     </div>
                     <div className='px-2'>
                         {/*related Products*/}
                         <div className=' w-[70%] lg:w-[33%] flex flex-col gap-1'>
                            <div className='flex gap-1 items-center'>
                                <h2 className='font-semibold text-2xl'>Related</h2>
                               <h5 className='underline text-gray-600 text-[18px]'>Products</h5>
                            </div>
                            <p className='text-gray-600 text-xs'>Explore our collection of stylish clothing and footwear made for comfort,quality and everday confidence.</p>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3'>
                             {relatedProducts.map((product,index)=>{
                                 return <Item key={index} product={product} />
                             })}
                        </div>
                     </div>
                </div>
                :
                 <div className='max-w-[1360px] mx-auto px-4 py-4'>
                     <p className='text-red-500 text-center text-xl font-semibold'>Opps! product is not found please try again!!</p>
                     
                 </div>
                }
          </section>
  )
}

export default ProductDetails;




