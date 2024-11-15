import React, { useState } from 'react'
import { FiHeart } from 'react-icons/fi'
import { FaEye } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../_RTK/slices/cartSReducer';
import Link from 'next/link';
import AlertDesign from './AlertDesign';
import { addToWishlist } from '../_RTK/slices/wishlistReducer';
function Card({product}) {
    const dispatch = useDispatch();
    const [alert, setAlert] = useState(false);
    const stateWishlist = useSelector((state) => state.wishlist);
    const findWishlist = stateWishlist.find((item) => item.id === product.id);
    const handleClick = (item) => {
        dispatch(addToCart(item));
        setAlert(true);
        setTimeout(() => {
            setAlert(false);
        }, 2000);
    }
    const wishlistClick = (product) => {
        dispatch(addToWishlist(product));
        setAlert(true);
        setTimeout(() => {
            setAlert(false);
        }, 2000);
    }

    return (
        <>
        <div className='relative group flex flex-col gap-2 duration-300 hover:shadow-md shadow rounded-lg dark:shadow-gray-500 dark:bg-gray-900' key={product.id}>
            <div className='relative overflow-hidden bg-white rounded-t-xl'>
                <Link href={`/products/${product.id}`} >
                    <div className='relative'>
                        <Image src={product.image} alt={product.title} className='text-sm rounded-xl h-[150px] md:h-[250px] p-3 mx-auto' width={200} height={200} />
                    </div>
                </Link>
                    <div className='absolute top-3 right-3 cursor-pointer'>
                    <div onClick={()=> wishlistClick(product)} className={`${findWishlist ? 'bg-red-300 text-white' : 'bg-gray-200'} rounded-full p-2 font-bold`}>
                        <FiHeart size={20} className='text-black'/>
                    </div>
                    </div>
                    <div className='absolute hidden md:flex justify-center items-center duration-300 transform translate-y-full group-hover:translate-y-0 bottom-0 left-0 w-full border-2 border-gray-300 dark:border-gray-700'>
                        <span className='flex items-center justify-center p-2 bg-gray-300 w-full cursor-pointer dark:bg-gray-700 dark:text-white' onClick={() => handleClick({...product, quantity: 1})}>
                        <LuShoppingCart size={16} />
                        </span>
                        <span className='flex items-center justify-center p-2 bg-white w-full cursor-pointer'>
                        <Link href={`/products/${product.id}`} >
                        <FaEye size={16} />
                        </Link>
                        </span>
                    </div>
            </div>
            <div className='flex flex-col gap-1 p-2 dark:bg-gray-900 dark:text-white'>
                <div className='text-md md:text-lg line-clamp-3 break-words'>{product.title}</div>
                <span className='text-md md:text-xl font-bold text-gray-500 dark:text-gray-300'>${product.price}</span>
            </div>
        </div>
        <div className='fixed bottom-3 right-3 z-50 flex flex-col  gap-3 justify-center items-center duration-300 animate-bounce'>
        {
        alert && 
        <>
                <AlertDesign />
        </>
        }
        </div>
        </>
  )
}

export default Card