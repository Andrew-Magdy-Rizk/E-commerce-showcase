"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { CgMail } from "react-icons/cg";
import { FiPhone, FiHeart, FiShoppingCart} from "react-icons/fi";
import { FaFacebookF, FaInstagram} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { RiSearchLine } from "react-icons/ri";
import { IoIosCloseCircle } from "react-icons/io";
import { MdOutlineMenu, MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useSelector } from 'react-redux';
import Link from 'next/link';


function Header() {
    const [open, setOpen] = useState(false);
    const [dark, setDark] = useState(false);
    const cart = useSelector((state) => state.cart);
    const stateWishlist = useSelector((state) => state.wishlist);


    useEffect(() => {
            // On mount, check if the user already prefers dark mode
        const isDark = localStorage.getItem('theme') === 'dark';
        setDark(isDark);

        // Apply the class based on the state
        if (isDark) {
        document.documentElement.classList.add('dark');
        } else {
        document.documentElement.classList.remove('dark');
    }
    },[])

    const handleDarkMode = () => {
        setDark(!dark);
        
        if (dark) {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        } else {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        }
    }

    const handleClick = () => {
        setOpen(!open);
    }
  return (
    <header className='sticky top-0 z-50'>
        {/* contact */}
        <div className='bg-primary hidden md:block'>
            <div className='flex py-2 px-4 container mx-auto justify-between items-center'>
                <div className='flex gap-3 justify-center text-[12px]'>
                    <div className='flex gap-1 items-center hover:text-white duration-300 transition-colors cursor-pointer'>
                    <FiPhone size={20} />
                    <span className=''>+201275980639</span>
                    </div>
                    <div className='flex gap-1 items-center hover:text-white duration-300 transition-colors cursor-pointer'>
                    <CgMail size={22} />
                    <span className=''>andrewdakran72@gmail.com</span>
                    </div>
                </div>
                <ul className='flex gap-4'>
                    <li>
                        <a href="https://www.facebook.com/andrew.magdy.31924" target='_blank'>
                            <FaFacebookF size={16} />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FaInstagram size={16} />
                        </a>
                    </li>
                    <li>
                        <a href="https://mail.google.com/mail/u/0/#inbox">
                            <SiGmail size={16} />
                        </a>
                    </li>
                </ul>

            </div>
        </div>
        {/* navbar */}
        <div className='shadow-md bg-white dark:bg-gray-900'>
                <nav className={`fixed h-full md:hidden w-[90%] md:w-[400px] top-0 left-0 bg-primary z-10 text-center p-5 duration-300 ease-linear transition-all ${open ? 'translate-x-0 opacity-1' : '-translate-x-full opacity-0'}`}>
                    <ul className='flex flex-col gap-12 justify-center items-center uppercase font-bold pt-10 text-2xl dark:text-white'>
                        <li className='hover:text-white duration-300cursor-pointer' onClick={handleClick}><IoIosCloseCircle size={60} /></li>
                        <li className='hover:text-white duration-300' onClick={handleClick}><Link href="/">Home</Link></li>
                        <li className='hover:text-white duration-300' onClick={handleClick}><Link href="/#products">Shop</Link></li>
                        <li className='hover:text-white duration-300' onClick={handleClick}><a href="#">About</a></li>
                    </ul>
                </nav>
            <div className='container flex py-3 px-4 mx-auto justify-between items-center'>
                <div className='md:hidden cursor-pointer dark:text-white' onClick={handleClick}><MdOutlineMenu size={30} /></div>
                <Image src="/logo.svg" alt='logo' width={150} className='w-[100px] md:w-[150px]' height={100} />
                <ul className='hidden md:flex gap-10 justify-center uppercase font-medium dark:text-white'>
                    <li className='hover:text-primary duration-300' onClick={handleClick}><Link href="/">Home</Link></li>
                    <li className='hover:text-primary duration-300' onClick={handleClick}><Link href="/#products">Shop</Link></li>
                    <li className='hover:text-primary duration-300' onClick={handleClick}><a href="#">About</a></li>
                </ul>
                <ul className='flex gap-4 justify-center items-center uppercase dark:text-white'>
                    <li className='hover:text-primary duration-300 cursor-pointer text-2xl md:mr-3' onClick={handleDarkMode}>{dark ? <CiLight /> : <MdOutlineDarkMode />}</li>
                    <li><a href="#"><RiSearchLine size={20} /></a></li>
                    <li className='relative'><Link href="/wishlist"><FiHeart size={20} /></Link><span className='absolute -top-3 -right-3 w-5 h-5 rounded-full bg-primary text-white text-sm flex justify-center items-center'>{stateWishlist.length || 0}</span></li>
                    
                    <li className='relative'>
                    <Link href="/Cart" >
                        <FiShoppingCart size={20} />
                    </Link>
                        <span className='absolute -top-3 -right-3 w-5 h-5 rounded-full bg-primary text-white text-sm flex justify-center items-center'>{cart.length || 0}</span>
                    </li>
                </ul>
            </div>
        </div>
    </header>
  )
}

export default Header