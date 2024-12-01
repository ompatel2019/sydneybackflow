import React from 'react';
import placeHolder from '../assets/placeholder.jpg'

const Service = ({ service }) => {
  return (
    <div className='hover:translate-y-[-4px] transition-all duration-150 ease-out'>
      <p className='h8'>
        {service.serviceName}
      </p>
    <img className='rounded-lg' src={placeHolder} alt="" /> 
    </div>
  );
};

export default Service;
