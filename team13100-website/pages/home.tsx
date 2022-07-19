import React from 'react'
import Link from 'next/link';
import HomeDiv from '../components/home';

export default function Home() {
  return (
    <>
      <HomeDiv />
        <Link href='/'>
            <a>Back to home</a>
        </Link>
    </>
  )
}