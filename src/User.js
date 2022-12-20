import React from 'react';
import './assets/css/user.css'

const User = ({user, handleDelete}) => {
   
    return (
        <div className='card'>
            <div className='card-element'>
                <h3>Name: {user.name}</h3>
                <h3>Phone: {user.phone}</h3>
            </div>
            <button onClick={()=>handleDelete(user.id)}>Delete User</button>
            <button>Edit User</button>
        </div>
    );
}

export default User;
