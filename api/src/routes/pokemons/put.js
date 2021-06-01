const server = require("express").Router()
const { Pokemons }= require("../../db")

server.put("/:id", async (req, res) => {
    const { id }= req.params;
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
        types, }= req.body;
    try{
    const updatePokemon = await Pokemons.update(
    {
        name: name,
        attack: attack,
        hp: hp,
        speed: speed,
        height: height,
        weight: weight,
        defense: defense,
        fileLink: fileLink,
        preview: preview, },
         { where:{ id: id },
    })
    const findPoke =await Pokemons.findOne({ where: { id:id }})
    const pokeTypes=  types.forEach((e) => { return findPoke.setTypes(e) });

    const pokemon ={
        id: findPoke.id,
        name: findPoke.name,
        attack: findPoke.attack,
        hp: findPoke.hp,
        speed: findPoke.speed,
        height: findPoke.height,
        weight: findPoke.weight,
        defense: findPoke.defense,
        fileLink: findPoke.fileLink,
        preview: findPoke.preview,
        types: types
        }
        res.status(200).json(pokemon)
    }catch(error){ 
        console.log(error)
        res.send(error) 
    }

})
module.exports = server;