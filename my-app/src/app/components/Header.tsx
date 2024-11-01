import React from 'react'
import Link from 'next/link';

const Header = () => {
  return (
    <div className='bg-yellow-400'>
        <div className='text-amber-800 file flex justify-between items-center '>
      <header className='text-xl text-left cursor-pointer '>

      <Link href="/">
                    <img src='/image/logo.png' alt='Company Logo' width={50} height={50} className='cursor-pointer priority p-1'/>
                        
                </Link>
    
      
      <nav>
      <ul className='flex gap-9 cursor-pointer pl-[100px] '>
        <Link className='hover:text-red-600' href="/">Home</Link>
        <Link className='hover:text-blue-600'href="/">About Us</Link>
        <Link className='hover:text-green-600'href="/">Skills</Link>
        <Link className='hover:text-purple-800'href="/">Contact Us</Link>
        
      </ul>
      </nav>
      </header>
      </div>
    </div>
  )
};

export default Header;
