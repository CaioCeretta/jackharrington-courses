import {getPokemonList} from '../src/getPokemon'

describe ('getPokemon', () => {
  it("Should get list of pokemons", (done) => {
    getPokemonList()
    .then(list => {
      expect(list.results[0].name).toBe('bulbasaur');
      done();
    })
  })
})