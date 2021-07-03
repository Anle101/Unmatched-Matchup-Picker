import logo from './logo.png';
import { useState, useEffect, useContext } from 'react';
import './App.css';

import {useSpring,animated, useChain, useSpringRef, config} from 'react-spring';

import {globalContext} from './context/globalContext';
import CharacterCard from './components/CharacterCard';

function App() {
  const Characters = [
    {name:"MEDUSA",CombatRange:"/ranged.svg", minion: "HARPIES (3)", health: "16", move:"3", characterImg:"/medusa.png"},
    {name:"SINBAD",CombatRange:"/melee.svg", minion: "THE PORTER", health: "16",move:"2", characterImg:"/sinbad.png"},
    {name:"ALICE",CombatRange:"/melee.svg", minion: "JABBERWOCK", health: "13", move: "2",characterImg:"/alice.png"},
    {name:"KING AUTHUR",CombatRange:"/melee.svg", minion: "MERLIN", health: "16", move:"2",characterImg:"/authur.png"},
    {name:"SHERLOCK HOLMES",CombatRange:"/melee.svg", minion: "DR. WATSON", health: "16",characterImg:"/sherlock.png"},
    {name:"JEKYLL & HYDE",CombatRange:"/melee.svg", minion: "None", health: "16", move:"2",characterImg:"/jekyll.png"},
    {name:"INVISIBLE MAN",CombatRange:"/melee.svg", minion: "None", health: "15", move:"2", characterImg:"/invisibleman.png"},
    {name:"DRACULA",CombatRange:"/melee.svg", minion: "SISTERS (3)", health: "13", move:"2",characterImg:"/dracula.png"},
    {name:"LITTLE RED",CombatRange:"/melee.svg", minion: "HUNTSMAN", health: "14", move:"2",characterImg:"/littlered.png"},
    {name:"BEOWULF",CombatRange:"/melee.svg", minion: "WIGLAF", health: "17", move:"2",characterImg:"/beowulf.png"},
    {name:"BRUCE LEE",CombatRange:"/melee.svg", minion: "None", health: "14", move:"3",characterImg:"/brucelee.png"},
    {name:"ROBIN HOOD",CombatRange:"/ranged.svg", minion: "OUTLAWS (4)", health: "13", move:"2",characterImg:"/robinhood.png"},
    {name:"BIGFOOT",CombatRange:"/melee.svg", minion: "JACKALOPE", health: "16", move:"3",characterImg:"/bigfoot.png"},

  ];

  const [Result, setResult] = useState(false);
  const [ChosenCharacter1, setChosenCharacter1] = useState({name:"",CombatRange:"", minions: "", health: "", move:""});
  const [ChosenCharacter2, setChosenCharacter2] = useState({name:"",CombatRange:"", minions: "", health: "", move:""});


  const titleIntro = useSpringRef();

  const titletransition = useSpring({
    ref:titleIntro,
    to: {opacity:1,y: 40},
    from: {opacity:0,y: -200},

    config: config.stiff,
    
  });

  const springupIntro = useSpringRef();
  const springup = useSpring({
    ref:springupIntro,
    to: {y:0},
    from: {y:400},

 
    config: config.default,
   
  });

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  function SelectCharacter() { 
    const random = getRndInteger(0,12); //0-13
    const random2 = getRndInteger(0,12); //0-13

    console.log("hi");
    setChosenCharacter1(Characters[random]);
    setChosenCharacter2(Characters[random2]);
    setResult(true);

  }
  useChain([titleIntro, springupIntro], [0,0]);
  return (
    <>
      <globalContext.Provider value={SelectCharacter, springup}>
        <div className="App">
            
            <animated.img src={logo} style={titletransition} className="App-logo front" alt="logo" />
            <animated.p style={titletransition} className="front">
              IN BATTLE, THERE ARE <b>NO EQUALS.</b>
            </animated.p>

            {!Result && 
              <>
                <animated.button style={springup} className="start-button front" onClick={SelectCharacter}>GIVE ME MY MATCHUP </animated.button>
              </>  
            }
            

            {Result && 
              <>
                <h1>VS.</h1>
                <animated.button style={springup} className="start-button front" onClick={SelectCharacter}>GIVE ME MY MATCHUP </animated.button>
                <CharacterCard character={ChosenCharacter1} card={1}/>
                <CharacterCard character={ChosenCharacter2} card={2}/>
              </>
            }
        </div>
      </globalContext.Provider>
        
    </>
  );
}

export default App;
