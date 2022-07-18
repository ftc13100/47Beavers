import React from 'react'
import Link from '../node_modules/next/link';

export default function Home() {
  return (
    <>
        <div>Home</div>
        <Link href='/'>
            <a>Back to home</a>
        </Link>
    </>
  )
}