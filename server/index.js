const express=require("express");
const app= express()
const cors =require('cors');
const mongoose=require('mongoose')
const User =require('./models/model')
const jwt =require('jsonwebtoken')
// type of middleware that manipulates the response and passes it to next function
app.use(cors())
app.use(express.json())


mongoose.connect("mongodb://0.0.0.0:27017/formapp",{useNewUrlParser:true,useUnifiedTopology:true}).then(() =>{
    console.log("connected to mongodb successfully");
}).catch((err)=>{
    console.log(err);
})

app.post("/api/register", async(req,res)=>{
    console.log(req.body)
    try{
await User.create({
 name: req.body.name,
 email: req.body.email,
 password: req.body.password,
})
res.json({status:'ok'})

    }
    catch(err){
        console.log(err)
        res.json({status:'error', error:'Duplicate email'})
    }
})

app.post('/api/login', async (req,res) =>{
    const user =await User.findOne({
        email: req.body.email,
        password: req.body.password,
    })
    
     if(user){

        const token= jwt.sign({
            name:user.name,
            email:user.email,

      }, 'secret123')
      return res.json({status:'ok', user:token})
      }

    else{
        return res.json({ status:'ok' , user:'false'})
    }
})

app.get('/api/quote', async(req,res) =>{
    const token =req.headers['x-access-token']
try{
    const decoded=jwt.verify(token,'secret123')
    const email=decoded.email
    const user=await User.findOne({email:email})

    return res.json({status :'ok' , quote:user.quote})
}

catch(error){
    console.log(error)
res.json({status:'error', error: 'invalid token'})
}
})

app.post('/api/quote', async(req,res) =>{
    const token =req.headers['x-access-token']
try{
    const decoded=jwt.verify(token,'secret123')
    const email=decoded.email
   await User.updateOne({email:email} , {$set : {quote:req.body.quote}})

    return res.json ({status :'ok' })
}

catch(error){
    console.log(error)
res.json({status:'error', error: 'invalid token'})
}
})

app.listen(5000, () => {
console.log("server is working");
})


