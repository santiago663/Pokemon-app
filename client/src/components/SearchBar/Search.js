import React from "react";
import { useSelector } from "react-redux";
import "./Search.css";

function PokemonBuscado() {
  const pokemons = useSelector((store) => store.pokemons);

  return (
    <>
      <div className="pokedex-container">
        <div className="dot-container">
          <div className="dot1"></div>
          <div className="dot2"></div>
          <div className="dot3"></div>
        </div>

        <div className="img-container">
          <img src={pokemons?.preview} alt="img not found" />

          <div className="types-container">
            {pokemons?.types?.map((t) => (
              <p>{t.name}</p>
            ))}
          </div>
        </div>

        <div className="stats-container">
           <p> Name: {pokemons.name}</p>
        </div>
      </div>
    
    </>
  );
}

export default PokemonBuscado;
