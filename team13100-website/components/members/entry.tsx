import React from 'react'

type Props = {
    image: string
    Name: string
    Description: string
}

export default function Entry({ image, Name, Description }: Props) {
  return (
    <>
        <img src = { image } />
        <h1>{ Name }</h1>
        <p>{ Description }</p>
    </>
  )
}