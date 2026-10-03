import React from 'react'
import { LuSend } from "react-icons/lu";
import { FaRegComment } from "react-icons/fa6"; 
import { FaRegHeart } from "react-icons/fa"; 
import { FaRegBookmark } from "react-icons/fa6";
const Reactions = () => {
   
  return (
    <div className='flex items-center justify-between px-2'>
        <div className='flex items-center gap-1 p-2' >
            <button o><FaRegHeart className='h-5 w-5'/></button>
            <button><FaRegComment className='inline-block scale-x-[-1] h-5 w-5'  /></button>
            <button><LuSend className='h-5 w-5'/></button>
        </div>
        <FaRegBookmark className='h-5 w-5'/>
    </div>
  )
}

export default Reactions