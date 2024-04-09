import React from 'react'

export default function Card(props) {
    // console.log(props.children)
  return (
    <div className={`card ${props.className}`}>
        {props.children}
    </div>
  )
}
