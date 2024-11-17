import React from 'react';
import '../ServicesLine.css'; // Ensure to import the CSS file for styling

const ServicesLine = () => {
  const servicesArray = [
    'Drain cleaning', 'Tap installation', 'Tap repair', 'Waste disposal installation',
    'Waste disposal repair', 'Outdoor plumbing system repair', 'Plumbing leak detection',
    'Plumbing pipe repair', 'Sewer repair', 'Shower installation', 'Shower repair',
    'Toilet installation', 'Toilet repair', 'Water heater installation', 'Water heater repair',
    'Hot water service'
  ];

  return (
    <div className='bg-c-1 font-satoshi p'>
      <div className="services-scroll">
        <div className="scrolling-content py-4 max-md:py-2">
          {servicesArray.map((service, index) => (
            <a
              key={`service-${index}`}
              className='service-item'
              href="#services"
            >
              <div className="mr-[1rem]">{service.toUpperCase()}</div>
            </a>
          ))}
          {servicesArray.map((service, index) => (
            <a
              key={`service-duplicate-${index}`}
              className='service-item'
              href="#services"
            >
              <div>{service}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesLine;
