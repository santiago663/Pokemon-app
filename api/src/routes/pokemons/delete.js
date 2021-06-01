const server = require("express").Router();
const { Pokemons }= require("../../db")

server.delete("/:id", async (req, res) => {
    const { id }= req.params;

    try{
        const deletePokemon= await Pokemons.destroy({
            where: { id: id }
        })
        res.status(200).json({ message: "Pokemon deleted successfully"}) 
    } catch(error){
        res.send(error)
    }
})
module.exports = server;