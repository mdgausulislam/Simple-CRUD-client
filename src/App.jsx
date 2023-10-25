import React from 'react'
import './App.css'

function App() {
  const handleWithForm=event=>{
    event.preventDefault();
    const userForm=event.target;
    const name=userForm.name.value;
    const email=userForm.email.value;
    const user={
      name,email
    }
    console.log(user);

    fetch('http://localhost:5000/users',{
      method:'POST',
     headers:{
      'content-type':'application/json'
     },
     body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)

      if(data.insertedId){
        alert('user added success');
        userForm.reset();
      }
    })
  }

  return (
    <>
      <h1>Simple Crud</h1>
      <form onSubmit={handleWithForm}>
        <input type="text" name="name" id="" placeholder='name' />
        <br />
        <input type="email" name="email" id="" placeholder='email' />
        <br />
        <input type="submit" value="Add User" />
      </form>
    </>
  )
}

export default App
