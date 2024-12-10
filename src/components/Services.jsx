import React from 'react';
import Service from './Service.jsx'; 
import services from '../services'; 

const Services = () => {
  return (
    <>
      <div id='services' className='bg-c-3-0 responsivePad lg:py-20 py-16 md:py-12 max-md:py-8 space-y-12 font-satoshi-bold'>
        <div className='space-y-4'>
          <h2 className='h4 text-left font-satoshi-black'>
            Our Plumbing Solutions
          </h2>
          <p className='font-satoshi-medium h8'>
            We prioritize exceptional quality, utilizing premium equipment, materials, and techniques. Our high standards allow us to offer a lifetime guarantee on all of our work with complete confidence.
          </p>
        </div>

        <div className='grid grid-cols-3 gap-4 max-md:grid-cols-2'>
          {services.map(service => (
            <Service key={service.id} serviceId={service.id} serviceIndex={service.index} serviceImg={service.serviceImg} serviceName={service.serviceName} />
          ))}
        </div>

      </div>
    </>
  );
};

export default Services;
