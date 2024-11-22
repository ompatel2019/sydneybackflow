import React from 'react'
import stars from '../assets/Stars.svg';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jessie W",
      testimonial: "Top-notch work! Adrian is the most reliable and smart plumber I’ve ever met, good at detecting and pinpointing issues and problem solving, providing sound and trustworthy professional advice, delivering quality work efficiently for a fair price. Highly recommended!"
    }, 
    {
      name: "Liz Seidi",
      testimonial: "If you need honest and reliable advice and very reasonable rates This is the company you should be using. Totally impresse ."
    }
  ]
  return (
    <>
      <div className='bg-c-3-0 responsivePad py-20 max-md:py-8 space-y-8'>
        <div className="space-y-4">
          <h2 className="font-satoshi-black h4">Customer Testimonials</h2>
          <p className="font-satoshi-medium h8">
            Listen to what our customers have said about us!
          </p>
        </div>

        <div className="flex justify-between max-md:flex-col md:space-x-10 font-satoshi h8">
          {
            testimonials.map((testimonial, testimonialIndex) => (
              <div className="w-full space-y-4">
                <img src={stars} alt="" />
                <p className>
                  {testimonial.testimonial}
                </p>
                <p className="font-satoshi-bold">
                  {testimonial.name}
                </p>
              </div>
            ))
          }
        </div>
      </div>    
    </>
  )
}

export default Testimonials