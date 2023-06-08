import '../css/navbar.css'

import React from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import capFirstLetter from "../hooks/capFirstLetter"
import getRandomId from '../hooks/getRandomId';
import pokeAPI from '../api/pokeAPI';

import pokedexLogo from "../assets/images/pokedex.png"

const generatePath = (location) => {
  const parts = location.split("/").filter((part) => part.length > 1)
  return parts
}

const NavBar = () => {
  const location = useLocation().pathname;
  const path = generatePath(location);
  const navigate = useNavigate();

  const randomPokemon = async () => {
    const pokemon = await pokeAPI.get(`/pokemon/${getRandomId()}`);
    navigate(`/pokemons/${pokemon.data.name}`);
  }

  return (
    <nav>
      <div className='red'>
        <div className="tooltip">
          <img src={pokedexLogo} />
        </div>
      </div>
      <div className='black'>
        <div className="tooltip">
          <ul>
            {path.length > 0 &&
              <li key={`pathPartHome`}>
                <a href={"/#/"}>
                  Home
                </a>
              </li>
            }
            {path.map((part, index, path) => (
              <li key={`pathPart${part}`}>
                <div>{">"}</div>
                <a href={index + 1 < path.length ? `/#/${part}` : null}>
                  {capFirstLetter(part)}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={randomPokemon}
            disabled={path.length !== 1}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;