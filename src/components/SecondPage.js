import React,{useEffect, useState} from 'react'
import NavBar from './NavBar'
import Pet from './pet'

export default function SecondPage() {

  const [pet, setPet] = useState('')

  useEffect(()=>{
      fetch('https://dog.ceo/api/breeds/image/random')
      .then(resp => resp.json())
      .then((r)=> setPet(r))
    }
  ,[])

  return (
    <div>
        <div>
            <NavBar/>
        </div>
        <h1>SecondPage</h1>
        <Pet pet= {pet} />
    </div>
  )
}
