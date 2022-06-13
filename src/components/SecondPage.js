import React,{useEffect, useState} from 'react'
import NavBar from './NavBar'
import Pet from './pet'

export default function SecondPage() {


  const [pets, setPets] = useState(null)
  const handleLike = (pet,e,id)=>{
    fetch('http://localhost:3000/likes',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
        Accept: "application/json"
      },
      body: JSON.stringify({pet})
    })
    e.target.disabled = true
    e.target.innerText = 'Added to Favorites'
    

  }



  useEffect(()=>{
      fetch('https://dog.ceo/api/breeds/image/random/21')
      .then((resp) => resp.json())
      .then((r)=> setPets(r.message))

    }
  ,[])

  return (
    <div>
        <div>
            <NavBar/> 
            
        </div>
        <h1>SecondPage</h1>
       {pets ? <div className='card-container'>
          {pets.map((pet,count)=><Pet key={count} pet= {pet} handleClick={handleLike}/> )}
          
        </div> : <h2>Loading</h2>}
        {/* {pets.map((pet,count)=>console.log(pet) )} */}
    </div>
  )
}
