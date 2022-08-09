import React, {useEffect, useState} from 'react'
import NavBar from './NavBar'
import Pet from './Pet'

export default function CatPage() {

  const [cats, setCats] = useState(null)

  const handleLike = (pet,e,id)=>{
    fetch('http://localhost:3000/likes',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
        Accept: "application/json"
      },
      body: JSON.stringify({
        pet,
        type: 'cat'})
    })
    e.target.disabled = true
    e.target.innerText = 'Added to Favorites'
    

  }

  const loadMore = ()=>{
    fetch('https://api.thecatapi.com/v1/images/search?limit=20&api_key=dccd9337-e81b-4b72-8fb0-d8ac7c27119f')
      .then((resp) => resp.json())
      .then((moreCats)=> {
        setCats(cats.concat(moreCats))
      }) 
  }

  useEffect(()=>{
    fetch('https://api.thecatapi.com/v1/images/search?limit=20&api_key=dccd9337-e81b-4b72-8fb0-d8ac7c27119f')
    .then((resp)=> resp.json())
    .then((cats)=>setCats(cats))
    console.log('insdie useEffect cat page')
  },[])

  
  return (
    <div>
    <div>
            <NavBar/> 
            
        </div>
        <h1>Random Cats</h1>
        {cats ? <div className='card-container'>
          {cats.map((cat,count)=><Pet key={count} pet= {cat.url} handleClick={handleLike}/> )}
          <div>
            <button id='loadButton' onClick={loadMore}>Load More Cats</button>
          </div>
          
        </div> : <h2>loading</h2>}

    </div>
  )
}
