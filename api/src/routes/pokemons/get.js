const server = require("express").Router();
const{ Pokemons,Types }= require("../../db")

server.get("/search", async (req,res)=> {
  const { name }= req.query;
  
  try{
    let pokemon= await Pokemons.findOne({
      where: { name },
      include: [{ model:Types }],
    })
    res.status(200).json(pokemon)
  }catch(error){
    res.send(error)
  }
})

/**************************************/

server.get("/:id", async (req,res)=>{

  const{ id }= req.params;
  try{
    let pokemon= await Pokemons.findOne({
      where: { id: id },
      include: [{ model:Types }],
    })
    res.status(200).json(pokemon)
  }catch(error){
    res.send(error)
  }
});

/*****************************************/

server.get("/", async (req,res)=>{

  try{
    const pokemons = await Pokemons.findAll({
      attributes: [
        "id",
        "name",
        "attack",
        "hp",
        "speed",
        "height",
        "weight",
        "defense",
        "fileLink",
        "preview", 
      ],
      include: [{ model:Types, }]
    });
    
    res.status(200).json(pokemons)
    
  }catch(error){
    res.send(error)
  }
})

module.exports = server;