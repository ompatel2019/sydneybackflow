import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='responsivePad bg-c-4-0 font-satoshi text-c-3-0 py-8 max-md:py-4 h9'>

        <div className='flex justify-around'> 

        <p>
          Logo
        </p>

        <ul className='flex space-x-4 max-md:hidden'>
          <li>
            <a href="#contacts">Contacts</a>
          </li>
          <li>
            <a href="">Location</a>
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