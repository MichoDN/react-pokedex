import React from 'react';
import pokedexText from '../assets/pokedexText.png'

const Navbar = () => {
  const ball = {
    ballSize: 6,
    borderSize: 0.8,
  }
  return (
    <>
      <div
        style={{
          backgroundColor: "#DD1A1A",
          height: "6rem",
          paddingLeft: "2vw",
          display: "flex",
          alignItems: "center"
        }}
      >
        <img
          src={pokedexText}
          alt="pokedexLogo"
          style={{
            maxWidth: "90vw",
            maxHeight: "4rem",
            left: "5vw",
            top: "0.5rem"
          }}
        />

      </div>
      <div
        style={{
          backgroundColor: "black",
          height: "3rem",
          marginBottom: "2rem",
          boxSizing: "content-box"
        }}
      >

        <div
          style={{
            backgroundColor: "white",
            border: `${ball.borderSize}rem solid #101010`,
            width: `${ball.ballSize}rem`,
            height: `${ball.ballSize}rem`,
            borderRadius: "100%",
            position: "absolute",
            left: `calc(100% - 5vw - ${ball.ballSize}rem`,
            top: `4.5rem`,
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
          }}
        >
        </div>
      </div>
    </>
  );
};

export default Navbar;