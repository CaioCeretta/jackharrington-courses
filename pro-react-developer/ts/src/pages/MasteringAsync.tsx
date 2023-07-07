// import fetch from 'node-fetch'
import { Pokemon, PokemonList } from "../getPokemon";

const getPokemonList = async (): Promise<PokemonList> => {
  const listResponse = await fetch("https://pokeapi.co/api/v2/pokemon/");
 return await listResponse.json();
}

const getPokemon(url: string): Promise<Pokemon> {
  
}

(async function () {
  try {
  const list = await getPokemonList()
  const dataResponse = await fetch(list.results[0].url);
  const data: Pokemon = await dataResponse.json();

  console.log(data.stats);
  } catch(e) {
    console.log(e)
  }
})();

export default function MasteringAsync() {
  return (
    <div>
      <span>asdas</span>
    </div>
  );
}
