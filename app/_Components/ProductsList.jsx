"use client"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchProducts } from '../_RTK/slices/productsReducer';
import Card from './Card';
import SkelProductList from './SkelProductList';

function ProductsList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [page, setPage] = useState();
  useEffect(() => {
    dispatch(fetchProducts());
    setPage(1);
  },[dispatch])
  
  const limit = 8;
  let skip = (page - 1) * limit;
  const pages = products.length / limit;
  const lastPage = Math.ceil(pages);
  return (
    <>
    {
      products.length > 0 ? (

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
      {products.map((product, index) => index >= skip && index < skip + limit &&  (
        <Card key={product.id} product={product}/>
      ))}
        </div>
    ): 
        <SkelProductList/>
    }
        <div className='text-center mt-10'>
        <nav aria-label="Page navigation example">
            <ul className="inline-flex -space-x-px text-base h-10">
            <li className='cursor-pointer' onClick={() => page > 1 && setPage(page-1)}>
                <a href='#products' className={`flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${page == 1 && 'opacity-50'}`}>Previous</a>
            </li>
            {
              products.map((product, index) =>  index < lastPage && (
                page == index+1 ?
                <li className='cursor-pointer' onClick={() => setPage(index+1)} key={index}>
                  <a href='#products' aria-current="page" className="flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">{index+1}</a>
                </li>
                :
                  <li className='cursor-pointer' onClick={() => setPage(index+1)} key={index}>
                    <a href='#products' className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{index+1}</a>
                  </li>
              ))
            }
            <li className='cursor-pointer' onClick={() => page < lastPage &&  setPage(page+1)}>
                <a href='#products' className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${page == lastPage && 'opacity-50'}`}>Next</a>
            </li>
            </ul>
        </nav>
        </div>
</>
  )
}

export default ProductsList