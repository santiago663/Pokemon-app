 import React, { Fragment, useEffect } from "react";
import {useParams} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import {getPokeDetail} from "../../redux/actions/actions"
import NavBar from "../NavBar/NavBar"




function GetDetail(){

    const dispatch = useDispatch();
    const {id} = useParams();
    useEffect(()=>{
      dispatch(getPokeDetail(id))
    },[dispatch])
    
    const pokeDetail = useSelector(store => store.pokeDetail);

    if(!pokeDetail){
      return (
        <h1>Loading...</h1>
      )
    }


      return (
        <Fragment>
          <NavBar/>
         <div className="carta">
           <div className="imagen">
           <img src={pokeDetail.preview} alt=""/>
           </div>
           <h2>{pokeDetail.name}</h2>
           <div className="types">
           {pokeDetail.types?.map((tip)=> <p>{tip.name}</p>)}
           </div>
           <div className="detalles">
             <p> Id: {pokeDetail.id}</p>
             <p> HP: {pokeDetail.hp}</p>
             <p> Height: {pokeDetail.height}</p>
             <p> Weight: {pokeDetail.weight}</p>
             <p> Attack: {pokeDetail.attack}</p>
             <p> Defense: {pokeDetail.defense}</p>
             <p> Speed: {pokeDetail.speed}</p>
           </div>


         </div>
          
        </Fragment>
    )
}
  export default GetDetail;
  