import React from 'react'

const footer = () => {
  const linkClass = 'hover:underline transition-all p'

  return (
    <>
      <div className='bg-c-3-0 responsivePad flex flex-col pt-12'>

        <div className='flex justify-between py-4'>
          <p>
            
          </p>

          <ul className='flex space-x-4 max-sm:space-x-2'>
            <li className={linkClass}><a href="sydneybackflow@bigpond.com">Email</a></li>
            <li className={linkClass}><a href="tel:0413546277">Phone</a></li>
            <li className={linkClass}><a href="https://g.co/kgs/qnNpbdD">Locations</a></li>
          </ul>

          <div className='space-x-2'>
            <i className="fa-brands fa-facebook cursor-pointer"></i>
            <i className="fa-brands fa-instagram cursor-pointer"></i>
          </div>
        </div>

        <div className='border-t-2 border-c-2-0 py-4'>
          <p className='text-center p m3'>
          © Sydney Backflow Plumbing & Excavation. All rights reserved.
          </p>
        </div>
      </div>
    </>
  )
}

export default footer