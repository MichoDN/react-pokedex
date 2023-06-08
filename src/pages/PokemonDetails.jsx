import '../css/pokemonDetails.css'

import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import pokeAPI from '../api/pokeAPI';

import pokemonColors from '../assets/pokemonColors.json'
import getGradientColors from '../hooks/getGradientColors';
import handleImgError from '../hooks/handleImgError';
import capFirstLetter from '../hooks/capFirstLetter';

import ProgressBar from '../components/ProgressBar';

const PokemonDetails = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState();
  const [bgColors, setBgColors] = useState([])
  useEffect(() => {
    pokeAPI.get(`/pokemon/${name}`)
      .then(res => {
        setPokemon(res.data)
      })
  }, [])

  useEffect(() => {
    if (pokemon) {
      const colors = getGradientColors(pokemon?.types[0]?.type?.name);
      setBgColors(colors);
    }
  }, [pokemon]);


  return (
    <main id='pokemonDetails'>
      <header
        id='imageDisplayer'
        style={{
          background: `linear-gradient(to bottom, ${bgColors[0]}, ${bgColors[1]})`
        }}
      >
        <img
          src={
            pokemon?.id < 649
              ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon?.id}.svg`
              : "null"
          }
          onError={ev => { handleImgError({ ev, pokemon }) }}
        />
      </header>

      <section id='mainData'>
        <OutlinedCard>Nº{pokemon?.id}</OutlinedCard>
        <h1>{capFirstLetter(pokemon?.name)}</h1>
        <Divider />

        <ul id="types">
          {pokemon?.types.map((type) => (
            <li
              className='cardTypeShadow'
              key={`type ${type.type.name}`}
              style={{
                background: pokemonColors[type?.type?.name].typeColor,
              }}
            >
              {capFirstLetter(type.type.name)}
            </li>
          ))}
        </ul>
      </section>

      <section id='qualities'>
        <h3>Qualities</h3>
        <ul>
          <li>
            <h4>Height</h4>
            <h5>{pokemon?.height / 10} m</h5>
          </li>
          <li>
            <h4>Weight</h4>
            <h5>{pokemon?.weight / 10} kg</h5>
          </li>
        </ul>
      </section>

      <section id="abilities">
        <h3>Abilities</h3>
        <ul>
          {pokemon?.abilities.map((ability) => (
            <li
              key={`ability${ability.ability.name}`}
            >
              <OutlinedCard width="150px">
                {capFirstLetter(ability.ability.name)}
              </OutlinedCard>
            </li>
          ))}
        </ul>
      </section>

      <section id='stats'>
        <h3>Stats</h3>
        <Divider />
        <ul>
          {pokemon?.stats.map((stat) => (
            <li
              key={`stat${stat.stat.name}`}
            >
              <header>
                <h4>{capFirstLetter(stat.stat.name)}</h4>
                <p htmlFor={stat.stat.name}>{stat.base_stat}/200</p>
              </header>
              <ProgressBar
                id={stat.stat.name}
                value={stat.base_stat}
              />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

const OutlinedCard = ({ children, width }) => {
  return <div className='outlinedCard'
    style={{
      width: width ? width : "fit-content",
      textAlign: "center"
    }}
  >
    <p>{children}</p>
  </div>
}

const Divider = () => {
  return <div
    style={{
      width: "100%",
      border: "1px solid rgba(0, 0, 0, 0.3)",
      marginBottom: "24px"
    }}
  />
}
export default PokemonDetails;