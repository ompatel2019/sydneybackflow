import React from 'react'
import tick from '../assets/tick.svg'

const Cta = () => {
  const perks = [
    'Fast Response To Inquiry', '20+ Years of Proven Expertise', 'Master-level Professionals', 'Craftsmanship You Can Count On'
  ]
  return (
    <>
      <div className='bg-c-1-0 responsivePad font-satoshi py-18 md:py-14 max-md:py-10 space-y-12 text-c-3-0'>
        <h2 className='font-satoshi-black h4 text-center'>Available around the clock, every day of the year!</h2>

        <div className='grid grid-cols-2 space-y-8 place-items-center max-md:grid-cols-1'>
          {
            perks.map((perk, perkIndex) => (
              <div key={perkIndex} className='flex space-x-2 items-center'>
                <img className='max-md:w-8' src={tick} alt="" />
                <p className='font-satoshi-medium h8'>{perk}</p>
              </div>
            ))
          }
        </div>

        <div className='flex space-x-4 items-center justify-center h8 font-satoshi-medium'>
          <a href="tel:0413546277">
            <button className='bg-c-4-0 p-4 max-md:p-3 rounded-md transition-all ease-in duration-150 hover:bg-green-400 hover:text-c-4-0'>Call 0413 546 277</button>
          </a>
          <a href="#contact">
            <button className='bg-c-3-0 rounded-md text-c-4-0 p-4 max-md:p-3 transition-all ease-in duration-150 hover:bg-orange-400 hover:text-c-3-0'>Get a Free Quote</button>
          </a>
        </div>
      </div>
    </>
  )
}

export default Cta