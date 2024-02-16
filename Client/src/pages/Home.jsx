//import React from 'react'
import lady from '../assets/lady.png'

const Home = () => {
  return (
    <div className=' px-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 md:mt-5'>
        <div className='mt-4 md:mt-0'>
          <h1 className='text-3xl md:text-4xl font-bold mb-2'>Welcome to Tech<span className='text-success'>Girls</span></h1>
          <h5 className='text-base md:text-lg'>Now learning from anywhere, and build a <span className='text-success underline font-sans'>bright career</span></h5>
          <p className='pt-3 text-sm md:text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam vitae mollitia tenetur corporis. Natus ex nemo dicta obcaecati, sapiente, ut voluptate ratione modi iure accusantium similique, cupiditate dolores. Corrupti, dolorem!</p>
        </div>
        <div className='mt-3 md:mt-0'>
          <img src={lady} alt='lady' className='w-full' />
        </div>
      </div>
    </div>
    
  )
}

export default Home
