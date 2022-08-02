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
    <div className={styles.container}>
      <div className={styles.item}>
        <img 
          src = { img } 
        />
      </div>
      <h1>{ name }</h1>
      <p>{ description }</p>
    </div>
  )
}