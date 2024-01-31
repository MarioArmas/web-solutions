import React from 'react'

export default function WebPage({ url, title }) {
  return (
    <div>
      <h2>{ title }</h2>
      <a href={ url }>link</a>
    </div>
  )
}