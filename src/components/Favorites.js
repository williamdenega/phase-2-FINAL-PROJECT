import React, {useEffect, useState} from 'react'
import NavBar from './NavBar'
import Pet from './pet'

export default function Favorites() {

  const [favorites, setFavorites] = useState([])

  useEffect(()=>{
    fetch('http://localhost:3000/likes')
    .then((resp)=> resp.json())
    .then((pets)=> setFavorites(pets))
  },[])



  const handleDelete = (pet,e,id)=>{
    fetch(`http://localhost:3000/likes/${id}`,{
      method: 'Delete'
    })

    const newList = favorites.filter((item)=> item.pet !== pet )
    setFavorites(newList)

  }





  return (
    <div>
      <div>
        <NavBar/>
      </div>
      <h1>Favorites</h1>
      <div className='card-container'>
        {favorites.map((pet)=> <Pet key={pet.id} pet= {pet.pet} id={pet.id}  handleClick={handleDelete}/> )}
      </div>
    </div>
  )
}
