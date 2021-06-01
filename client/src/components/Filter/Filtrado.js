import React, {useState} from "react";
import { useDispatch, useSelector} from "react-redux";
import{listado} from "../../redux/actions/filterActions";
import "./Filtrado.css"


function Filtros(){

const dispatch= useDispatch();
const types = useSelector(store=> store.pokeTypes)

const [tipo,setTipo]=useState("")

function handleChange(e){
setTipo({
    ...tipo,
    [e.target.id]:e.target.value
})
} 
function handleSubmit(e){
    e.preventDefault();
    dispatch(listado(tipo.types)) 

}


return(
    <div>
        <form className="form_container" onSubmit={handleSubmit}> 
        <label>Filtra por tipo de pokemon!...</label>
            <label htmlFor="types">
                <select id="types" name="types" onChange={handleChange}>
                    <optgroup label="select type">                     
                            {
                                types.map((t)=>{
                                 
                                    return(
                         
                                <option
                                value={t.name}
                                key={t.id}
                                >
                                {t.name}

                                </option>
                                    )

                                })
                            }                      

                    </optgroup>
                </select>
            </label>
            <button type="submit">Aplicar</button>
        </form>

       
    </div>
 )
}
export default Filtros