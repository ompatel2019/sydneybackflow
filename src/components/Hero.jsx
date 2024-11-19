import React from 'react';
import HeroWrapper from './HeroWrapper';
import reasonablePricing from '../assets/reasonablePricing.svg'
import satisfaction from '../assets/satisfaction.svg'
import availability from '../assets/7availability.svg'

const Hero = ({heroTitle}) => {
  const perks = [
    {
      icon: reasonablePricing,
      perk: 'Reasonable Pricing'
    }, { 
      icon: satisfaction,
      perk: '100% Satisfaction Guarantee'
    }, { 
      icon: availability,
      perk: '24/7 Availability'
    }
  ]
  return (
    <div className='relative flex flex-col text-c-3-0 font-satoshi'>
      <HeroWrapper />
      <div className='absolute inset-0 bg-c-4-0 bg-opacity-40 w-full z-10'></div>

      {/* Text Content */}
      <div className='z-20 responsivePad py-24 max-md:py-8'>
        <div className='space-y-4'>
          <div className='bg-c-1-0 md:p-4 md:px-6 rounded-lg w-fit max-md:p-[0.25rem] max-md:py-2'>
            <p className='font-satoshi-bold h5 m2'>
                {heroTitle.toUpperCase()}
            </p>
          </div>

          <div className='space-y-8'>
            <h1 className='h2 font-satoshi-black'>
              Plumbing Experts in Sydney
            </h1>

            <div className='space-y-8'>
              {perks.map((perk, perkIndex) => (
                  <div key={perkIndex} className='flex gap-2 items-center'>
                    <div className='bg-c-1-0 rounded-full flex items-center justify-center w-[64px] h-[64px] lg:w-[96px] lg:h-[96px]'>
                      <img className='lg:w-9' src={perk.icon} alt=""/>
                    </div>
                    <p className='font-satoshi-medium h7'>{perk.perk}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
