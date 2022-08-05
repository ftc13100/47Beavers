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
          member => 
            <Entry key={member.name} img = {'/assets/members/' + member.img} name = {member.name} description = {member.description}/>
        )
      }
      <Header title='47 Beavers Mentors'/>
      {
        mentors.sort(
          (a, b) => 
            a.name.localeCompare(b.name)
        )
        .map(
          mentor => 
            <Entry key={mentor.name} img = {'/assets/mentors/' + mentor.img} name = {mentor.name} description = {mentor.description}/>
        )
      }
    </>
  )
}

export default Members;