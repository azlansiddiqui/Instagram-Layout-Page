import React from 'react'

const Story = ({name,pic}) => {
  return (
    <div className='flex flex-col mt-2 relative items-center justify-center h-13 w-13 rounded-[50%] bg-gradient-to-r from-yellow-500 via-purple-500 to-pink-500'>
        <img src={pic}alt="" className='h-12 w-12 rounded-[50%] absolute' />
        <p className='mt-17 text-[13px]'>{name}</p>
    </div>
  )
}

export default Story