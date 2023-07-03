import React, { useState } from 'react'
import { Grid,Paper, Avatar, TextField, Button } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import { pink } from '@mui/material/colors';


    function App() {
      
        const[email,setEmail] =useState('')
        const [password,setPassword]=useState('')
     
       async function LoginUser(event){
        event.preventDefault()

        const response= await fetch('http://localhost:5000/api/login',{
           method:'POST',
           headers:{
              'Content-Type' :'application/json',
           },
           body: JSON.stringify({
           email,
           password,
        }),
        })
     
        const data =await response.json()

         if(data.user) {
            localStorage.setItem('token', data.user)
            alert('Login Succesfull')
            window.location.href='/dashboard'
         }
         else{
            alert('please check email and password')
         }
      //   console.log(data);
        }
    

     const paperStyle={padding :20,height:'70vh',width:280, margin:"50px auto"}
     const avatarStyle={backgroundColor:'pink[500]'}
     const btnstyle={margin:'8px 0'}
     return(
        <form onSubmit={LoginUser}>
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle} sx={{width:56,height:56, bgcolor:pink[500]}}><LockOutlinedIcon/></Avatar>
                    <h2>LOGIN</h2> 
                </Grid>
                <TextField label='Email' 
                placeholder='Email' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                fullWidth required
                 />
              
                <TextField label='Password' 
                placeholder='Enter password' 
                type='password' fullWidth required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              
                />
                
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>LOGIN</Button>
                {/* <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography> */}
                {/* <Typography > Do you have an account ?
                     <Link href="/Signup" >
                        Sign Up 
                </Link>
                </Typography> */}
            </Paper>
        </Grid>
        </form>
//         <div>
//       <h1>Register</h1>

//       <form onSubmit={LoginUser}>
// <input
// value={email}
// onChange={(e) => setEmail(e.target.value)}
// type="email"
//  placeholder='email' />
// <br/>

// <input 
// value={password}
// onChange={(e) => setPassword(e.target.value)}
// type ="password"
//  placeholder='password' />

//  <input type='submit'
//  value="register now"/>
//       </form>
//    </div>
)}

export default App;