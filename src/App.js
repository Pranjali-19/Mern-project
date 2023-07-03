import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Login from './components/login';
import Register from './components/Register.js';
import Dashboard from './components/Dashboard.js';
// import { Buffer } from 'buffer';
// global.Buffer = Buffer;

const App =() =>{
    
return (
    <Router>
        <Routes>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
 
     </Routes>
    </Router>
)
}

export default App