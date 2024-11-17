"use client"
import React, { useEffect, useState } from 'react'
import ProductsList from './ProductsList'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../_RTK/slices/productsReducer';

function ProductsSection() {
  const stateProducts = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [categories, setCategories] = useState(["All Products"]);
  const [products, setProducts] = useState([])
  useEffect(() => {
    if (stateProducts.length > 0) {
      const uniqueCategories = [
        "All Products",
        ...new Set(stateProducts.map((product) => product.category)),
      ];
      setCategories(uniqueCategories);
      setProducts(stateProducts);
    }
  }, [stateProducts]);

   const handleFilter = (category) => {
    if (category === "All Products") {
      dispatch(fetchProducts());
    } else {
      const filteredProducts = stateProducts.filter(
        (product) => product.category === category
      );
      setProducts(filteredProducts);
      console.log("Filtered Products: ", filteredProducts);
    }
  }

    useEffect(() => {
      dispatch(fetchProducts());
    }, [dispatch]);
  
  return (
    <div className='w-full dark:bg-gray-900'>
    <div className='container py-16 mx-auto px-5'>
        <div className='text-center mb-8'>
            <h2 className='uppercase md:text-5xl text-4xl font-bold tracking-wide mb-2 dark:text-white' id='products'>COLLECTION{stateProducts.length}</h2>
            <p className='md:text-sm text-xs text-gray-600 font-medium dark:text-gray-300'>Donec venenatis vulputate lorem roin sapien ipsum, porta a auctor</p>
        </div>
        <div className='flex flex-col md:flex-row justify-start items-center mb-10'>
            <h2 className='uppercase md:text-3xl text-2xl font-bold tracking-wide mb-5 md:mb-0 md:mr-10 dark:text-white'>Categories</h2>
            <div className='flex justify-center items-center flex-wrap gap-4'>
              {
                categories.length > 1 ?(

                  categories.map((items, index) => index < 8 && (
                    <span key={index} className='text-white bg-primary  hover:bg-secondary duration-300 rounded-2xl py-2 px-3 capitalize cursor-pointer' onClick={() => handleFilter(items)}>{items}</span>
                  ))
                )
                : <>
                  <span className='w-24 h-10  duration-300 rounded-2xl py-2 px-3 bg-slate-200 animate-pulse'></span>
                  <span className='w-24 h-10  duration-300 rounded-2xl py-2 px-3 bg-slate-200 animate-pulse'></span>
                  <span className='w-24 h-10  duration-300 rounded-2xl py-2 px-3 bg-slate-200 animate-pulse'></span>
                  <span className='w-24 h-10  duration-300 rounded-2xl py-2 px-3 bg-slate-200 animate-pulse'></span>
                  <span className='w-24 h-10  duration-300 rounded-2xl py-2 px-3 bg-slate-200 animate-pulse'></span>
                </>
              }
            </div>
        </div>
            <ProductsList products={products}/>
    </div>
    </div>
  )
}

export default ProductsSection