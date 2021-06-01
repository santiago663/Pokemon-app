import * as TYPE from "../types/types";

export function listado(name){
    return{
        type: TYPE.FILTRO,
        payload: name
      }
    }
    
    export function back(){
        return {
            type: TYPE.BACK_ORIGIN,
        }
    }
    
    export function siguiente(){
        return {
            type: TYPE.SIGUIENTE
        }
    }
    export function anterior(){
        return {
            type: TYPE.ANTERIOR
        }
    }
    
    export function ascendente(){
        
        return {
            type:TYPE.ASCENDENTE
        }
    }
    export function descendente(){
        return {
            type: TYPE.DESCENDENTE
        }
    }
    export function masFuerte(){
        return {
            type: TYPE.MAYOR
        }
    }
    export function menosFuerte(){
        return {
            type: TYPE.MENOR
        }
    }