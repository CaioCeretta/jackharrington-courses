
export interface IPokemonList {
  count: number;
  next: string;
  previous?: any;
  results: {
    name: string;
    url: string;
  }[];
}

export interface IPokemon {
  id: number;
  name: string;
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  };
}

export const getPokemonList = async (): Promise<IPokemonList> => {
  const listResp = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const list: IPokemonList = await listResp.json();
  return list;
};

export const getPokemon = async (url: string): Promise<IPokemon> => {
  const dataResp = await fetch(url);
  return await dataResp.json();
};

export const getFirstPokemon = async (): Promise<IPokemon> => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log('Getting the list');
      const list = await getPokemonList();
      resolve(await getPokemon(list.results[0].url));
    } catch (error) {
      reject(error);
    }
  });
};