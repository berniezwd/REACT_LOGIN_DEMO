import React from 'react'
import { useLoaderData } from 'react-router-dom'
import './pagestyle.less'
interface PokemonDetail {
  name: string
  img: string
}
export const getPokemonDetail = async ({ params }: any): Promise<PokemonDetail> => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
  const data = await res.json()
  const responseDetail = {
    name: data.name,
    img: data.sprites.front_default,
  }
  return responseDetail
}

export default function detail() {
  const { name, img } = useLoaderData() as PokemonDetail
  return (
    <>
      <div className="Detail">
        <img className="detail-img" src={img} alt="" />
        <p className="name">{name}</p>
      </div>
    </>
  )
}
