import React, { useEffect, useState } from 'react'
import Entry from '../components/members/entry';
import Header from '../components/members/header';

type Props = {}

interface People {
  members: Person[]
}

interface Person {
  img: string,
  name: string,
  description: string
}

function Members({}: Props) {
  const [members, setMembers] = useState<Person[]>([]);
  const [mentors, setMentors] = useState<Person[]>([])

  useEffect(() => {  
    const membersData: People = require('../public/assets/members.json');
    const mentorsData: People = require('../public/assets/mentors.json');

    setMembers(membersData.members);
    setMentors(mentorsData.members);
  }, [])
  

  return (
    <>
      <Header title='47 Beavers Members'/>
      {
        members.map(
          member => 
            <Entry key={member.name} image = {'/assets/members/' + member.img} Name = {member.name} Description = {member.description}/>
        )
      }
      <Header title='47 Beavers Mentors'/>
      {
        mentors.map(
          mentor => 
            <Entry key={mentor.name} image = {'/assets/mentors/' + mentor.img} Name = {mentor.name} Description = {mentor.description}/>
        )
      }
    </>
  )
}

export default Members;