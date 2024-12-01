import React from 'react'
import aboutImg from '../assets/aboutUs.jpg'

const AboutUs = () => {
  return (
    <>
      <div id='about' className='bg-c-3-0 responsivePad py-24 max-md:py-10 space-y-8'>
        <div className="max-lg:space-y-4 lg:flex justify-between">
          <h2 className="font-satoshi-black h4 w-full">About Us</h2>
          <p className="font-satoshi-medium h8 w-full">
          Sydney Backflow and Plumbing has been in operation since 2001. We service Domestic , industrial and commercial clients within the Sydney to Wollongong regions. With fast response times and upfront reasonable costs. Services from sewer line unblock ages/ repairs , hot water service repair and replacement including commercial Raypak boilers, busted hot/ cold water lines including header tank service, shopping center and service station maintenance all done with a friendly smile. We have been serving the same clientele for 20 years. Our quality of service and knowledge is what makes us different.
          </p>
        </div>

        <div>
          <img className='rounded-md' src={aboutImg} alt="" />
        </div>
      </div>    
    </>
  )
}

export default AboutUs