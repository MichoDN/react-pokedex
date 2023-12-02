class PokemonList{
  constructor(res){
    const pokemons = res.data.results;
    return pokemons.map(pokemon => pokemon.name);
  }
}

export default PokemonList