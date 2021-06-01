const { DataTypes } = require('sequelize');


// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  let id= 2
  sequelize.define('pokemons', {
    id: {
      type: DataTypes.STRING,
      defaultValue: function () { return `1000${id++}` },
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hp:{
      type: DataTypes.INTEGER,
      allowNull:true
    },
    attack:{ 
      type: DataTypes.INTEGER,
      allowNull:true
    },
    defense:{
      type: DataTypes.INTEGER
    },
    height:{
      type: DataTypes.INTEGER
    },
    weight:{
      type:DataTypes.INTEGER
    },
    speed:{
      type: DataTypes.INTEGER
    },
    fileLink: {
      type: DataTypes.STRING,
      allowNull: true
    },
    preview:{
      type: DataTypes.STRING,
      allowNull: true
    },
  },{ timestamps: false });
};
