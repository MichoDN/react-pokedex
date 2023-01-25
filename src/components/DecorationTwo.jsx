import React from 'react';
import pokedexText from '../assets/pokedexText.png'

const Decorationtwo = () => {
    const ball = {
        ballSize: 6,
        borderSize: 0.6,
    }
    return (
        <div className='deco'
            style={{
                borderBottom: "3rem solid black",
                width: "100%",
                height: `fit-content`,
                backgroundColor: "#DD1A1A",
                marginBottom:"2rem"
            }}
        >
            <div
                style={{
                    backgroundColor: "white",
                    border: `${ball.borderSize}rem solid #101010`,
                    width: `${ball.ballSize}rem`,
                    height: `${ball.ballSize}rem`,
                    borderRadius: "100%",
                    position: "relative",
                    left: `calc(100% - 5vw - ${ball.ballSize}rem`,
                    top: `4.5rem`,
                }}
            />
            <img
                src={pokedexText}
                alt=""
                style={{
                    height:"4.5rem",
                    position:"absolute",
                    left:"5vw",
                    top:"0.5rem"
                }}
            />
        </div>
    );
};

export default Decorationtwo;