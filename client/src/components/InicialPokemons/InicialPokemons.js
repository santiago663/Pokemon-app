import React, { Fragment } from "react";
import {  useSelector, useDispatch } from "react-redux";
import PokeCard from '../PokeCard/PokeCard'
 import{
  back, 
  anterior, 
  siguiente,
  ascendente, 
  descendente,
  masFuerte,
  menosFuerte}
   from "../../redux/actions/filterActions"; 
import "./InicialPokemons.css"



function InicialPokemons(){
   
    const copia = useSelector(store=> store.copia)
    const pagina = useSelector(store=> store.pagina)
    const dispatch = useDispatch()

   function handleClick(e){
      dispatch(back())
    } 

const paginado = pagina *10;

const mostrar = copia.slice(paginado, paginado + 10)


 function changePage(e){
if(e.target.value==="anterior"){
dispatch(anterior())
}
if(e.target.value==="siguiente"){
  dispatch(siguiente())
}

}
function ordenar(e){
  if(e.target.value==="ascendente"){
    dispatch(ascendente())
  }
  if(e.target.value==="descendente"){
    dispatch(descendente())
  }
  if(e.target.value === "mayor"){
    dispatch(masFuerte())
  }
  if(e.target.value === "menor"){
    dispatch(menosFuerte())
  }
} 

return (
    <div>

     <button value="ascendente" onClick={ordenar}>Ordenar Ascendentemente por nombre</button>
    <button value="descendente" onClick={ordenar}>Ordenar Descendentemente por nombre</button>
    <button value ="mayor" onClick={ordenar}>Ordenar por mas fuerte</button>
    <button value ="menor" onClick={ordenar}>Ordenar por mas debil</button>
 
  <div className="padre">
    {mostrar.map((poke) => {
      
      return (
        <Fragment>
         <PokeCard 
         name={poke.name}
         img={poke.preview}
         type={poke.types.map((pt)=><p>{pt.name}</p>)}
         id={poke.id}
         attack={poke.attack}
         />
        </Fragment>)
    })}
  </div>
     <button value="anterior" onClick={changePage}>ANTERIOR</button>
    <button value="siguiente" onClick={changePage}>SIGUIENTE</button>
    <button value="restart" onClick={handleClick}>RESTART</button> 
  </div>

)
}
 export default InicialPokemons; 
 
