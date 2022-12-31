import React, { useEffect, useState } from 'react';
import colors from '../assets/colors.json'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import onNotFoundImg from '../hooks/notFoundImgHoook';

const PokemonCard = ({ name }) => {
    const [pokemon, setPokemon] = useState()
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
            .then(res => setPokemon(res.data))
    }, [])

    const cardColor = colors.filter((color) => color.type === pokemon?.types[0].type.name)

    return (
        <div className='pokemonCardCont' style={{ border: `${cardColor[0]?.color} 3px solid`, boxShadow: `0px 0px 1px 2px ${cardColor[0]?.color}`}}>
            <div className='cardImgCont' style={{ background: cardColor[0]?.color }}>
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon?.id}.svg`}
                    alt="inCardImg"
                    onClick={() => {
                        navigate(`/pokemons/${pokemon?.name}/`)
                        window.scroll(0,0);
                    }}
                    onError={e =>{
                        e.target.onError = null 
                        e.target.src= onNotFoundImg(pokemon)
                    }}
                />
            </div>

            <h1 style={{ color: cardColor[0]?.color }}>{pokemon?.name}</h1>

            <ul className="inCardTypes">
                {
                    pokemon?.types.map((type) => (
                        <li key={type.type.url}>{type.type.name}</li>
                    ))
                }
            </ul>
            <h4 className='ulTopic'>Type</h4>

            <ul className="inCardStats" style={{ color: cardColor[0]?.color }}>
                <li>HP <br /> {pokemon?.stats[0].base_stat}</li>
                <li>ATT <br /> {pokemon?.stats[1].base_stat}</li>
                <li>DEF <br /> {pokemon?.stats[2].base_stat}</li>
                <li>SPEED <br /> {pokemon?.stats[5].base_stat}</li>
            </ul>
        </div>
    );
};

export default PokemonCard;