import React, { useState } from 'react';

const AddUser = ({userText}) => {
    const [newUser, setNewUser] = useState({
        name :'',
        phone : ''
    })
    const [userName, setUserName] = useState('')
    const [userPhone, setUserPhone] = useState('')

    const handeleChangeName = (e) => {
       setUserName(e.target.value)
    }
    const handeleChangePhone = (e) => {
       setUserPhone(e.target.value)
    }
    const submitHandler = (e)=>{
      e.preventDefault()
      setNewUser({ name: userName, phone: userPhone})
      setUserName('')
      setUserPhone("")
    }
    userText(newUser)
       
   
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Name</label>
                    <input onChange={handeleChangeName} required name ={userName} value={userName} type='text' placeholder='Name'/>
                </div>
                <div>
                    <label>Phone</label>
                    <input  onChange={handeleChangePhone} required name={userPhone} value={userPhone} type='text' placeholder='Phone'/>
                </div>
                 <button type='submit'>Add User</button>
            </form>
        </div>
    );
}

export default AddUser;
