import React from 'react'
import logo from '../assets/Logo(Nav).png'

const Footer = () => {
  return (
    <>
      <div className='responsivePad bg-c-4-0 font-satoshi-medium text-c-3-0 py-8 max-md:py-4 h8'>

        <div className='flex justify-between items-center'> 

          <div className='flex items-center'> 
            <img src={logo} alt="" />
          </div>

          <ul className='flex space-x-4 max-md:hidden'>
            <li>
              <a href="#contacts">Contacts</a>
            </li>
            <li>
              <a href="#details">Location</a>
            </li>
            <li>
              <a href="#hero">Go Top</a>
            </li>
          </ul>

          <div className='space-x-4'>
            <a href=""><i className="fa-brands fa-instagram"></i></a>
            <a href=""><i className="fa-brands fa-facebook"></i></a>
          </div>

        </div>

      </div>
    </>
  )
}

export default Footer