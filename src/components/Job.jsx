import React from 'react'
import job from '../assets/jobdone.jpg'

const Job = () => {
  return (
    <>
      <div className='grid grid-cols-2 max-lg:grid-cols-1 responsivePad py-16 md:py-12 max-md:py-8 space-y-12 max-lg:space-y-6 bg-c-4-0 text-c-3-0 font-satoshi md:space-x-10'>

      <h2 className='h4 font-satoshi-black lg:hidden text-center'>
            We get the job done! 
          </h2>

        <div>
          <img className='rounded-lg h-full w-fit' src={job} alt=""/>
        </div>

        <div className='flex flex-col space-y-6 max-lg:space-y-4'>

          <h2 className='h4 font-satoshi-black max-lg:hidden'>
            We get the job done! 
          </h2>

          <p className='max-lg:text-center'>
          Our commitment to excellence drives us to use only the best equipment, materials, and methods, ensuring our work consistently meets top industry standards. With this level of quality, we confidently back every job with a lifetime guarantee, knowing it’s built to last.
          </p>

          <p className='max-lg:text-center'>Beyond our superior services, we offer complimentary diagnostic assessments and a thorough plumbing inspection report, giving you a clear understanding of your property’s needs. Our detailed reports include actionable recommendations for necessary work, prioritizing urgent repairs and suggesting proactive maintenance options that can be managed through our annual plans. Our aim is to help you maintain your property in peak condition, offering long-term value and peace of mind.</p>   

          <button className='p-3 bg-c-3-0 rounded-md text-c-4-0 hover:bg-c-1-0 hover:text-c-3-0 transition-all font-satoshi-medium h8'>
            Get a Free Quote
          </button>
          
        </div>
      </div>
    </>
  )
}

export default Job