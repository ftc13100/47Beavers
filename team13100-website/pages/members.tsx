import React, { useEffect, useState } from 'react'
import styles from '../styles/Members.module.scss'
import Image from 'next/image'

interface Person {
  img: string,
  name: string,
  description: string
}

export default function Members() {
  const [members, setMembers] = useState<Person[]>([]);
  const [mentors, setMentors] = useState<Person[]>([])

  useEffect(() => {  
    setMembers(require('../public/assets/members.json').members);
    setMentors(require('../public/assets/mentors.json').members);
  }, [])
  

  return (
    <div className={styles.header}>
      <h1>47 Beavers Members</h1>
      
      {
        members.sort(
          (a, b) => 
            a.name.localeCompare(b.name)
        )
        .map(
          ({name, img, description}) => 
            <Entry 
              key={name}
              img = {`/assets/members/${img}`}
              name = {name}
              description = {description}
            />
        )
      }
      
      <h1>47 Beavers Mentors</h1>
      
      {
        mentors.sort(
          (a, b) => 
            a.name.localeCompare(b.name)
        )
        .map(
          ({name, img, description}) => 
            <Entry 
              key={ name } 
              img = {`/assets/mentors/${img}`}
              name = {name}
              description = {description}
            />
        )
      }
    </div>
  )
}

const Entry = ({ img, name, description }: Person) => {
  return (
    <div className={styles.entry}>
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
  )
}