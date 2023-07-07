import PromisePool from "@supercharge/promise-pool/dist";
import { getPokemon, getPokemonList, IPokemon } from "./src/getPokemon";

(async function () {
  

  try {
    const list = await getPokemonList();

    // for(const listItem of list.results) {
    //   const pokemon = await getPokemon(listItem.url);
    //   console.log(pokemon.name)
    // }
    // list.results.reduce<Promise<unknown>>(async (pr, pokemon) => {
    //   await pr;
    //   return getPokemon(pokemon.url)
    //   .then(p => console.log(p.name));
    // }, Promise.resolve(undefined))

    // const pokemons = await Promise.all(list.results.slice(0, 5).map(pokemon => {
    //   return getPokemon(pokemon.url);
    // }))

    const { results, errors } = await PromisePool.withConcurrency(10)
      .for(list.results)
      .process(async (data) => {
        return await getPokemon(data.url);
      });

    console.log(results.map((p) => p.name));
  } catch (e) {
    console.log(e);
  }
})();
