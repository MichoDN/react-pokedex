import capFirstLetter from "../utils/capFirstLetter";

class PokemonCard {
  constructor(res) {
    const pokemon = res.data;
    this.name = capFirstLetter(pokemon.name);
    this.types = pokemon.types.map(type => {
      return { name: capFirstLetter(type.type.name), slot: type.slot }
    });
    this.id = pokemon.id;
    this.sprite = pokemon.sprites.front_default;
  }
}

export default PokemonCard