"use client"
import Card from '@/app/_Components/Card';
import SkelProductList from '@/app/_Components/SkelProductList';
import { useSelector } from 'react-redux';

function Wishlist() {
    const stateWishlist = useSelector((state) => state.wishlist);
    console.log(stateWishlist);
  return (
    <div className=' dark:bg-gray-900'>
        <div className='container mx-auto py-14 px-5'>
            <div className='mb-5'>
            <h2 className='capitalize text-center text-3xl md:text-5xl mb-2 font-bold dark:text-white'>wishlist</h2>
            <p className='text-center md:text-xl text-gray-500 dark:text-gray-300'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            {
                stateWishlist.length > 0 ? (
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
                {stateWishlist.map((product) => (
                    <Card key={product.id} product={product}/>
                ))}
                    </div>
                ): 
                    <SkelProductList/>
            }
        </div>
    </div>
  )
}

export default Wishlist