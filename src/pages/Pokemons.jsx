import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Browser from '../components/Browser';
import DecorationTwo from '../components/DecorationTwo'
import PokemonCard from '../components/PokemonCard';
import Pagination from '../components/Pagination';

import { setCurrentPage } from '../store/slices/currentPage.slice';
import { selectedTypeThunk } from '../store/slices/selectedType.slice';

const Pokemons = () => {
    const allURL = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154"
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userName = useSelector(state => state.userName);
    const [showedPokemons, setShowedPokemons] = useState([]);

    const selectedList = useSelector(state => state.selectedList);
    const currentPage = useSelector(state => state.currentPage);
    const postPerPage = useSelector(state => state.postPerPage);
    const currentSearch = useSelector(state => state.currentSearch)
    const [totalPages, setTotalPages] = useState(0)

    const goBackFunct = () => {
        dispatch(selectedTypeThunk(allURL))
        dispatch(setCurrentPage(1))
        navigate('/login')
    }

    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;


    useEffect(() => {
        const searchToLowerCase = currentSearch.toLowerCase()
        let filteredBySearch = selectedList.filter((pokemon) => {
            if (pokemon.name) {
                if (pokemon.name.includes(searchToLowerCase)) {
                    return pokemon
                }
            } else {
                if (pokemon.pokemon.name.includes(searchToLowerCase)) {
                    return pokemon
                }
            }
        })
        setTotalPages(filteredBySearch.length)
        let currentPokemons = filteredBySearch.slice(firstPostIndex, lastPostIndex);
        //If currentPokemons array format === filtered by type format: fix it to make it understandable to showedPokemons
        if (currentPokemons[0]?.pokemon) {
            currentPokemons = currentPokemons.map((pokemon) => pokemon.pokemon)
            setShowedPokemons(currentPokemons)

        } else setShowedPokemons(currentPokemons)
    }, [selectedList, firstPostIndex, currentSearch])

    return (
        <>
            <DecorationTwo />
            <a className='goBack' onClick={() => goBackFunct()}>Go back</a>
            <div className='pokemonsComp components'>
                <div className='pokemonsContentCont'>
                    <h1><span className='importantText'>Welcome {userName}</span>, here you will find all your favorites pokemons</h1>
                    <div className="pokedex">
                        <Browser />
                        <div className="cardListCont">
                            {showedPokemons?.map((pokemon) => (
                                <PokemonCard key={pokemon.url} name={pokemon.name} />
                            ))}
                        </div>

                        <div className='paginationContainer'>
                            <Pagination totalPosts={totalPages} postPerPage={postPerPage} firstPostIndex={firstPostIndex} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Pokemons;
