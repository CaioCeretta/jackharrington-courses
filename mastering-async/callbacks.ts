import { IPokemonList } from "./src/getPokemon";

function getPokemonList(
  cb: (err: Error | undefined, pokemonList: IPokemonList | undefined) => void
): void;

function getPokemonList(): Promise<IPokemonList>;

function getPokemonList(
  cb?: (err: Error | undefined, pokemonList: IPokemonList | undefined) => void
): Promise<IPokemonList> | void {
  if (cb) {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => res.json())
      .then((data: IPokemonList) => cb(undefined, data))
      .catch((err) => cb(err, undefined));

    return undefined;
  } else {
    return fetch('https://pokeapi.co/api/v2/pokemon/')
      .then(res => res.json())

  }
}


getPokemonList((_err, data) => {
  console.log(data?.results.length);
});


(async function() {
  const list = await getPokemonList();
  console.log(list?.results.length)
})()