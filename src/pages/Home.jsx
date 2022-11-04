import React from 'react';
import { useNavigate } from "react-router-dom";
import Decoration from "../components/Decoration"

import facebookIcon from '../assets/facebookIcon.svg'
import githubIcon from '../assets/githubIcon.svg'
import linkedInIcon from '../assets/linkedInIcon.svg'
const Home = () => {
    const navigate = useNavigate()
    return (
        <div className='homeCont components'>
            <Decoration />
            <h1>Welcome to my pokedex!</h1>
            <div className='aboutMe'>
                <div className='homeDescriptionCont'>
                    <h2>About:</h2>
                    <p>
                        If you liked pokemon as kid, you will love this site!
                        it's a pokedex done by me and part of my portfolio,
                        it shows my skills as a front-end developer where I've
                        implemented every pokemon and desciption using the poke-API.
                    </p>
                </div>
                <div className="socialMedia">
                    <h2>Contact</h2>
                    <ul>
                        <li><img src={facebookIcon} alt="" /></li>
                        <li><img src={githubIcon} alt="" /></li>
                        <li><img src={linkedInIcon} alt="" /></li>
                    </ul>
                </div>
            </div>

            <div className='projectInfo'>
                <div className='devDep'>
                    <h2>Used in this project:</h2>

                    <ul>
                        <li>React JS</li>
                        <li>Axios</li>
                        <li>React Redux</li>
                        <li>React Router</li>
                        <li>React router DOM</li>
                    </ul>
                </div>

                <div className='homeCharacteristics'>
                    <h2>Characteristics</h2>

                    <ul>
                        <li>Responsive</li>
                        <li>Interactive</li>
                        <li>Fast Loading</li>
                    </ul>
                </div>
                
                <div className='seeMore'>
                    <p><b>Click here to see my Pokedex!</b></p>
                    <button onClick={() => navigate("/Login")}>Continue</button>
                </div>
            </div>
        </div>
    );
};

export default Home;