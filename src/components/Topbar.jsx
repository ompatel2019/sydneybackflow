import React from 'react'
import logo from '../assets/Logo(Nav).png'

const Topbar = () => {
  const linkClass = 'hover:text-c-1-0 transition-all hover:translate-y-[-2px] duration-200';
  return (
    <>
      <div className='flex responsivePad items-center font-satoshi-medium bg-c-3-0 justify-between py-4 p m3 max-md:py-2 sticky top-0 z-50'>

        <a href="#hero">
          <div className='flex items-center'>
            <img src={logo} alt="" />
            <p>Sydney Backflow & Plumbing</p>
          </div>
        </a>

        <div className='flex items-center space-x-6'>
          <ul className='flex max-md:hidden space-x-4'>
            <li className={linkClass} > <a href="#hero">Home</a> </li>
            <li className={linkClass}> <a href="#services">Services</a> </li>
            <li className={linkClass}> <a href="#about">About</a> </li>
            <li className={linkClass}> <a href="#details">Contact</a> </li>
          </ul>

          <a href="#contact">
            <button className='bg-c-1-0 p-2 px-4 text-white rounded-md hover:bg-c-5-0 transition-all ease-out duration-200 hover:px-6 hover:bg-c-4-0'>
              Book Online
            </button>
          </a>
        </div>
      </div>
    </>
  )
}

export default Topbar