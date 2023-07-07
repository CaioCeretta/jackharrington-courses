import { useEffect, useState } from "react";
import PromisePool from "@supercharge/promise-pool/dist";
import { IPokemon, getPokemon, getPokemonList } from "./utils/getPokemon";

import "./App.css";

function App() {
  const [pokemons, setPokemons] = useState<IPokemon[]>([])
  
  useEffect(() => {
    async  function getData() {
      const list = await getPokemonList();

      const { results } = await PromisePool.withConcurrency(10)
        .for(list.results)
        .process(async (data) => {
          return await getPokemon(data.url);
        });

      setPokemons(results)
    }
   
    getData();

  }, []);

  return (
    <div className="App">
      
      {pokemons.map(pokemon => (
        <ul>
          <li key={pokemon.id}>{pokemon.name}</li>  
        </ul>
      ))}
    </div>
  )
}

export default App;
