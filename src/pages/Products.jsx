import axios from "axios";
import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard"

const Products = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState()
  const [search, setSearch] = useState("")

const getData =async()=> {
  try {
    const {data} = await axios.get(`https://dummyjson.com/products/search?q=${search}`)
    console.log(data);
    setProducts(data.products)
  } catch (error) {
    console.log(error);
  }
}

useEffect(() => {
 getData()
}, [])


  return <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py 24 lg:max-w-7xl lg:px-8">
  <h3 className="text-2xl font-bold mt-8 tracking-tight text-gray-900">All Products</h3>
  {
    products.map(product =><ProductCard key={products.id} product={product} /> )
  }
  
  </div>;
};

export default Products;