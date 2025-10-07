import React,{useContext} from 'react'

import { shopContext } from '../../Context/ShopContextProvider.jsx'

const ProductList = () => {
       const {products,currency,fetchProducts}  = useContext(shopContext);
  return (
    <div>ProductList</div>
  )
}

export default ProductList;