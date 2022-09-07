import Image from 'next/image'
import styles from '../styles/Members.module.scss'
import { Person } from '../types'

const Entry = ({ img, name, description }: Person) => {
    return (
      <div className={styles.entry}>
        <div className={styles.image}>
          <Image 
            src = { img } 
            layout = "fill" 
            objectFit = 'contain'
            alt={`Image of ${name}`}
          />
        </div>
        <div className={styles.item}>
          <h1>{ name }</h1>
          <p>{ description }</p>
        </div>
      </div>
    )
  }