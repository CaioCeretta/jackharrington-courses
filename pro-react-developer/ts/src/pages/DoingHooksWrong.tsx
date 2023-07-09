import React, { useEffect, useState, useMemo, ChangeEvent, useCallback } from 'react'
import { Pokemon, getAll, getByName } from '../API'

import styles from './DoingHooksWrong.module.css'

interface PokemonWithPower extends Pokemon {
  power: number;
}

const calculatePower = (pokemon: Pokemon) =>
  pokemon.hp +
  pokemon.attack +
  pokemon.defense +
  pokemon.special_attack +
  pokemon.special_defense +
  pokemon.speed;



let tableRender = 0;
const PokemonTable: React.FunctionComponent<{ pokemon: PokemonWithPower[] }> = ({ pokemon }) => {
  console.log(`Table Render = ${tableRender++}`)
  return (

    <table>
      <thead>
        <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Type</td>
          <td colSpan={6}>Stats</td>
          <td>Power</td>
        </tr>
      </thead>
      <tbody>
        {pokemon.map(pokemon => (
          <tr key={pokemon.id}>
            <td>{pokemon.id}</td>
            <td>{pokemon.name}</td>
            <td>{pokemon.type}</td>
            <td>{pokemon.hp}</td>
            <td>{pokemon.attack}</td>
            <td>{pokemon.defense}</td>
            <td>{pokemon.special_attack}</td>
            <td>{pokemon.special_defense}</td>
            <td>{pokemon.speed}</td>
            <td>{pokemon.power}</td>
          </tr>
        ))}
      </tbody>
    </table>

  )
}

const MemoedPokemonTable = React.memo(PokemonTable)

let appRender = 0;
export default function DoingHooksWrong() {
  console.log(`appRender = ${appRender++}`)
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [threshold, setThreshold] = useState(0)
  const [search, setSearch] = useState('')

  useEffect(() => {
    getByName(search).then(setPokemons)
  }, [search])

  const pokemonWithPower = useMemo(() => pokemons.map(p => ({ ...p, power: calculatePower(p) })), [pokemons])

  const onSetSearch = useCallback((evt: any) => setSearch(evt.target.value), [search])

  const onSetThreshold = useCallback((evt: any) => setThreshold(parseInt(evt.target.value, 10)), [])

  const countOverThreshold = useMemo(() => pokemonWithPower.filter(p => p.power > threshold).length, [pokemonWithPower, threshold])

  const min = useMemo(() => Math.min(...pokemonWithPower.map(p => p.power)), [pokemonWithPower])
  const max = useMemo(() => Math.max(...pokemonWithPower.map(p => p.power)), [pokemonWithPower])

  return (
    <div>
      <div className={styles.topBar} >
        <div>Search</div>
        <input type="text" value={search} onChange={onSetSearch}/>
        <div>Power threshold</div>
        <input type="text" value={threshold} onChange={onSetThreshold} />
        <div>Count over threshold: {countOverThreshold}</div>
      </div>
      <div className={styles.twoColumn}>
        <MemoedPokemonTable pokemon={pokemonWithPower} />
        <div>
          <div>Min: {min}</div>
          <div>Max: {max}</div>
        </div>

      </div>
    </div>
  )
}
