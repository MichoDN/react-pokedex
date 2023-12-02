import capFirstLetter from "../utils/capFirstLetter";

class PokemonData {
  constructor(res){
    const pokemon = res.data;

    this.id = pokemon.id;
    this.name = capFirstLetter(pokemon.name);
    this.weight = pokemon.weight;
    this.height = pokemon.height;
    this.sprite = pokemon.sprites.front_default;
    
    this.types = pokemon.types.map(type => {
      return { name: capFirstLetter(type.type.name), slot: type.slot }
    });
    this.abilities = pokemon.abilities.map(ability => {
      return {name: ability.ability.name}
    });
    this.stats = pokemon.stats.map(stat => {
      return {name: stat.stat.name, base_stat: stat.base_stat}
    });
  }
}

export default PokemonData