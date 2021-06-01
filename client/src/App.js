import React, { useEffect } from 'react';
import routes from "./routes/routes"
import { useDispatch } from "react-redux";
import { bringInicialPokemons, getPokemonType } from "./redux/actions/actions";
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(bringInicialPokemons());
    dispatch(getPokemonType());
  },[dispatch])

  return <div className="App">{routes()}</div>;
}

export default App;
