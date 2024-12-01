import React from 'react';
import Service from './Service';

const Services = () => {
  const services = [
    { 
      serviceName: 'Service #1',
      service: ''
    },
    { 
      serviceName: 'Service #2',
      service: ''
    },
    { 
      serviceName: 'Service #3',
      service: ''
    },
    { 
      serviceName: 'Service #4',
      service: ''
    },
    { 
      serviceName: 'Service #5',
      service: ''
    },
    { 
      serviceName: 'Service #6',
      service: ''
    },
  ];

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

        <div className='grid grid-cols-3 gap-4'>
          {services.map((service, serviceIndex) => (
            <Service key={serviceIndex} service={service} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
