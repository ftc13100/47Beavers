import React, { useEffect, useState } from 'react'
import Entry from '../components/members/entry';
import Header from '../components/members/header';

interface Person {
  img: string,
  name: string,
  description: string
}

function Members() {
  const [members, setMembers] = useState<Person[]>([]);
  const [mentors, setMentors] = useState<Person[]>([])

  useEffect(() => {  
    setMembers(require('../public/assets/members.json').members);
    setMentors(require('../public/assets/mentors.json').members);
  }, [])
  

  return (
    <>
      <Header title='47 Beavers Members'/>
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
      <Header title='47 Beavers Mentors'/>
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
    </>
  )
}

export default Members;