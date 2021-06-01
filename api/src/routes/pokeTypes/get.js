const server = require("express").Router();
const{ Types }= require("../../db")

server.get("/", async (req, res) =>{
    
    try{
     const allTypes= await Types.findAll({
       attributes:[ "id", "name"]
     })
      res.status(200).json(allTypes)
   
    }catch(error){
      console.log(error)
      res.send(error)
    }
   })

   module.exports= server; 