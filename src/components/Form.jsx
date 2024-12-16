import React, { useState } from 'react';
import phone from '../assets/phone.svg';
import date from '../assets/date.svg';
import tick from '../assets/newTick.svg';

const Form = () => {
  const perks = [
    {
      image: phone,
      header: 'Contact Us',
      description: 'Reach out to schedule a plumbing service with us.',
      extendedDescription:
        "Reach out to schedule a plumbing service with us. Our experienced team is ready to efficiently tackle your plumbing issues, whether they're big or small.",
    },
    {
      image: date,
      header: 'Choose Date',
      description: 'Select a convenient time, and we’ll be ready to assist.',
      extendedDescription:
        "Select a convenient time for your service, and we’ll be ready to assist. We offer flexible scheduling to meet your needs and ensure prompt, reliable help.",
    },
    {
      image: tick,
      header: 'Job Done!',
      description: 'Sit back as we handle the job with precision and care.',
      extendedDescription:
        'Sit back as we handle the plumbing job with precision. Our skilled professionals are dedicated to resolving your issues quickly and effectively.',
    },
  ];

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append('access_key', 'a8e0995a-e8dd-496e-829e-e803772adc30');
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setIsSubmitted(true);
      event.target.reset();

      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFadeOut(false);
        }, 1000);
      }, 2000);
    }
  };

  const inputFieldClass =
    'p-2 px-4 rounded-sm focus:border-c-1 focus:outline-none text-c-5-0 w-full hover:px-6 transition-all bg-transparent border-b-2';

  const inputFields = [
    {
      label: 'Name',
      type: 'text',
      id: 'name',
      name: 'name',
      placeholder: 'Full Name*',
      className: inputFieldClass,
    },
    {
      label: 'Contact',
      type: 'text',
      id: 'contact',
      name: 'contact',
      placeholder: 'Contact No.*',
      className: inputFieldClass,
    },
    {
      label: 'Email',
      type: 'email',
      id: 'email',
      name: 'email',
      placeholder: 'Email',
      className: inputFieldClass,
    },
    {
      label: 'Message',
      type: 'textarea',
      id: 'message',
      name: 'message',
      placeholder: 'Inquiry*',
      className: inputFieldClass,
      rows: 5,
    },
  ];

  return (
    <>
      <div id='contact' className="responsivePad py-20 max-md:py-12 bg-c-4-0 space-y-8">
        <div className="text-white text-center space-y-4 max-md:space-y-2">
          <h2 className="font-satoshi-black h4">Get in touch</h2>
          <p className="font-satoshi-medium h8">
            We will get back to you as soon as possible!
          </p>
        </div>

        <div className="flex space-x-4 max-md:hidden">
          {perks.map((perk, perkIndex) => (
            <div
              key={perkIndex}
              className="flex flex-col bg-c-3-0 w-full justify-center items-center rounded-2xl p-4 lg:p-6 space-y-4 py-8 lg:py-12 lg:space-y-8"
            >
              <div className="bg-c-1-0 rounded-full p-6 lg:p-8">
                <img className="w-10 lg:w-14" src={perk.image} alt="" />
              </div>

              <div className="space-y-2">
                <h3 className="h7 font-satoshi-bold text-center">
                  {perk.header}
                </h3>
                <p className="text-center font-satoshi lg:hidden">
                  {perk.description}
                </p>
                <p className="text-center font-satoshi max-lg:hidden">
                  {perk.extendedDescription}
                </p>
              </div>
            </div>
          ))}
        </div>

        <form className="text-c-3-0 space-y-8" onSubmit={onSubmit}>
          <div className='flex space-x-4'>
            <input 
              required 
              type="text" 
              id="name" 
              name="name" 
              placeholder='Full Name*' 
              className={inputFieldClass} 
              />

            <input 
              required 
              type="text" 
              id="contact" 
              name="contact" 
              placeholder='Contact No.*' 
              className={inputFieldClass} 
              />
          </div>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder='Email' 
              className={inputFieldClass} 
              />
              <textarea
                required
                id= "message"
                name="message"
                placeholder="Inquiry*"
                className= {`${inputFieldClass} `}
                rows="10"
              />
          <button className="bg-c-1-0 flex items-center p-4 space-x-2 font-medium rounded-sm px-6 w-full justify-center hover:bg-blue-300 transition-colors h8 font-satoshi-medium text-white">
            <p>Submit</p>
            <i className="fa-regular fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
