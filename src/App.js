
import { useEffect, useState } from 'react';
import AddUser from './AddUser';
import './App.css';
import Users from './Users';
const Url = 'https://jsonplaceholder.typicode.com/users'
function App() {
  const [users, setUsers] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getAllUsers = ()=>{
    fetch(Url)
    .then((res)=>{
     if(!res.ok){
       throw new Error('Fething is not success')
     }return res.json()
 
    })
    .then((data)=>{
      setUsers(data)
    })
    .catch((err)=>{
      setError(err.message)
    })
    .finally(()=>{
      setIsLoading(false)
    })
  }

  useEffect(()=>{
   getAllUsers()
  },[])

  
  const handleDelete = (id)=>{
    fetch(Url+`/{id}`,{
      mathod : 'DELETE',
    })
    .then((res)=>{
     if(!res.ok){
       throw new Error('Delete is not success')
     }
      getAllUsers()
 
    })
    
    .finally(()=>{
      setIsLoading(false)
    })
  }

  const userText = (text) => {
    fetch((Url),{
      mathod : "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify(text)
    })
    .then((res)=>{
     if(!res.ok){
       throw new Error('Add user is not success')
     }
      getAllUsers()
 
    })
    
    .finally(()=>{
      setIsLoading(false)
    })
  }
 
  return (
    <div className="App">
      <h1>User Manegment App</h1>
      {isLoading && <h2>Loading...</h2>}
      {error && <h3>{error}</h3>}
      <AddUser userText = {userText}/>
      {users && <Users handleDelete={handleDelete} users ={users}/>}
    </div>
  );
}

export default App;
