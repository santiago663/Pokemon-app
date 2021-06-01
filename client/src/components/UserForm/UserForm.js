import React, { useEffect,useState } from "react";
import {addPokemon, getPokemonType} from "../../redux/actions/actions";
import {useDispatch,useSelector} from "react-redux";
import NavBar from "../NavBar/NavBar"




function UserForm(){

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getPokemonType())
    },[dispatch])
    
    const pokeTypes= useSelector(state=> state.pokeTypes);
    const [input,setInput]= useState({
        name:"",
        primerType:"",
        segundoType:"",
        attack:"",
        defense:"",
        hp:"",
        speed:"",
        height:"",
        weight:"",

    })

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.id]:e.target.value
        });
      };

      function handleSubmit(e){
          e.preventDefault();
         const pokeAdd = {
            name:input.name.toLocaleLowerCase(),
            types:[input.primerType],
            attack:input.attack,
            defense:input.defense,
            hp:input.hp,
            speed:input.speed,
            height:input.height,
            weight:input.weight,
         } 
         dispatch(addPokemon(pokeAdd))

         setInput({...input, name: ""})
      } 

      return (
          <div className="post">
              <NavBar/>
              <h4>Add Pokemon User</h4>
              <form className="formulario" onSubmit={handleSubmit}>
                  <div className="allInputs">
                      <div className ="inputPost">

                  <label htmlFor="name">
                      <input 
                      required
                      placeholder="Name"
                      type="text"
                      name="name"
                      id="name"
                      value={input.name}
                      onChange={handleChange}

                      />
                  </label>
                  <label>
                      <input required
                      placeholder="attack"
                      name="attack"
                      type="number"
                      id="attack"
                      value={input.attack}
                      onChange={handleChange}

                      />
                  </label>
                  <label>
                      <input required
                      placeholder="defense"
                      name="defense"
                      type="number"
                      id="defense"
                      value={input.defense}
                      onChange={handleChange}
            
                      />
                  </label>
                  <label>
                      <input required
                      placeholder="hp"
                      name="hp"
                      type="number"
                      id="hp"
                      value={input.hp}
                      onChange={handleChange}
            
                      />
                  </label>
                  <label>
                      <input required
                      placeholder="speed"
                      name="speed"
                      type="number"
                      id="speed"
                      value={input.speed}
                      onChange={handleChange}
            
                      />
                  </label>
                  <label>
                      <input required
                      placeholder="height"
                      name="height"
                      type="number"
                      id="height"
                      value={input.height}
                      onChange={handleChange}
                      
    
                      />
                  </label>
                  <label>
                      <input required
                      placeholder="weight"
                      name="weight"
                      type="number"
                      id="weight"
                      value={input.weight}
                      onChange={handleChange}
            
                      />
                  </label>
             </div>

             <div className="types">

                  { pokeTypes.map(t => {
                      return (
                          <div key={t.id}>
                 <input 
                 type="checkbox"
                 id="primerType"
                  name="type" 
                  value={t.id} 
                  onChange={handleChange}
                  />
                 <label htmlFor="type">
                     {t.name}
                  </label>

            </div>
              )
            })}
        </div>
                  </div>
                  <button type="submit">Add</button>
              </form>


          </div>
      )

};

export default UserForm;
