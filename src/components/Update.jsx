import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const loaderUser=useLoaderData();

    const handleUpdate=event=>{
       event.preventDefault();
        const updateForm=event.target;
        const name=updateForm.name.value;
        const email=updateForm.email.value;
        const updated={name,email}
        console.log(name,email);
        fetch(`http://localhost:5000/users/${loaderUser._id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updated)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                alert('data modified successfully')
            }
        })
    }
    return (
        <div>
            <h3>Update information of {loaderUser?.name}</h3>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={loaderUser?.name} id="" /><br/>
                <input type="email" name="email" defaultValue={loaderUser?.email} id="" /><br/>
               <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;