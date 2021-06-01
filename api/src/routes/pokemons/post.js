const server = require("express").Router()
const { Pokemons }= require("../../db")

server.post("/", async (req, res) => {
const {  
name,
attack,
hp,
speed,
height,
weight,
defense,
fileLink,
preview,
types }= req.body; 
console.log("****** ENTRO",req.body,"*******")

try{
const creatingPokemon= await Pokemons.create({
name: name,
attack: attack,
hp: hp,
speed: speed,
height: height,
weight: weight,
defense: defense,
fileLink: fileLink,
preview: preview,
})
console.log("***** en el medio ", creatingPokemon,"*******")
const pokeTypes=  types.forEach(async (e) => {
    const parseo= parseInt(e) 
    console.log(parseo)
    return await creatingPokemon.addTypes(parseo)});

 const newPokemon ={
 id: creatingPokemon.id,
 name: creatingPokemon.name,
 attack:creatingPokemon.attack,
 hp: creatingPokemon.hp,
 speed: creatingPokemon.speed,
 height: creatingPokemon.height,
 weight: creatingPokemon.weight,
 defense: creatingPokemon.defense,
 fileLink: creatingPokemon.fileLink,
 preview:creatingPokemon.preview,
 types: types
 }
 console.log("******* SALGO", newPokemon, "*******")
res.status(200).json(newPokemon) 
}catch(error){
    console.log(error)
    res.status(500).json(error)
 }
})
module.exports = server;