import React from 'react';
import HeroImage from '../assets/hero.png';

const HeroWrapper = () => {
  return (
    <div className='absolute inset-0 z-0'>
      <img 
        src={HeroImage}
        alt="Background"
        className='w-full h-full object-cover'
      />
    </div>
  );
};

export default HeroWrapper;
