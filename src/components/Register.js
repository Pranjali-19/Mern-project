import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

function Register() {
   const navigate =useNavigate('')
   const [name,setName] =useState('')
   const[email,setEmail] =useState('')
   const [password,setPassword]=useState('')



  async function registerUser(event){
   event.preventDefault()
   const response= await fetch('http://localhost:5000/api/register',{
      method:'POST',
      headers:{
         'Content-Type' :'application/json',
      },
      body: JSON.stringify({
      name,
      email,
      password,
   }),
   })

   const data =await response.json()
   console.log(data);

   if(data.status === 'ok'){
      navigate('/login')
   }
   }

 return(

   <div>
      <h1>Register</h1>

      <form onSubmit={registerUser}>
<input
value={name} 
onChange={(e) => setName(e.target.value)}
type="text" 
placeholder='Name' />
<br/>
<input 
value={email}
onChange={(e) => setEmail(e.target.value)}
type="email"
 placeholder='email' />
<br/>
<input 
value={password}
onChange={(e) => setPassword(e.target.value)}
type ="password"
 placeholder='password' />

 <input type='submit'
 value="register now"/>
      </form>
   </div>
)}

export default Register;
