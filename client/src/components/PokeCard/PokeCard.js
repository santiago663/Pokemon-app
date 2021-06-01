
import React from "react";

import { Link } from 'react-router-dom';
import "./PokeCard.css"




function PokeCard(poke){


    return (
        <div  className="card">
          <div className="imagen">
            <img src={poke.img} alt="" />
          </div>
          <div className="container" >
          <Link to ={"/pokemon/"+poke.id} >
            <h4>{poke.name}</h4>
            </Link> 
             <p>
               attack :{poke.attack} 
             </p> 
             <div className="type">
              <p> {poke.types}  </p> 
            </div> 
          </div>
         </div>
    )}
    
    export default PokeCard;