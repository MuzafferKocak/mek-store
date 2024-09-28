import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'

const ProductContext = createContext()

export const useProductsContext = () => {
    return useContext(ProductContext)
}

const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const getData = async () => {
    setLoading(true)
    try {
      const { data } = await axios.get(
        `https://dummyjson.com/products/search?q=${search}`
      );
      console.log(data);
      setProducts(data.products);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    getData();
  }, [search]); //! beim ändern search state, läuft getData func.
    const values = {products, loading, setSearch, search}
  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  )
}

export default ProductProvider