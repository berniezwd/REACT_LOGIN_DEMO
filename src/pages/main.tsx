import { useEffect } from 'react'
import './pagestyle.less'
import { useLoaderData } from 'react-router-dom'

export interface PokemonType {
  name: string
  url: string
  sprites: {
    front_default: string
  }
}

interface PokemonListType {
  pokemons: {
    results: PokemonType[]
  }
}

export const PokemonListLoader = async (): Promise<PokemonListType> => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon')
  if (!response.ok) {
    throw new Error('Pokemon Something Wrong')
  }
  const pokemons = await response.json()
  pokemons.results = pokemons.results.map((item: PokemonType) => {
    return {
      ...item,
      name: item.name.toUpperCase(),
    }
  })
  return { pokemons }
}

export default function main() {
  const { pokemons } = useLoaderData() as PokemonListType
  return (
    <div className="Main">
      {pokemons.results.map((item: PokemonType) => {
        return (
          <div className="Pokemon-Items" key={item.name}>
            <img
              className="default-img"
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"
              alt=""
            />
            <p className="Pokemon-name">{item.name}</p>
          </div>
        )
      })}
    </div>
  )
}
