import React from 'react'
import { globalContext } from '../context/globalContext'
import './CharacterCard.css'

function CharacterCard(props) {

    const SelectedCharacter= props.character;
    const cardType = (props.card == 1)? "character-card1": "character-card2";

    return (
        <>
            <div className={cardType}>
                <img src={SelectedCharacter.characterImg} alt="character image" className="characterimage"/>
                <div className="character-info">
                    <h3>{SelectedCharacter.name}</h3>
                    <h4>Sidekick: {SelectedCharacter.minion}</h4>  
                    <img src={SelectedCharacter.CombatRange} alt="character range" className="rangelogo"/> 
                </div>
            </div>
        </>
    )
}


export default CharacterCard