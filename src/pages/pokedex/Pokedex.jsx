import './pokemons.css';
import { useRef, useState, useEffect } from 'react';

import Card from '../../components/pokemonCard/PokemonCard.jsx';
import Highlight from '../../components/highlight/highlight.jsx';;

import capFirstLetter from '../../utils/capFirstLetter.js';
import pokeAPI from '../../api/pokeAPI.js';

import { useDispatch, useSelector } from 'react-redux';
import { setFilteredPokemons } from '../../store/slices/filteredPokemons.slice.js';
import { getAllPokemonsThunk, setPokemonsByTypeThunk } from '../../store/slices/pokemons.slice.js';
import { setPages } from '../../store/slices/pokemonPagination.slice.js';

function Pokedex() {
  const { username } = useSelector(state => state.user);
  return (
    <main id='pokemonsPage'>
      <header>
        <h1>Welcome <Highlight>{capFirstLetter(username)}!</Highlight> here you will find all your favorites pokemons</h1>
      </header>

      <PokemonFilters />
      <CardContainer />
    </main>
  );
};

const PokemonFilters = () => {
  const dispatch = useDispatch();

  const [pokemonTypes, setPokemonTypes] = useState()
  useEffect(() => {
    !pokemonTypes && pokeAPI.get("/type")
      .then(res => setPokemonTypes(res.data.results))
  }, [])

  const selectRef = useRef();
  const handleSelect = (ev) => {
    const selectValue = ev.target.value;
    if (selectValue) {
      dispatch(setPokemonsByTypeThunk(selectValue))
    } else {
      dispatch(getAllPokemonsThunk())
    }
  };

  const pokemons = useSelector(state => state.pokemons);
  const inputRef = useRef();
  const handleSubmit = (ev) => {
    ev && ev.preventDefault() //if pokemons are filtered using browser will prevent re-render
    const inputValue = inputRef.current.value.toLowerCase();
    dispatch(setFilteredPokemons({ pokemons, inputValue }))
  };

  useEffect(() => {//Every time selector is used it looks for whats in the browser
    handleSubmit()
  }, [handleSelect])

  return <section id='pokemonFilters'>
    <form onSubmit={handleSubmit} className='simpleForm'>
      <input
        type="text"
        placeholder='Search pokemon by name'
        name="browserInput"
        ref={inputRef}
      />
      <button type='submit'>search</button>
    </form>

    <select ref={selectRef} onChange={ev => handleSelect(ev)}>
      <option value="">all pokemons</option>
      {pokemonTypes?.map((type) => (
        <option
          key={type.url}
          value={type.url}
        >
          {type.name}
        </option>
      ))}
    </select>
  </section>
}

function CardContainer() {
  const { offset, limit, pages } = useSelector(state => state.pagination);
  const filteredPokemons = useSelector(state => state.filteredPokemons);
  const currentPage = (offset + limit) / limit;
  const dispatch = useDispatch();

  useEffect(() => { //everytime filteredPokemon is changed changes actualPage to 0
    if (filteredPokemons) {
      const pokemonCount = filteredPokemons.length;
      setPagination(pokemonCount, null);
    }
  }, [filteredPokemons]);

  const setPagination = (pokemonCount, offset) => {
    dispatch(setPages({ pokemonCount, offset }));
  }

  const showedPokemons = filteredPokemons.slice(offset, offset + limit);
  return <>
    <section className='cardsContainer'>
      {showedPokemons?.map((pokemon) => (
        <Card
          key={pokemon}
          pokemonName={pokemon}
        />
      ))}
    </section>
    <ol id='pokemonPagination'>
      <li>
        <button
          onClick={() => setPagination(filteredPokemons.length, (currentPage - 10) * limit - 12)}
          disabled={currentPage < 10}
        >
          {"<<"}
        </button>
      </li>

      {pages.map((page) => (
        <li key={`pagination${page}`}>
          <button
            onClick={() => setPagination(filteredPokemons.length, page * limit - 12)}
            style={{ backgroundColor: offset / limit + 1 === page && "#A62D2D" }}
          >
            {page}
          </button>
        </li>
      ))}

      <li>
        <button
          onClick={() => setPagination(filteredPokemons.length, (currentPage + 10) * limit - 12)}
          disabled={(currentPage * 12) + 120 > filteredPokemons.length}
        >
          {">>"}
        </button>
      </li>
    </ol>
  </>
}

export default Pokedex;