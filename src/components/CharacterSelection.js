import React, {useContext,useState,useEffect} from 'react'
import { globalContext } from '../context/globalContext';
import './CharacterSelection.css';

import {useSpring,animated} from 'react-spring';

function CharacterSelection() {
    
    const springup = useContext(globalContext);
    const SelectCharacter = useContext(globalContext);
    
    return (
        <>
            <animated.button style={springup} className="start-button" onClick={SelectCharacter}>GIVE ME MY MATCHUP </animated.button>
        </>
    )
}

export default CharacterSelection
