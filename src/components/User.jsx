import React from 'react';
import { useLoaderData } from 'react-router-dom';

const User = () => {
    const users=useLoaderData();

    const handleDelete=()=>{
        
    }
    return (
        <div>
           <h2> {users.length}</h2>
           <div>
            {
                users.map(user=>
                <p key={user._id}>
                    {user.name}: {user.email}<button onClick={handleDelete} >
                        X</button></p>)
            }
           </div>
        </div>
    );
};

export default User;