import React, {useState} from "react";

function PetForm({handleAddPet}) {

  const [petObj, setPetObj] = useState({
    pet: '',
    type: ''
  })

  const handleChange = (event)=>{
    setPetObj({
      ...petObj,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    fetch(`http://localhost:3000/likes`,{
      method: "POST",
      headers: {
        'Content-Type': "application/json",
      },
      body: JSON.stringify(petObj)
    })
    .then((resp)=> resp.json())
    .then((pet)=> handleAddPet(pet))
    setPetObj({
      pet: '',
      type: ''
    })


  }

  return (
    <div className="container">
      <form className="add-pet-form" onSubmit={handleSubmit}>
        <h3>Add your own Pet!</h3>
        <input
          type="text"
          name="pet"
          placeholder="Enter a Pet's image URL..."
          className="input-text"
          value={petObj.pet}
          onChange={handleChange}
        />
        <br />
        <h3>Select the type of Pet</h3>
        <input 
        type="radio" 
        id="dog_radioBTN" 
        name="type" 
        value="dog"
        onChange={handleChange}
        required
        />
        <label htmlFor="dog">DOG</label>
        <input 
        type="radio" 
        id="cat_radioBTN" 
        name="type" 
        value="cat"
        onChange={handleChange}
        required
        />
        <label htmlFor="cat">CAT</label>
        <br/>
        <br />
        <input
          type="submit"
          name="submit"
          value="Add New Pet"
          className="submit"
        />
      </form>
    </div>
  );
}

export default PetForm;
