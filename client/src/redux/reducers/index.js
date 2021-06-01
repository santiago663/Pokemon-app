import * as TYPE from "../types/types"

const inicialState = {
    defaultPokemons:[],
    copia:[],
    pokemons:[], 
    pokeDetail:{}, 
    pokeTypes:[],
    pagina:0,
};

export default function rootReducer( state=inicialState, action ){
    switch(action.type){
        case TYPE.GET_INICIAL_POKEMONS: 
        return { 
            ...state,
                defaultPokemons: action.payload,
                copia: action.payload,
        }
        case TYPE.GET_POKEMON_TYPE:
           return {
                ...state,
                pokeTypes: action.payload,
            }
        case TYPE.GET_POKEMON:
            return {
                ...state,
                pokemons:action.payload
            }
        case TYPE.GET_DETAIL:
            return {
                ...state,
                pokeDetail: action.payload
    
            }
            case TYPE.FILTRO:
                return {
                    ...state,
                    copia: state.defaultPokemons.map((pokemon) =>{
                     return pokemon.types.filter(e => e.name === action.payload )}
                    )
                }
            case TYPE.BACK_ORIGIN:
                return {
                    ...state,
                    copia: state.defaultPokemons
                }
    
           case TYPE.SIGUIENTE:
                return {
                    ...state,
                    pagina: state.pagina +1
                }

            case TYPE.ANTERIOR:
                return{
                    ...state,
                    pagina: state.pagina-1
                }
            
            case TYPE.ASCENDENTE:
               return {
                   ...state,
                   copia:[...state.copia].sort((a,b)=> a.name>b.name? 1 : -1)
               } 
            
            case TYPE.DESCENDENTE:
                return{
                    ...state,
                    copia:[...state.copia].sort((a,b)=> a.name<b.name?1: -1)
                }
        
            case TYPE.MAYOR:
                return {
                    ...state,
                    copia:[...state.copia].sort((a,b)=> a.attack>b.attack? -1:1)
                }
    
            case TYPE.MENOR:
                return {
                    ...state,
                    copia: [...state.copia].sort((a,b)=> a.attack<b.attack? -1:1)
                }
        default: return state
    }
}