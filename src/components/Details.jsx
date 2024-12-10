import React from 'react'
import Detail from './Detail'
import location from '../assets/location.svg'
import email from '../assets/email.svg'
import phone from '../assets/phone.svg'

const Details = () => {
  const details = [
    {
      photo: location,
      photoDescription: 'Location',
      description: 'Sydney to Wollongong Region',
      linkDescription: 'Visit Map',
      link:'https://g.co/kgs/qnNpbdD'
    }, 
    {
      photo: email,
      photoDescription: 'Email',
      description: 'sydneybackflow@bigpond.com',
      linkDescription: 'Send Email',
      link:'mailto:sydneybackflow@bigpond.com'
    }, 
    {
      photo: phone,
      photoDescription: 'Phone',
      description: '0413 536 277',
      linkDescription: 'Call',
      link:'tel:0413546277'
    }, 
  ]
  return (
    <>
      <div id='details' className='responsivePad bg-c-1-0 py-20 max-md:py-12 space-y-12'>
        <div className='text-white text-center space-y-4 max-md:space-y-2'>
          <h2 className='font-satoshi-black h4'>
            Our Details
          </h2>
          <p className='font-satoshi-medium h8'>
            We're closer than you think!
          </p>
        </div>

        <div className='flex mr-auto justify-around max-md:flex-col max-md:space-y-10'>
          {
            details.map((detail, detailIndex) => (
              <a href={detail.link} 
              key={detailIndex} 
              target="_blank" 
              rel="noopener noreferrer">
                <Detail key={detailIndex} detail={detail}/>
              </a>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Details