import React, {useState} from "react";

function ToyForm({handleAddToy}) {

  const [toyObj, setToyObj] = useState({
    name: '',
    image: '',
    likes: 0
  })

  const handleChange = (event)=>{
    setToyObj({
      ...toyObj,
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
      body: JSON.stringify(toyObj)
    })
    .then((resp)=> resp.json())
    .then((toy)=> handleAddToy(toy))
    setToyObj({
      name:'',
      image: '',
      likes: 0
    })


  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name='name'
          placeholder="Enter a toy's name..."
          className="input-text"
          value={toyObj.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={toyObj.image}
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
