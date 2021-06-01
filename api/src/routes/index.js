const { Router,static} = require('express');
const router = Router();

//Rutas Pokemons //
router.use("/delete/pokemons", require("./pokemons/delete"));
router.use("/get/pokemons", require("./pokemons/get"));
router.use("/post/pokemons", require("./pokemons/post"));
router.use("/put/pokemons", require("./pokemons/put"));
//Rutas Types //
router.use("/get/types", require("./pokeTypes/get"));

module.exports = router;
