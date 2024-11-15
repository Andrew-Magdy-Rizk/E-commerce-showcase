import AlertDesign from '@/app/_Components/AlertDesign';
import { addToCart } from '@/app/_RTK/slices/cartSReducer';
import { fetchProducts } from '@/app/_RTK/slices/productsReducer';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';



function ProductDetails({productId}) {
    const dispatch = useDispatch();
    const [alert, setAlert] = useState(false);
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const products = useSelector((state) => state.products);

    useEffect(() => {
        getProduct();
    },[dispatch]);

    const getProduct = () => {
        const findProduct = products.find((product) => product.id == productId);
        if(!findProduct){
            dispatch(fetchProducts(productId));
            setProduct(products);
            console.log(products);
        }else{
            const findProduct = products.find((product) => product.id == productId);
            setProduct(findProduct);
        }
    }
    const handleClick = (item) => {
        dispatch(addToCart(item));
        setAlert(true);
        setTimeout(() => {
            setAlert(false);
        }, 2000);
    }

  return (
    <div className='py-16 px-3 contianer mx-auto dark:bg-gray-900'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {product.image && (
            <div className='flex flex-col justify-center items-center rounded-xl md:flex-row-reverse gap-4 bg-white dark:bg-gray-800'>
                <Image src={product.image} className="h-[250px] md:h-[400px] p-3" alt={product.title} width={300} height={250} />
            <div className='grid grid-cols-4  md:grid-cols-1 gap-2'>
                <Image src={product.image} alt={product.title} width={80} height={80} className='h-[100px] border-2 p-2 rounded-lg dark:border-gray-500'/>
                <Image src={product.image} alt={product.title} width={80} height={80} className='h-[100px] border-2 p-2 rounded-lg dark:border-gray-500'/>
                <Image src={product.image} alt={product.title} width={80} height={80} className='h-[100px] border-2 p-2 rounded-lg dark:border-gray-500'/>
                <Image src={product.image} alt={product.title} width={80} height={80} className='h-[100px] border-2 p-2 rounded-lg dark:border-gray-500'/>
            </div>
            </div>
            )}
            <div className='flex flex-start flex-col flex-1 gap-4'>
                <div>
                <h2 className='text-2xl md:text-3xl font-bold w-3/4 line-clamp-3 break-words dark:text-white'>{product.title || "Product Name"}</h2>
                <p className='text-gray-500 text-md font-medium mt-2 dark:text-gray-400'>{product.category || "Product Category"}</p>
                </div>
                <div>
                    <h2 className='text-2xl capitalize font-bold dark:text-white'>Description</h2>
                    <p className='text-md text-gray-500 dark:text-gray-400 w-3/4 line-clamp-3 break-words font-medium mt-1'>{product.description || "Product Description"}</p>
                </div>
                <div>
                <p className="font-medium text-lg text-gray-900 my-4 dark:text-white">Color</p>
                <div className="grid grid-cols-5 gap-3 mb-8 max-w-sm">
                            <div className="color-box group">
                                <div>
                                    <div className="w-10 mx-auto h-10 aspect-square border-2 border-gray-100 rounded-full transition-all duration-500 group-hover:border-primary bg-black"
                                        />
                                    <p
                                        className="font-normal text-sm leading-6 text-gray-400 text-center mt-2 group-hover:text-secondary dark:text-white">
                                        Black</p>
                                </div>
                            </div>
                            <div className="color-box group">
                                <div>
                                    <div className="w-10 mx-auto h-10 aspect-square border-2 border-gray-100 rounded-full transition-all duration-500 group-hover:border-primary bg-red-600"
                                        />
                                    <p
                                        className="font-normal text-sm leading-6 text-gray-400 text-center mt-2 group-hover:text-secondary dark:text-white">
                                        Red</p>
                                </div>
                            </div>
                            <div className="color-box group">
                                <div>
                                    <div className="w-10 mx-auto h-10 aspect-square border-2 border-gray-100 rounded-full transition-all duration-500 group-hover:border-primary bg-blue-600"
                                        />
                                    <p
                                        className="font-normal text-sm leading-6 text-gray-400 text-center mt-2 group-hover:text-secondary dark:text-white">
                                        Blue</p>
                                </div>
                            </div>
                            <div className="color-box group">
                                <div>
                                    <div className="w-10 mx-auto h-10 aspect-square border-2 border-gray-100 rounded-full transition-all duration-500 group-hover:border-primary bg-gray-500"
                                        />
                                    <p
                                        className="font-normal text-sm leading-6 text-gray-400 text-center mt-2 group-hover:text-secondary dark:text-white">
                                        Gray</p>
                                </div>
                            </div>
                </div>
                </div>
                    <div className="flex items-center flex-col min-[400px]:flex-row gap-3 mb-3 min-[400px]:mb-8">
                        <div className=" flex items-center justify-center border border-gray-400 rounded-full">
                            <button onClick={() => setQuantity(quantity + 1)}
                                className="group py-[14px] px-3 w-full border-r border-gray-400 rounded-l-full h-full flex items-center justify-center bg-white shadow-sm shadow-transparent transition-all duration-300 hover:bg-gray-50 hover:shadow-gray-300">
                                <svg className="stroke-black group-hover:stroke-black" width="22" height="22"
                                    viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.5 11H5.5" />
                                    <path d="M16.5 11H5.5" />
                                    <path d="M16.5 11H5.5" />
                                </svg>
                            </button>
                            <input type="text"
                                className="font-semibold text-gray-900 text-lg py-3 px-2 w-full min-[400px]:min-w-[75px] h-full bg-transparent placeholder:text-gray-900 text-center hover:text-secondary outline-0 hover:placeholder:text-primary dark:text-white dark:placeholder:text-neutral-300"
                                placeholder={quantity}  disabled={true}/>
                            <button onClick={() => setQuantity(quantity + 1)}
                                className="group py-[14px] px-3 w-full border-l border-gray-400 rounded-r-full h-full flex items-center justify-center bg-white shadow-sm shadow-transparent transition-all duration-300 hover:bg-gray-50 hover:shadow-gray-300">
                                <svg className="stroke-black group-hover:stroke-black" width="22" height="22"
                                    viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11 5.5V16.5M16.5 11H5.5"  />
                                    <path d="M11 5.5V16.5M16.5 11H5.5" />
                                    <path d="M11 5.5V16.5M16.5 11H5.5" />
                                </svg>
                            </button>
                        </div>
                        <button onClick={()=> handleClick({...product, quantity})}
                            className="group py-3 px-5 rounded-full bg-primary text-black font-semibold text-lg w-full md:w-3/4 flex items-center justify-center gap-2 shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-600 hover:bg-secondary hover:text-white">
                            <svg className="stroke-black transition-all duration-500"
                                width="22" height="22" viewBox="0 0 22 22" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10.7394 17.875C10.7394 18.6344 10.1062 19.25 9.32511 19.25C8.54402 19.25 7.91083 18.6344 7.91083 17.875M16.3965 17.875C16.3965 18.6344 15.7633 19.25 14.9823 19.25C14.2012 19.25 13.568 18.6344 13.568 17.875M4.1394 5.5L5.46568 12.5908C5.73339 14.0221 5.86724 14.7377 6.37649 15.1605C6.88573 15.5833 7.61377 15.5833 9.06984 15.5833H15.2379C16.6941 15.5833 17.4222 15.5833 17.9314 15.1605C18.4407 14.7376 18.5745 14.0219 18.8421 12.5906L19.3564 9.84059C19.7324 7.82973 19.9203 6.8243 19.3705 6.16215C18.8207 5.5 17.7979 5.5 15.7522 5.5H4.1394ZM4.1394 5.5L3.66797 2.75"  />
                            </svg>
                            Add to cart</button>
                    </div>
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
    </div>
  )
}

export default ProductDetails