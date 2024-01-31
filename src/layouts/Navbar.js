import React from 'react'

export default function Navbar() {
  return (
    <div className='min-h-10 bg-white bg-opacity-10'>
      <nav className='w-4/5 m-auto flex justify-between items-center py-8'>
        <div className='flex justify-between items-center gap-x-14'>
          <h2 className='text-2xl h-full'>Web Designs</h2>
          <a className='h-full' href="">link 1</a>
          <a className='h-full' href="">link 2</a>
        </div>
        <button className='h-full border border-white rounded-3xl py-2 px-8'>Call to action</button>
      </nav>
    </div>
  )
}