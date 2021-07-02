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
    {name:"Bigfoot",CombatRange:"Ranged", minions: "Harpies (3) ", health: "16"}
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

  function SelectCharacter() { 
    const random = Math.floor(Math.random() * 6); //0-5
    const random2 = Math.floor(Math.random() * 6); //0-5

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
