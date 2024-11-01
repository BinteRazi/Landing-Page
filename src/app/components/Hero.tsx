import React from 'react'

const Hero = () => {
  return (
    <div>
      <section>

     
       <div style={{backgroundImage: "url('/image/flower.jpg')", backgroundSize: 'cover', backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',height: '100vh' }}>
           <h1 className = 'text-center  font-bold text-2xl text-amber-400 h-12 pt-[200px]'>Welcome To My Website</h1>
           <p className='text-center font-medium text-xl text-amber-400 h-12 p-8'>Your journey to knowledge starts here!</p>

       <button className=' align-middle p-4 font-bold text-amber-800 bg-yellow-400 border-4 rounded-md '>Get Started</button>
        </div>
       </section>
       </div>
    
  )
};

export default Hero;
