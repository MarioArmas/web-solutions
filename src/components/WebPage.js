import React from 'react'

export default function WebPage({ url, title, imageSrc = '../assets/bg-image.jpg' }) {
  return (
    <div className='p-3 bg-black m-1'>
      <a href={url} target='_blank' rel='noreferrer'>
        <img
          className='h-36 w-72 object-cover'
          src={process.env.PUBLIC_URL + imageSrc}
          alt={title}
        ></img>
      </a>
      <h2>{title}</h2>
    </div>
  )
}