import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import colors from '../assets/colors.json'
import onNotFoundImg from '../hooks/notFoundImgHoook';

const PokemonDetail = () => {
    const { name } = useParams();
    const [pokemon, setPokemon] = useState();
    const navigate = useNavigate()

    const colorSelect = (type) => {
        const colorSelected = colors.filter((color) => color.type === type)
        return colorSelected[0]?.color
    }

    const mainTypeColor = colorSelect(pokemon?.types[0].type.name)

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
            .then(res => setPokemon(res.data));
    }, [])

    return (
        <>
            <a className='goBack' onClick={() => {
                window.scroll(0,0);
                navigate('/pokemons')
                }}>Go back</a>
            <div className='pokemonDetailsCont components'>
                <div className='pokeDetailsContainer'>
                    <div className='detailsImgCont' style={{ backgroundColor: mainTypeColor }}>
                        <img
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon?.id}.svg`}
                            alt="inDetailsImg"
                            onError={e =>{
                                e.target.onError = null 
                                e.target.src= onNotFoundImg(pokemon)
                            }}
                        />
                    </div>
                    <div className='pokeDetailsBody'>
                        <label
                            style={{ color: mainTypeColor }}
                        >
                            #{pokemon?.id}
                        </label>

                        <div className='inDetailsNameCont'>
                            <h1>{name}</h1>
                        </div>

                        <div className='physicalInfo'>
                            <ul>
                                <li><b>Weight</b></li>
                                <li>{Math.floor(pokemon?.weight / 10)}kg</li>
                            </ul>

                            <ul>
                                <li><b>Height</b></li>
                                <li>{Math.floor(pokemon?.height / 10)}m</li>
                            </ul>
                        </div>

                        <div className="basicInfo">
                            <div className="types">
                                <h3>Types</h3>
                                <ul>
                                    {pokemon?.types.map((type) =>
                                        <li key={type.type.url}
                                            style={{
                                                color: "white",
                                                backgroundColor: colorSelect(type.type.name)
                                            }}
                                        >
                                            <b>{type.type.name}</b>
                                        </li>
                                    )}
                                </ul>
                            </div>

                            <div className="Skills">
                                <h3>Abilities</h3>
                                <ul>
                                    {pokemon?.abilities.map((ability) => <li key={ability.ability.url}>{ability.ability.name}</li>)}
                                </ul>
                            </div>
                        </div>

                        <div className="stats">
                            <div className='statsHeader'>
                                <h1>Stats</h1>
                            </div>
                            <ul>
                                <li>
                                    <label className='statLabel'><b>Health</b> <span>{pokemon?.stats[0].base_stat}/150</span></label>
                                    <div className="progressBar"><div style={{ width: `${pokemon?.stats[0].base_stat / 1.5}%` }} /></div>
                                </li>
                                <li>
                                    <label className='statLabel'><b>Attack</b> <span>{pokemon?.stats[1].base_stat}/150</span></label>
                                    <div className="progressBar"><div style={{ width: `${pokemon?.stats[1].base_stat / 1.5}%` }} /></div>
                                </li>
                                <li>
                                    <label className='statLabel'><b>Defense</b> <span>{pokemon?.stats[2].base_stat}/150</span></label>
                                    <div className="progressBar"><div style={{ width: `${pokemon?.stats[2].base_stat / 1.5}%` }} /></div>
                                </li>
                                <li>
                                    <label className='statLabel'><b>Speed</b> <span>{pokemon?.stats[5].base_stat}/150</span></label>
                                    <div className="progressBar"><div style={{ width: `${pokemon?.stats[5].base_stat / 1.5}%` }} /></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <div className="movements pokeDetailsContainer">
                    <div className='statsHeader'>
                        <h1>Movements</h1>
                    </div>
                    <ul>
                        {
                            pokemon?.moves.map((move) => (
                                <li key={move.move.url}>{move.move.name}</li>
                            ))
                        }
                    </ul>
                </div> */}
            </div>
        </>
    );
};

export default PokemonDetail;