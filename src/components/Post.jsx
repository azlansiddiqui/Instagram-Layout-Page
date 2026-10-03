import Image from 'next/image'
import React from 'react'
import { IoIosMore } from "react-icons/io";

const Post = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-4.5 border-t border-gray-400' >
            <div className='flex justify-around items-center w-[800px]'>
                <div className='flex gap-2 items-center mb-1'>
                    <div className='flex flex-col mt-2 relative items-center justify-center h-9 w-9 rounded-[50%] bg-gradient-to-r from-yellow-500 via-purple-500 to-pink-500'>
                        <img src={"/images/user2.png"} alt="" className='h-8 w-8 rounded-[50%] absolute' />
                    </div>
                    <p>terrylucas</p>
                </div>
                <div> <IoIosMore /></div>
               
            </div>
            <Image src={"/posts/post1.png"} width={500} height={600}/>
        </div>
    )
}

export default Post