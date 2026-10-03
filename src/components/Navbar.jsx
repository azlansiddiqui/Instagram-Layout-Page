import React from 'react'
import Image from 'next/image'
import { GoHomeFill } from "react-icons/go";
import { RiMessengerLine } from "react-icons/ri";
import { FiPlusSquare } from "react-icons/fi";
import { MdOutlineExplore } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
const Navbar = () => {
  return (
    <nav className='bg-white flex justify-around items-center border-b-1 border-gray-400 shadow p-1 fixed top-0 left-0 right-0 z-1000'>
        <Image src={"/images/logo.png"} width={103} height={129} alt='logo' className=""/>
        <div className='relative'>
        <IoIosSearch className='absolute top-1 right-32' />
            <input type="text" placeholder='Search' className='w-full border border-gray-400 outline-none text-center'/>
        </div>
        <div className='flex items-center gap-2'>
        <GoHomeFill className='h-7 w-7' />
        <RiMessengerLine className='h-7 w-7' />
        <FiPlusSquare className='h-7 w-7'/>
        <MdOutlineExplore className='h-7 w-7'/>
        <FaRegHeart className='h-7 w-7'/>
        <img src="/images/user.png" alt="user" className='h-7 w-7 rounded-[50%]' />
        </div>
    </nav>
  )
}

export default Navbar