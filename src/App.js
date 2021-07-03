import logo from './logo.png';
import { useState, useEffect, useContext } from 'react';
import './App.css';

import {useSpring,animated, useChain, useSpringRef, config} from 'react-spring';

import {globalContext} from './context/globalContext';
import CharacterSelection from './components/CharacterSelection';

function App() {

  const Characters = [
    {name:"Medusa",CombatRange:"Ranged", minions: "Harpies (3) ", health: "16"},
    {name:"Sinbad",CombatRange:"Melee", minions: "None", health: "16"},
    {name:"Alice",CombatRange:"Ranged", minions: "Harpies (3) ", health: "16"},
    {name:"King Author",CombatRange:"Ranged", minions: "Harpies (3) ", health: "16"},
    {name:"Robin Hood",CombatRange:"Ranged", minions: "Harpies (3) ", health: "16"},
    {name:"Bigfoot",CombatRange:"Ranged", minions: "Harpies (3) ", health: "16"},
    {name:"Sherlock Holmes",CombatRange:"Melee", minions: "Harpies (3) ", health: "16"},
    {name:"Jekyll & Hyde",CombatRange:"Melee", minions: "Harpies (3) ", health: "16"},
    {name:"Invisible Man",CombatRange:"Melee", minions: "Harpies (3) ", health: "16"},
    {name:"Dracula",CombatRange:"Ranged", minions: "Harpies (3) ", health: "16"},
    {name:"Little Red",CombatRange:"Ranged", minions: "Harpies (3) ", health: "16"},
    {name:"Beowulf",CombatRange:"Ranged", minions: "Harpies (3) ", health: "16"},
    {name:"Bruce Lee",CombatRange:"Melee", minions: "Harpies (3) ", health: "16"},
    
  ];

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
    from: {y:1000},

 
    config: config.stiff,
   
  });

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  function SelectCharacter() { 
    const random = getRndInteger(0,12); //0-5
    const random2 = getRndInteger(0,12); //0-5

    console.log (Characters[random].name);
    console.log (Characters[random2].name);
  }
  useChain([titleIntro, springupIntro], [0,0]);
  return (
    <>
      <globalContext.Provider value={SelectCharacter}>
        <div className="App">
            
            <animated.img src={logo} style={titletransition} className="App-logo" alt="logo" />
            <animated.p style={titletransition}>
              IN BATTLE, THERE ARE <b>NO EQUALS.</b>
            </animated.p>

            <CharacterSelection />
        </div>
      </globalContext.Provider>
        
    </>
  );
}

export default App;
