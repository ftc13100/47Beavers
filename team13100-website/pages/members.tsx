import React, { useEffect, useState } from 'react'
import styles from '../styles/Members.module.scss'
import Image from 'next/image'
import Head from 'next/head';
import { Person } from '../components/types';


export default function Members() {
  const [members, setMembers] = useState<Person[]>([]);
  const [mentors, setMentors] = useState<Person[]>([])

  useEffect(() => {  
    setMembers(require('../public/assets/members.json').members);
    setMentors(require('../public/assets/mentors.json').members);
  }, [])
  
  return (
    <div className={styles.header}> 
      <Head>
        <title>Members - 47 Beavers</title>
        <meta name="members" content="Page for members and mentors of FTC Team 13100" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
          alt= {`Image of ${name}`} 
          objectFit = 'contain'
          sizes="(min-width: 75em) 33vw,
              (min-width: 48em) 50vw,
              100vw"
        />
      </div>
      <div className={styles.item}>
        <h1>{ name }</h1>
        <p>{ description }</p>
      </div>
    </div>
  )
}