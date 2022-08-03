import React,{useEffect, useState} from 'react'
import NavBar from './NavBar'
import Pet from './Pet'

export default function DogPage() {


  const [pets, setPets] = useState(null)

  const handleLike = (pet,e,id)=>{
    fetch('http://localhost:3000/likes',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
        Accept: "application/json"
      },
      body: JSON.stringify({
        pet,
        type: 'dog'})
    })
    e.target.disabled = true
    e.target.innerText = 'Added to Favorites'
    

  }

  const loadMore = ()=>{
    fetch('https://dog.ceo/api/breeds/image/random/20')
      .then((resp) => resp.json())
      .then((r)=> {
        setPets(pets.concat(r.message))
      }) 
  }


  useEffect(()=>{
      fetch('https://dog.ceo/api/breeds/image/random/20')
      .then((resp) => resp.json())
      .then((r)=> setPets(r.message))
      //dont know why it fetches two times???/!!!!!
      console.log('insdie useEffect Dog page')
    }
  ,[])

  return (
    <div>
        <div>
            <NavBar/> 
            
        </div>
        <h1>SecondPage</h1>
       {pets ? 
       <div className='card-container'>
          {pets.map((pet,count)=><Pet key={count} pet= {pet} handleClick={handleLike}/> )}
          <div id="button-div">
            <button id='loadButton' onClick={loadMore}>Load More Dogs</button>
          </div>
        </div> 
          : <h2>Loading</h2>}
    </div>
  )
}
