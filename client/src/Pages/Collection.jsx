import React,{useContext,useEffect,useState} from 'react'
import {useLocation } from 'react-router-dom';
import { shopContext } from '../Context/ShopContextProvider.jsx';
import Item from '../Components/Item.jsx';

const Collection = () => {
      const {products} = useContext(shopContext);
       const [currentPage, setCurrentPage] = useState(1);
       const [filteredProducts, setfilteredProducts] = useState([]);
       const itemsPerPage = 10;

       useEffect(() => {
        
          setfilteredProducts(products);
         
          setCurrentPage(1);
       }, [products]);
      const indexOfLastItem = currentPage * itemsPerPage;
       const indexOfFirstItem = indexOfLastItem - itemsPerPage;
       const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
       const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
       
       const handlePageChange = (pageNumber) => {
          setCurrentPage(pageNumber);
        
          window.scrollTo({ top: 0, behavior: 'smooth' });
      };
      const pageNumbers = [];
     for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
        
           

  
  return (
     <section data-testid= "collection-page" className='px-6 py-6 w-full'>
          <div className='max-w-[1360px] mx-auto px-4 py-4 flex flex-col gap-6'>
               <div data-testid= "collection-header" className=' w-[70%] lg:w-[33%] flex flex-col gap-1'>
                  <div className='flex gap-1 items-center'>
                       <h2 data-testid= "collection-title" className='font-semibold text-xl'>All</h2>
                        <h5 data-testid= "collection-subtitle" className='underline text-gray-600 text-[18px]'>Products</h5>
                  </div>
                     <p className='text-gray-600 text-xs'>Explore our collection of stylish clothing and footwear made for comfort,quality and everday confidence.</p>
                 </div>
          </div>
          <div data-testid = "collection-grid" className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'>
               {currentItems.length > 0 ? currentItems.map((product,index)=>(
                       <Item key={product._id} index={index} product={product} data-testid= {`collection-item-${index}`} />
               )): <p data-testid = "collection-empty" className='text-xl text-red-500 col-span-3 font-semibold  w-full text-center'>Oops! nothing matched your search</p>}
          </div>
              {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className='flex justify-center mt-6 gap-2' data-testid = "pagination">
          <button
            data-testid = "pagination-prev"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className='px-4 py-2 border rounded-md disabled:opacity-60 bg-black text-white '
          >
            Previous
          </button>
          {pageNumbers.map(number => (
            <button
              data-testid= {`pagination-page-${number}`}
              key={number}
              onClick={() => handlePageChange(number)}
              className={`px-6 py-2 border rounded-md ${currentPage === number ? 'bg-black text-white' : ''}`}
            >
              {number}
            </button> 
          ))}
          <button
            data-testid = "pagination-next"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className='px-6 py-2 border rounded-md disabled:opacity-60 bg-black text-white'
          >
            Next
          </button>
        </div>
      )}
     </section>
  )
}

export default Collection; 