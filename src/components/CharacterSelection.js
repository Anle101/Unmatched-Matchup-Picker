import React, {useContext,useState,useEffect} from 'react'
import { globalContext } from '../context/globalContext';

import {useSpring,animated} from 'react-spring';

function CharacterSelection() {

    const springup = useContext(globalContext);
    
    return (
        <>
            <animated.h1 style={springup}>CHOOSE YOUR CHARACTER</animated.h1>
        </>
    )
}

export default CharacterSelection
