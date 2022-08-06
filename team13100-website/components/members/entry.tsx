import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Members.module.scss'

type Props = {
    img: string
    name: string
    description: string
}

export default function Entry({ img, name, description }: Props) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.image}>
          <Image 
            src = { img } 
            layout = "fill" 
            objectFit = 'contain'
          />
        </div>
        <div className={styles.item}>
          <h1>{ name }</h1>
          <p>{ description }</p>
        </div>
      </div>
    </>
  )
}