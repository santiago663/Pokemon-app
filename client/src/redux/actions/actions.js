import axios from "axios";
import * as TYPE from "../types/types";

export const bringInicialPokemons = () => async (dispatch) => {
  try {
    const getAll = await axios.get("http://localhost:3001/get/pokemons");
    dispatch({
      type: TYPE.GET_INICIAL_POKEMONS,
      payload: getAll.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getPokemon = (pokemon) => async (dispatch) => {
  try {
    const findOne = await axios.get(
      `http://localhost:3001/get/pokemons/search?name=${pokemon}`
    );
    dispatch({ type: TYPE.GET_POKEMON, payload: findOne.data });
  } catch (error) {
    console.log(error);
  }
};

export const getPokeDetail = (id) => async (dispatch) => {
  try {
    const detail = await axios.get("http://localhost:3001/get/pokemons/" + id);
    dispatch({ type: TYPE.GET_DETAIL, payload: detail.data });
  } catch (error) {
    console.log(error);
  }
};

export const getPokemonType = () => async (dispatch) => {
  try {
    const getTypes = await axios.get("http://localhost:3001/get/types");
    dispatch({
      type: TYPE.GET_POKEMON_TYPE,
      payload: getTypes.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addPokemon = (pokemon) => async (dispatch) => {
  try {
    const addPoke = await axios.post(
      "http://localhost:3001/post/pokemons",
      pokemon
    );
    dispatch({
      type: TYPE.ADD_NEW_POKEMON,
      payload: addPoke.data,
    });
  } catch (error) {
    console.log(error);
  }
};


