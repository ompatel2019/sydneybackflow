import React from 'react'

const Detail = ({detail}) => {
  return (
    <>
      <div className='flex flex-col justify-around border-l-4 px-4 text-white space-y-4'>
        <div className='flex items-center space-x-1'>
          <img className='w-8 h-8' src={detail.photo} alt="" />
          <p className='font-satoshi-bold'>{detail.photoDescription}</p>
        </div>
        <p className='font-satoshi-medium'>{detail.description}</p>
        <a className='font-satoshi-black' href={detail.link}>{detail.linkDescription}</a>
      </div>
    </>
  )
}

export default Detail