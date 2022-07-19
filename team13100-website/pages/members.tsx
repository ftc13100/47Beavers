import React, { useEffect, useState } from 'react'
import Entry from '../components/members/entry';

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

  useEffect(() => {  
    const data:People = require('../public/assets/members.json');
    console.log(data.members)
    setMembers(data.members);
  }, [])
  

  return (
    <>
        {members.map(
          member => 
            <Entry key={member.name} image = {'/assets/members/' + member.img} Name = {member.name} Description = {member.description}/>
          )
        }
    </>
  )
}

export default Members;