const { response } = require("express")

const check=(req,res,next)=>{
    let {name,grid,email,password}=req.body
    if(name&&grid&&email&&password){
        next()
    }
    else{
        if(!name&&!grid&&!email&&!password){
            res.status(404).send("not found")
        }
        else if(!name){
            res.status(404).send("not name")
        }
        else if(!grid){
            res.status(404).send("not grid")
        }
        else if(!email){
            res.status(404).send("not email")
        }
        else if(!password){
            res.status(404).send("not password")
        }
    }
}
module.exports=check