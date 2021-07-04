import React, {useContext, useState} from 'react'
import { globalContext } from '../context/globalContext'
import './CharacterCard.css'
import {useSpring,animated} from 'react-spring'

function CharacterCard(props) {

    const SelectedCharacter= props.character;
    const cardType = (props.card == 1)? "character-card1": "character-card2";


    const Result = useContext(globalContext);
    const springup = useContext(globalContext);
    const titletransition = useContext(globalContext);
    return (
        <>
            <animated.div style={Result?springup: titletransition} className={cardType}>
                <img src={SelectedCharacter.characterImg} alt="character image" className="characterimage"/>
                <div className="character-info">
                    <h3><u>{SelectedCharacter.name}</u> <img src={SelectedCharacter.CombatRange} alt="character range" className="rangelogo"/> </h3>
                    <h5>Sidekick: {SelectedCharacter.minion} <img src={SelectedCharacter.minionRange}  className="rangelogo"/></h5>  
                    <h7>Movement -> {SelectedCharacter.move}</h7>
                </div>
            </animated.div>
        </>
    )
}


export default CharacterCard