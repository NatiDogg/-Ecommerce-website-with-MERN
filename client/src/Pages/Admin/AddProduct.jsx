import React,{useState,useContext} from 'react'
import {toast} from 'react-hot-toast';
import upload_icon from '../../assets/upload_icon.png';
import {shopContext} from '../../Context/ShopContextProvider.jsx';


const AddProduct = () => {
    const {axios} = useContext(shopContext);
     const sizes = ["S","M","L","XL","XXL"];
     const [currentSize, setCurrentSize] = useState([]);
     const [addPopular, setAddPopular] = useState(false);
     const [files, setFiles] = useState([]);


    

      
     const [newProductForm,setNewProductForm] = useState({
          name: "",
          description: "",
          category:"",
          productPrice: "",
          offerPrice: "",
          sizes:[],
          files: [],
        addPopular: false
         
     });



    

    
     const handleForm = async(e) =>{
        e.preventDefault();
      const { name, description, category, productPrice, offerPrice } = newProductForm;
     if (!name || !description || !category || !productPrice || !offerPrice) {
       return toast.error("Please fill all required fields");
      }
     if (currentSize.length === 0) {
      return toast.error("Please select at least one size");
      }
     if (files.length === 0) {
       return toast.error("Please upload at least one image");
     }
              
         try {
            const {  files,productPrice,addPopular, ...rest } = newProductForm;
            const cleanProductData = {
               ...rest, 
               price:Number(productPrice),
               popular:addPopular
            };
            const formData = new FormData();
             formData.append('productData', JSON.stringify(cleanProductData));
             files.forEach((file) => {
               formData.append('images', file);
               });
               const {data} = await axios.post('/api/product/add',formData)
           
            if(data.success){
               toast.success(data.message);
            }
            else{
               toast.error(data.message);
            }
         } catch (error) {
             console.log(error.message);
         } 
           setNewProductForm({
              name: "",
              description: "",
              category:"",
              productPrice: "",
              offerPrice: "",
              size:[],
              file: [],
              addPopular: false
           })
         setCurrentSize([]);
           setAddPopular(false); 
           setFiles([]);
         
        
     }
     const handleInput = (e)=>{
           const { name, value, type, checked } = e.target;
           
         setNewProductForm(prevData=>(
             {
                ...prevData,
                [name] : type === 'checkbox' ? checked : value
             }
         ))
     }
     const handleSizeChange = (e,size)=>{
         e.preventDefault();
         setNewProductForm(prevData=>(
            {
                ...prevData,
                size:[...currentSize,size]
            }
         ));
         setCurrentSize(prevSize=> [...prevSize,size]);
     }
      
  return (
   <div className='ml-2  px-4 py-4 bg-slate-100/40 w-full'>
       <form onSubmit={handleForm} className='flex flex-col  gap-6 py-6 w-full' action="">
             <div className='flex flex-col w-[50%] gap-1'>
                 <label htmlFor="productName" className='font-semibold'>Product Name</label>
                 <input  onChange={(e)=>handleInput(e)} name="name" value={newProductForm.name} type="text" id='productName' placeholder='Write here' className='px-2 py-1 border border-gray-200 rounded-md outline-none focus:border-gray-400'/>
             </div>
             <div className='flex flex-col w-[50%] gap-1'>
                 <label htmlFor="productDescription" className='font-semibold'>Product Description</label>
                 <textarea onChange={(e)=>handleInput(e)} name="description" value={newProductForm.description}  rows={5} placeholder='write here..' id="productDescription" className='px-3 py-1 border border-gray-200 rounded-md outline-none focus:border-gray-400 resize-none'></textarea>
             </div>
              <div className='flex flex-col sm:flex-row w-[90%] lg:w-[50%]  gap-6'>
                  <div className='flex flex-col w-[50%]  justify-start gap-1 '>
                     <label htmlFor="category" className='font-semibold'>Category</label>
                     <select value={newProductForm.category} onChange={(e) => handleInput(e)} className='px-4  py-1 border border-gray-200 rounded-md outline-none focus:border-gray-400 text-gray-600 grid place-content-center ' name="category" id="category">
                        <option value="" disabled hidden >Select a category</option>
                        <option  value="Men">Men</option>
                        <option  value="Female">Female</option>
                        <option   value="Kids">Kids</option>
                        <option   value="Footwear">Footwear</option>
                        <option   value="Winterwear">Winterwear</option>
                        <option   value="Sportswear">Sportswear</option>
                     </select>
                  </div>
                  <div className='flex flex-col gap-1 items-start sm:items-center  '>
                     <label htmlFor="productPrice" className='font-semibold'>Product Price</label>
                      <input onChange={(e)=>handleInput(e)} name="productPrice" value={newProductForm.productPrice}  type="number" id='productPrice'  className='px-2 py-1 border border-gray-200 rounded-md outline-none focus:border-gray-400 w-[50%] ' />
                  </div>
                   <div className='flex flex-col gap-1 '>
                     <label htmlFor="productPrice" className='font-semibold'>Offer Price</label>
                      <input onChange={(e)=>handleInput(e)} name="offerPrice" value={newProductForm.offerPrice} type="number" id='productPrice'  className='px-2 py-1 border border-gray-200 rounded-md outline-none focus:border-gray-400 w-[50%]' />
                  </div>
                  
                 
              </div>
               <div className='flex flex-col w-[90%] md:w-[70%] lg:w-[50%] gap-1'>
                 <h3  className='font-semibold'>Product Sizes</h3>
                  <div className='grid grid-cols-5 sm:grid-cols-6 gap-4  items-center'>
                       {sizes.map((size,index)=>{
                            return <button key={index} onClick={(e) => handleSizeChange(e, size)} className={`${currentSize.includes(size) ? "border-gray-800 bg-black text-white": "border-gray-300"} px-4 py-1 border hover:border-gray-600 text-center`}>{size}</button>
                       })}
                       <div className='ml-3'>
                          <button onClick={(e)=>{e.preventDefault(); setCurrentSize([])}} className='px-3 py-1 bg-red-600 text-white text-xs'>Clear</button>
                       </div>
                  </div>
             </div>
               <div className='flex flex-col w-[50%] md:w-[70%] gap-1'>
                   {/*images*/}
                       <div className='flex flex-row flex-wrap items-center gap-4'>
                            {Array(4).fill("").map((_,index)=>(
                                 <label key={index} htmlFor={`image${index}`} className='rounded overflow-hidden cursor-pointer'>
                                     <input  onChange={(e)=>{
                                         setNewProductForm(prevData=>{
                                                const updatedFiles = [...files]
                                         updatedFiles[index] = e.target.files[0]
                                         setFiles(updatedFiles);
                                           return {
                                        ...prevData,
                                       files: updatedFiles,
                                                  };
                                         })
                                     }}  type="file" id={`image${index}`} hidden />
                                     <img src={files[index] ? URL.createObjectURL(files[index]) : upload_icon} alt="uploadArea" width={67} height={67} className='bg-white text-black' />
                                 </label>
                                 
                            ))}
                             <div className='ml-3'>
                          <button onClick={(e)=>{e.preventDefault(); setFiles([])}} className='px-3 py-1 bg-red-600 text-white text-xs'>Clear</button>
                       </div>
                       </div>
               </div>
             <div className='flex flex-col  w-[50%] '>
                  <div className='flex flex-row gap-1'>
                     <input  type="checkbox" name="addPopular" checked={newProductForm.addPopular} onChange={handleInput}  />
                     <label className='font-semibold' >Add to Popular</label>
                  </div>
                
             </div>
 
             <button className='px-6 py-2 text-center bg-slate-900 rounded-md hover:bg-black text-white capitalize mx-auto'>Add Product</button>
              
            

       </form>
   </div>
  )
}

export default AddProduct;