import React from 'react'
import Link from 'next/link';


const Footer = () => {
  return (
      <div className='bg-yellow-400 '>
      <div className='text-amber-800 file flex p-4'>
      <footer className='text-xl m-2 cursor-pointer'>
        <p className='pl-[900px]'>@ 2024 Your Company. All right reserved</p>

        <div className='flex justify-end items-center text-amber-800 space-x-4'>
        <Link className='hover:underline' href="/"><img src='/image/fb icon.png' alt="fb icon" width={30} height={30} 
        className='cursor-pointer priority justify-start '/>Facebook</Link>
        <Link className='hover:underline'href="/"><img src='/image/ista icon.jpg' alt="insta icon" width={30} height={30} 
        className='cursor-pointer priority justify-start '/>Instagram</Link>
        <Link className='hover:underline'href="/"><img src='/image/tw icon.png' alt=" tw icon" width={30} height={30} 
        className='cursor-pointer priority justify-start '/>Twitter</Link>
        </div>

          </footer>
        </div>
      </div>
  )
};

export default Footer;
