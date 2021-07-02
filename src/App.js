import logo from './logo.svg';
import { useState, useEffect, useContext } from 'react';
import './App.css';
import {useSpring,animated} from 'react-spring';

function App() {

  const titletransition = useSpring({
      to: {opacity:1},
      from: {opacity:0},

      config: {duration: 1000},
  });


  return (
    <>
      <div className="App">
        
          <animated.img src={logo} style={titletransition} className="App-logo" alt="logo" />
          <p>
            IN BATTLE, THERE ARE <b>NO EQUALS.</b>
          </p>
      </div>
    </>
  );
}

export default App;
