import React, {useEffect, useState} from 'react'
import NavBar from './NavBar'
import Pet from './Pet'

export default function Favorites() {

  const [favorites, setFavorites] = useState([])
  // const [displayList, setDisplayList ] = useState([])
  const [filter, setFilter] = useState("all")

  useEffect(()=>{
    fetch('http://localhost:3000/likes')
    .then((resp)=> resp.json())
    .then((pets)=>{ 
      setFavorites(pets)
      // setDisplayList(pets)
    })
  },[])




  const handleDelete = (pet,e,id)=>{
    fetch(`http://localhost:3000/likes/${id}`,{
      method: 'Delete'
    })
    .then(resp => resp.json())
    .then(() => {
      const newList = favorites.filter((item)=> item.pet !== pet )
      setFavorites(newList)
    })

    
    // setDisplayList(newList)  

  }

  const handleFilter = (value)=>{
    setFilter(value)
    // if(value !== 'all'){
    //   const FilteredList = favorites.filter((pet)=> pet.type === value)
    //   setDisplayList(FilteredList)
    // }else{
    //   setDisplayList(favorites)
    // }
  }

  const filteredList = favorites.filter(favorite => {
    if(filter === "all"){
      return favorite
    } else if(filter === "cat"){
      return favorite.type === "cat"
    } else{
      return favorite.type === "dog"
    }
  })

  console.log(filteredList)

  return (
    <div>
      <div>
        <NavBar/>
      </div>

      <h1>Favorites</h1>
      

      <div className="filterBox">
         <h3>Filter By: </h3>
        <select onChange={e=> handleFilter(e.target.value)} name='pet'>
          <option value='all'>All</option>
          <option value='dog'>Dogs</option>
          <option value='cat'>Cats</option>
        </select>
      </div>

      <div className='card-container'>
        {filteredList.map((pet)=> <Pet key={pet.id} pet= {pet.pet} id={pet.id}  handleClick={handleDelete}/> )}
      </div>
    </div>
  )
}
