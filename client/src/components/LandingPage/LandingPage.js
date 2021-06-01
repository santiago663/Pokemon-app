import React from 'react';
import {NavLink} from "react-router-dom";
import "./LandingPage.css";

 function LandingPage(){
     return (
         <div>

             <div className="shadow"></div>
             <div className="pokeball">
                 <div className="top"></div>
                 <div className="bottom"></div>
                 <div className="middle" >
                     <button className="button">
                         <NavLink exact to="/pokemons">Home</NavLink>
                     </button>
                 </div>
             </div>

         </div>
     )
 }
export default LandingPage;
