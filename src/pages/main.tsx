import { useEffect } from 'react'
import './pagestyle.less'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons'

export interface PokemonType {
  name: string
  url: string
  sprites: {
    front_default: string
  }
}

export interface PokemonListType {
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
  const navigate = useNavigate()
  const openDetailBox = (item: PokemonType) => {
    navigate(`/detail/${item.name.toLocaleLowerCase()}`)
  }
  return (
    <div className="Main">
      {pokemons.results.map((item: PokemonType) => {
        return (
          <div className="Pokemon-Items" key={item.name} onClick={() => openDetailBox(item)}>
            <FontAwesomeIcon className="question" icon={faCircleQuestion}></FontAwesomeIcon>
            <p className="Pokemon-name">{item.name}</p>
          </div>
        )
      })}
    </div>
  )
}
