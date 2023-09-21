const express=require("express")
const check = require("./check")
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.status(200).sendFile(__dirname+"/index.html")
})

app.post("/student",check,(req,res)=>{
    let newuser={
        name:req.body.name,
        grid:req.body.grid,
        email:req.body.email,
        password:req.body.password
    }
    res.status(201).send(newuser)
})

app.listen(7777,()=>{
    console.log("server 7777 start");
})