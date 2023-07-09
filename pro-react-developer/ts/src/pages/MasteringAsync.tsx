// import fetch from 'node-fetch'
import PromisePool from "@supercharge/promise-pool";
import { useEffect, useState } from "react";
import { getPokemon, getPokemonList, Pokemon, PokemonList } from "../getPokemon";



export default function MasteringAsync() {

  const [pokemon, setPokemon] = useState<Pokemon[]>([])
  useEffect(() => {
    async function getData() {
      const list = await getPokemonList();

      const { results } = await PromisePool
        .withConcurrency(10)
        .for(list.results)
        .process(async data => {
          return await getPokemon(data.url)
        })

        setPokemon(results);
    }
    getData();
  }, [])

  return (
    <div className="App">
      <ul >
      {pokemon.map(poke => {
        return <li key={poke.id}>{poke.name}</li>  
      })}
      </ul>
    </div>
  );
}
