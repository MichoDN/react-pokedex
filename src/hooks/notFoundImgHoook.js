import notFoundImg from '../assets/notFound.png'

const onNotFoundImg = (pokemon) => {
    if (pokemon.sprites.front_default) return pokemon.sprites.front_default
    else return notFoundImg
}

export default onNotFoundImg