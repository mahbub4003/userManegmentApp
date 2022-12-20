import React from 'react';
import User from './User';
import './assets/css/users.css'

const Users = ({users, handleDelete}) => {
  
    return (
      <div className='users'>
        {users.map((user)=>{
            return(<User key={user.id} handleDelete={handleDelete} user={user}/>)
        })}
      </div>
    );
}

export default Users;
