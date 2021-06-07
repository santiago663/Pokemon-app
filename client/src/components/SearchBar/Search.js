import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPokemon } from "../../redux/actions/actions";
import "./Search.css";

function PokemonBuscado() {
  const dispatch = useDispatch();
  const pokemons = useSelector((store) => store.pokemons);

  const [input, setInput] = useState("");

  useEffect(() => {
    dispatch(getPokemon("kadabra"))
  }, [dispatch])

  function handleChange(event) {
    setInput(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    dispatch(getPokemon(input));
  }
  return (
    <>
      <div className="father">
        <div className="pokedex-container">
          <div className="dot-container">
            <div className="dot1"></div>
            <div className="dot2"></div>
            <div className="dot3"></div>
          </div>

          <div className="img-container">
            <img src={pokemons?.preview} alt="" />

            <div className="types-container">
              {pokemons?.types?.map((t) => (
                <p>{t.name}</p>
              ))}
            </div>
          </div>

          <div className="stats-container">
            <Link to={"/pokemon/" + pokemons.id}>
              <p> {pokemons?.name}</p>
            </Link>
            <p>Id: {pokemons?.id}</p>
            <p>Height: {pokemons.height * 10}cm</p>
            <p>Weight: {pokemons?.weight/10}kg</p>
          </div>
        </div>
        <div className="bizagra">
          <div className="dotbiz1"></div>
          <div className="dotbiz2"></div>
          <div className="dotbiz3"></div>
          <div className="dotbiz4"></div>
        </div>
        <div className="searchbar-container">
          <form className="searchbar" onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              id="name"
              autoComplete="off"
              value={input}
              onChange={(e) => handleChange(e)}
            />
            <div className="search-button">
              <button type="submit">SEARCH</button>
            </div>
          </form>
          <div className="form-button">
            <button>
              <Link exact to="/form">
                Create your Pokemon!
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PokemonBuscado;
