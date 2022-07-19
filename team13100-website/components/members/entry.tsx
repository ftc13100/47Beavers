import React from 'react'

type Props = {
    Image: string
    Name: string
    Description: string
}

export default function Entry({ Image, Name, Description }: Props) {
  return (
    <>
        <img src = { Image } />
        <h1>{ Name }</h1>
        <p>{ Description }</p>
    </>
  )
}