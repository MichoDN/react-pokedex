import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { selectedTypeThunk } from '../store/slices/selectedType.slice';
import { setCurrentSearch } from '../store/slices/currentSearch.slice';

const Browser = () => {
    const dispatch = useDispatch();
    const selectedType = useSelector(state => state.selectedType)
    const currentSearch = useSelector(state => state.currentSearch)

    const [browserInput, setBrowserInput] = useState(currentSearch)

    const allURL = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154"
    const [allPokemonTypes, setAllPokemonTypes] = useState([])


    const browserHandler = (ev) => {
        if (ev.keyCode === 13) {
            dispatch(setCurrentSearch(browserInput))
            ev.target.blur()
        } else if (ev === 'button') {
        }
    }

    const dropDownSelect = value => dispatch(selectedTypeThunk(value));


    useEffect(() => {
        if (selectedType == allURL) dispatch(selectedTypeThunk(allURL))
    }, [dispatch])

    //Gets dopdown options
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/type/')
            .then(res => setAllPokemonTypes(res.data.results))
    }, [])

    return (
        <div className="browserCont">
            <div className='searchCont'>
                <input
                    id='browserInput'
                    type="text"
                    placeholder='Seach a pokemon name...'
                    onChange={ev => setBrowserInput(ev.target.value.toLowerCase())}
                    onKeyDown={ev => browserHandler(ev)}
                    value={browserInput}
                />
                <button onClick={() => browserHandler('button')}>Search</button>
            </div>
            <select name='pokemonTypes' id='pokemonTypes' value={selectedType} onChange={(ev) => dropDownSelect(ev.target.value)}>
                <option value={allURL}>all pokemons</option>
                {allPokemonTypes?.map((type) => (
                    <option key={type.url} value={type.url}>{type.name}</option>
                ))}
            </select>
        </div>
    );
};

export default Browser;