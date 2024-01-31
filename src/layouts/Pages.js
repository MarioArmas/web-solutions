import React from 'react'
import WebPage from '../components/WebPage'
import data from '../data/webpages.json'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function Pages() {
  return (
    <section className='min-h-screen w-4/5 m-auto bg-white'>
      <Carousel responsive={responsive}>
        {
          data["webpages"].map((el) => {
            return (
              <WebPage
                key={el.url}
                url={el.url}
                title={el.title}
                imageSrc={el.image}
              />
            )
          })
        }
      </Carousel>
    </section>
  )
}