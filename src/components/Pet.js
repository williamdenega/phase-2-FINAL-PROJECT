import React from 'react'
import { useRouteMatch } from 'react-router-dom'



export default function Pet({pet,id, handleClick}) {
  const match = useRouteMatch()

  return (
    <div className='pet-card'>
      <img src={pet} alt={pet} />
      <button onClick={(e)=> handleClick(pet,e,id)}>
        {match.path === "/favorites" ? 'Delete' : 'Add to Favorites' }
      </button>
    </div>
    
   
  )
}
