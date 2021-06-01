import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from "../components/LandingPage/LandingPage";
import PokemonBuscado from "../components/SearchBar/Search";
import  Buscador  from '../components/Buscador/Buscador';
import InicialPokemons from "../components/InicialPokemons/InicialPokemons"
import PokeDetail from "../components/PokeDetail/PokeDetail"
import UserForm from "../components/UserForm/UserForm"

const routes = () => (
<Router>
      <Route exact path= "/" component={LandingPage} />
      <Route path = "/pokemons" component={Buscador} />
      <Route exact path ="/form" component={UserForm} />
      <Route   path= "/pokemons" component={PokemonBuscado} />
      <Route  path="/pokemons" component={InicialPokemons} /> 
      <Route exact path="/pokemon/:id" component={PokeDetail} />
</Router>
)
export default routes;
