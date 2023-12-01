import './pokemonCard.css';
import { useEffect, useState } from 'react';

import pokemonColors from "../../assets/pokemonColors.json"
import capFirstLetter from '../../utils/capFirstLetter';
import getGradientColors from '../../utils/getGradientColors';
import handleImgError from "../../utils/handleImgError"

import pokeAPI from '../../api/pokeAPI';

import { useNavigate } from 'react-router-dom';

const Card = ({ pokemonName }) => {
  const navigate = useNavigate()
  const [pokemon, setPokemon] = useState();
  const [bgColors, setBgColors] = useState([])
  useEffect(() => {
    !pokemon && pokeAPI.get(`/pokemon/${pokemonName}`)
      .then(res => { setPokemon(res.data) })
  }, [])

  useEffect(() => {
    if (pokemon) {
      const colors = getGradientColors(pokemon?.types[0]?.type?.name);
      setBgColors(colors)
    }
  }, [pokemon])

  return (
    <article className='pokemonCard'
      style={{
        background: `conic-gradient(from 100deg at -50px 105%, ${bgColors[0]} 280deg, ${bgColors[1]} 360deg)`
      }}
      onClick={() => navigate(`/pokemons/${pokemon.name}`)}
    >
      <img
        src={
          pokemon?.id < 649
            ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon?.id}.svg`
            : "null"
        }
        onError={ev => { handleImgError({ ev, pokemon }) }}
      />
      <div>
        <h1>{capFirstLetter(pokemon?.name)}</h1>
        <ul>
          {pokemon?.types.map((type) => (
            <li
              className='cardTypeShadow'
              key={type.slot}
              style={{
                background: pokemonColors[type?.type?.name].typeColor
              }}
            >
              {capFirstLetter(type.type.name)}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default Card;