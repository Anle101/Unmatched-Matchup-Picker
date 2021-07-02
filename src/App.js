import logo from './logo.svg';
import { useState, useEffect, useContext } from 'react';
import './App.css';

import {useSpring,animated, useChain, useSpringRef} from 'react-spring';

import {globalContext} from './context/globalContext';
import CharacterSelection from './components/CharacterSelection';

function App() {
  const titleIntro = useSpringRef;

  const titletransition = useSpring({
      to: {opacity:1,y: 40},
      from: {opacity:0,y: -200},

      config: {mass: 1, frequency: 1, damping: 1},
    
  });

  const springupIntro = useSpringRef;
  const springup = useSpring({
    to: {y:0},
    from: {y:2000},

    delay:300,

    config: {mass: 1, frequency: 1, damping: 1},
   
  });

 
  return (
    <>
      <globalContext.Provider value={springup}>
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
