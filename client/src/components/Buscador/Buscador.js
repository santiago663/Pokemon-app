import React,{useState}from "react";
import {useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getPokemon } from "../../redux/actions/actions";
import Filtros from "../Filter/Filtrado";
import "./Buscador.css"


function Buscador (){
  const dispatch = useDispatch();

const[input,setInput]= useState("");

function handleChange(event) {
  setInput(event.target.value);
};
function handleSubmit(event) {
  event.preventDefault();
  dispatch(getPokemon(input))
};
return(
  <div>
     <Filtros />
  
    <form className="form-container" onSubmit={(e) =>handleSubmit(e)}>
      <div>
        <label className="label" htmlFor="name">Pokemon: </label>
        <input
          type="text"
          id="name"
          autoComplete="off"
          value={input}
          onChange={(e) =>handleChange(e)}
        />
      </div>
      <button type="submit">BUSCAR</button>
      <button>
      <Link exact to="/form">Create your Pokemon!</Link>
      </button>
    </form>
  </div>
);
};
  
  export default Buscador