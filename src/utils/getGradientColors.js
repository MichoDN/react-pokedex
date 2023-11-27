import pokemonColors from "../assets/pokemonColors.json"

const getGradientColors = (pokemonType) =>{
  const color1 = pokemonColors[pokemonType].gradientColor1
  const color2 = pokemonColors[pokemonType].gradientColor2
  return [color1, color2]
} 

export default getGradientColors;