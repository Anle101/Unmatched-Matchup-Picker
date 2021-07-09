import React, {useContext, useState, useEffect} from 'react'
import { globalContext } from '../context/globalContext'
import './CharacterCard.css'
import {useSpring,animated} from 'react-spring'

function CharacterCard(props) {

    const SelectedCharacter= props.character;
    const cardType = (props.card == 1)? "card1": "card2";
    const [showInfo,setshowInfo] = useState(true);

    const Result = useContext(globalContext);
    const springup = useContext(globalContext);
    const titletransition = useContext(globalContext);

    const showInformation = () => {
        if (window.innerWidth <= 800) { 
            setshowInfo(false);
        } else { 
            setshowInfo(true);
        }
    }

    useEffect (() => {showInformation();}, []);
    window.addEventListener('resize', showInformation);
    return (
        <>
            <animated.div style={Result?springup: titletransition} className={cardType + " character-card"}>
                <img src={SelectedCharacter.characterImg} alt="character image" className="characterimage"/>
                <div className="character-info">
                    <h3><u>{SelectedCharacter.name}</u> </h3>
                    {showInfo &&
                        <>
                            <img src={SelectedCharacter.CombatRange} alt="character range" className="mainrangelogo"/> 
                            <h5>Sidekick: {SelectedCharacter.minion}<br/><img src={SelectedCharacter.minionRange}  className="rangelogo"/></h5>  
                            
                            <p>Movement -> {SelectedCharacter.move}</p>
                        </>
                    }
                    
                </div>
            </animated.div>
        </>
    )
}


export default CharacterCard