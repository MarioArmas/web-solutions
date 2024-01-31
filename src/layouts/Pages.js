import React from 'react'
import WebPage from '../components/WebPage'
import data from '../data/webpages.json'

export default function Pages() {
  return (
    <section>
      {
        data["webpages"].map((el) => {
          return (
            <WebPage
              url={el.url}
              title={el.title}
            />
          )
        })
      }
    </section>
  )
}