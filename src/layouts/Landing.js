import React from 'react'

export default function Landing() {
  return (
    <section className='h-full relative w-4/5 m-auto'>
      <div className='absolute right-0 top-56 w-96'>
        <h1 className='text-5xl font-bold w-fit text-left'>La solución perfecta para tu presencia en línea</h1>
        <p className='w-full text-lg text-left'>Con nuestra experiencia en diseño y desarrollo web, creamos soluciones a medida que reflejan la esencia de tu marca y optimizan la experiencia del usuario. Creamos sitios web elegantes y funcionales para destacarte en un mercado competitivo.</p>
        <button className='absolute left-0 bg-white text-black py-2 px-8 mt-2'>Call to action</button>
      </div>
    </section>
  )
}