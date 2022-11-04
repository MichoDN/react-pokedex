import React, { useState } from 'react';
import pokedexText from '../assets/pokedexText.png'
import Decoration from '../components/Decoration';
import { useDispatch } from 'react-redux'
import { setName } from '../store/slices/userName.slice';
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState("");

    const enterHandler = (keyCode) => {
        if (keyCode === 13) {
            dispatch(setName(inputValue))

            if (inputValue != "") navigate('/pokemons') 
            else alert("Please Enter your name")
        }
    }
    
    return (
        <div className='loginComp components'>
            <img src={pokedexText} alt="pokedexText" />
            
            <h1 className='importantText'>Hello Trainer!</h1>

            <h2>To start, tell me your name</h2>

            <div className='loginFormCont'>
                <input
                    type="text"
                    placeholder="Your name..."
                    onChange={ev => setInputValue(ev.target.value)}
                    onKeyDown={ev => enterHandler(ev.keyCode)}
                />
                <button onClick={() => enterHandler(13)}>Start</button>
            </div>
            <Decoration />
        </div>
    );
};

export default Login;