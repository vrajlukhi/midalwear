const { response } = require("express")

const check=(req,res,next)=>{
    let {name,grid,email,password}=req.body
    if(name&&grid&&email&&password){
        next()
    }
    else{
        res.status(404).send("not found")
    }
}
module.exports=check