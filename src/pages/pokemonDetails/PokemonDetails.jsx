import './pokemonDetails.css';

import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import pokeAPI from '../../api/pokeAPI';

import pokemonColors from '../../assets/pokemonColors.json'
import getGradientColors from '../../utils/getGradientColors';
import handleImgError from '../../utils/handleImgError';

import ProgressBar from '../../components/progressBar/ProgressBar';
import PokemonData from '../../models/PokemonData.model';

function PokemonDetails () {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState();
  const [bgColors, setBgColors] = useState([])
  useEffect(() => {
    pokeAPI.get(`/pokemon/${name}`)
      .then(res => {
        const pokemonData = new PokemonData(res);
        setPokemon(pokemonData);
        console.log(pokemonData)
      })
  }, [])

  useEffect(() => {
    if (pokemon) {
      const colors = getGradientColors(pokemon?.types[0]?.name);
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
        <h1>{pokemon?.name}</h1>
        <Divider />

        <ul id="types">
          {pokemon?.types.map((type) => (
            <li
              className='cardTypeShadow'
              key={`type ${type.name}`}
              style={{
                background: pokemonColors[type?.name].typeColor,
              }}
            >
              {type.name}
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
              key={`ability${ability.name}`}
            >
              <OutlinedCard width="150px">
                {ability.name}
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
              key={`stat${stat.name}`}
            >
              <header>
                <h4>{stat.name}</h4>
                <p htmlFor={stat.name}>{stat.base_stat}/200</p>
              </header>
              <ProgressBar
                id={stat.name}
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