import notFoundImg from "../assets/images/notFound.png"

const handleImgError = ({ ev, pokemon }) => {
    ev.preventDefault()
    const newImg = pokemon?.sprites?.front_default
    if (newImg) {
        ev.target.src = newImg;
        ev.target.style.transform = "scale(1.5)"
    }
    else {
        ev.target.src = notFoundImg;
    }
    return true
}

export default handleImgError;