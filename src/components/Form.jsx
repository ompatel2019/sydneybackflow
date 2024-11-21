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
    formData.append('access_key', '4137160f-72eb-4e4a-983e-07995f90140f');
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
    'p-2 px-4 rounded-sm border border-gray-300 focus:border-c-1 focus:outline-none text-c-5-0 w-full hover:px-6 transition-all';

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
      <div className="responsivePad py-16 max-md:py-8 bg-c-4-0 space-y-8">
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

        <form className="text-c-4-0 space-y-4" onSubmit={onSubmit}>
          {inputFields.map((field) => (
            <div className="space-y-2" key={field.id}>
              <p>{field.label}</p>
              {field.type !== 'textarea' ? (
                <input
                  type={field.type}
                  id={field.id}
                  name={field.name}
                  placeholder={field.placeholder}
                  className={field.className}
                />
              ) : (
                <textarea
                  required
                  id={field.id}
                  name={field.name}
                  placeholder={field.placeholder}
                  className={field.className}
                  rows={field.rows}
                />
              )}
            </div>
          ))}
          <button className="bg-c-3-0 flex items-center p-2 space-x-2 font-medium rounded-sm px-6 w-full justify-center hover:bg-blue-300 transition-colors">
            <p>Send Inquiry</p>
            <i className="fa-regular fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
