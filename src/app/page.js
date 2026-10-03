import CardPractice from '@/components/CardPractice'
import Comment from '@/components/Comment'
import Navbar from '@/components/Navbar'
import Post from '@/components/Post'
import Reactions from '@/components/Reactions'
import Story from '@/components/Story'
import { storyIcons } from '@/data/storyIcons'
import React from 'react'

const page = () => {
  return (
    <>
     <Navbar/>
    <main className='flex justify-center items-center mt-11' >
      <section className=' h-auto m-3 w-[500px] border flex flex-col justify-center  rounded-lg shadow border-gray-400'>
      <div className='flex gap-4 px-3' >{storyIcons.map((item)=>(
          <Story key={item.id} name={item.name} pic={item.icon} />
        ))}
        </div>
        <Post/>
        <Reactions/>
        <div className='px-3 '>
          <p className='font-semibold text-[14px]'>1,069 likes</p>
          <p className='text-[11.5px]'>terrylucas Imperdiet in sit rhoncus, eleifend tellus augue lectus potenti pellentesque <span className='text-gray-400'>...more</span></p>
          <p className='text-[13px] text-gray-400'>View all 100 comments</p>
          <p className='mt-2 mb-2 text-[11px] text-gray-400'>1 HOUR AGO</p>
        </div>
        <Comment/>
      </section>
      
  
    </main> 
    </>
  )
}

export default page