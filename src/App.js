import logo from './logo.png';
import { useState, useEffect, useContext } from 'react';
import './App.css';

import {useSpring,animated, useChain, useSpringRef, config} from 'react-spring';

import {globalContext} from './context/globalContext';
import CharacterCard from './components/CharacterCard';

const Characters = [

  {name:"MEDUSA",CombatRange:"/ranged.svg", minion: "HARPIES (3)", minionRange:"/melee.svg", health: "16", move:"3", characterImg:"/medusa.png", Set:"Battle of Legends Vol. One"},
  {name:"SINBAD",CombatRange:"/melee.svg", minion: "THE PORTER", minionRange:"/melee.svg", health: "16",move:"2", characterImg:"/sinbad.png", Set:"Battle of Legends Vol. One"},
  {name:"ALICE",CombatRange:"/melee.svg", minion: "JABBERWOCK", minionRange:"/melee.svg", health: "13", move: "2",characterImg:"/alice.png", Set:"Battle of Legends Vol. One"},
  {name:"KING AUTHUR",CombatRange:"/melee.svg", minion: "MERLIN", minionRange:"/ranged.svg", health: "16", move:"2",characterImg:"/authur.png", Set:"Battle of Legends Vol. One"},
  {name:"SHERLOCK HOLMES",CombatRange:"/melee.svg", minion: "DR. WATSON", minionRange:"/ranged.svg", health: "16",move:"2",characterImg:"/sherlock.png", Set:"Cobble of Fog"},
  {name:"JEKYLL & HYDE",CombatRange:"/melee.svg", minion: "None", minionRange:"", health: "16", move:"2",characterImg:"/jekyll.png", Set:"Cobble of Fog"} ,
  {name:"INVISIBLE MAN",CombatRange:"/melee.svg", minion: "None", minionRange:"", health: "15", move:"2", characterImg:"/invisibleman.png", Set:"Cobble of Fog"},
  {name:"DRACULA",CombatRange:"/melee.svg", minion: "SISTERS (3)", minionRange:"/melee.svg", health: "13", move:"2",characterImg:"/dracula.png", Set:"Cobble of Fog"},
  {name:"LITTLE RED",CombatRange:"/melee.svg", minion: "HUNTSMAN", minionRange:"/ranged.svg", health: "14", move:"2",characterImg:"/littlered.png", Set:"Red VS. Beowulf"},
  {name:"BEOWULF",CombatRange:"/melee.svg", minion: "WIGLAF", minionRange:"/melee.svg", health: "17", move:"2",characterImg:"/beowulf.png", Set:"Red VS. Beowulf"},
  {name:"BRUCE LEE",CombatRange:"/melee.svg", minion: "None", minionRange:"", health: "14", move:"3",characterImg:"/brucelee.png", Set:"Red VS. Beowulf"},
  {name:"ROBIN HOOD",CombatRange:"/ranged.svg", minion: "OUTLAWS (4)", minionRange:"/melee.svg", health: "13", move:"2",characterImg:"/robinhood.png", Set:"Robin Hood VS. Bigfoot"},
  {name:"BIGFOOT",CombatRange:"/melee.svg", minion: "JACKALOPE", minionRange:"/melee.svg", health: "16", move:"3",characterImg:"/bigfoot.png", Set:"Robin Hood VS. Bigfoot"},

];

const AvailableCharacters = [
  
];
function App() {
  
  const [Result, setResult] = useState(false);
  const [ChosenCharacter1, setChosenCharacter1] = useState({name:"",CombatRange:"", minion: "", minionRange:"", health: "", move:"", characterImg:"", Set: ""});
  const [ChosenCharacter2, setChosenCharacter2] = useState({name:"",CombatRange:"", minion: "", minionRange:"", health: "", move:"", characterImg:"", Set: ""});

  const [MirrorMatch, setMirrorMatch] = useState(false);
  const updateMirrorMatch = () => setMirrorMatch(!MirrorMatch);

  const [CobbleofFog, setCobbleofFog] = useState(false);
  const updateCobbleofFog = () => setCobbleofFog(!CobbleofFog);
  const [LegendsVolOne, setLegendsVolOne] = useState(false);
  const updateLegendsVolOne = () => setLegendsVolOne(!LegendsVolOne);
  const [RedVBeowulf, setRedVBeowulf] = useState(false);
  const updateRedVBeowulf = () => setRedVBeowulf(!RedVBeowulf);
  const [RobinVBigfoot, setRobinVBigfoot] = useState(false);
  const updateRobinVBigfoot = () => setRobinVBigfoot(!RobinVBigfoot);
  const [BruceLee, setBruceLee] = useState(false);
  const updateBruceLee = () => setBruceLee(!BruceLee);
  

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
    if (CobbleofFog) { 
      AvailableCharacters.push(Characters[4],Characters[5],Characters[6],Characters[7]); //Include cobble of fog characters
    }
    else { // remove the cobble of fog characters
      for (var i = 0; i < AvailableCharacters.length; i++) {
          if (AvailableCharacters[i].Set="CobbleofFog") {
              AvailableCharacters.splice(i,1);
          }
      }
    }

    var random;
    var random2;
   
    if (AvailableCharacters.length != 0) {
      if (!MirrorMatch) {
      
        while (random == random2) {
          random = getRndInteger(0,(AvailableCharacters.length - 1));
          random2 = getRndInteger(0,(AvailableCharacters.length - 1));
        }
      }
      else {
          random = getRndInteger(0,(AvailableCharacters.length - 1)); //0-13
          random2 = getRndInteger(0,(AvailableCharacters.length - 1)); //0-13
      }   
    }
    else {
      if (!MirrorMatch) {
      
        while (random == random2) {
          random = getRndInteger(0,(Characters.length - 1));
          random2 = getRndInteger(0,(Characters.length - 1));
        }
      }
      else {
          random = getRndInteger(0,(Characters.length - 1)); //0-13
          random2 = getRndInteger(0,(Characters.length - 1)); //0-13
      }
    }
    

    

    console.log("hi");
    if ((CobbleofFog == false) && (LegendsVolOne == false) && (RedVBeowulf == false) && (RobinVBigfoot == false) && (BruceLee == false)) { //Theoretically all checkboxes should be empty, in this case choose any character
      
      setChosenCharacter1(Characters[random]);
      setChosenCharacter2(Characters[random2]);
    }
    else {
      setChosenCharacter1(AvailableCharacters[random]);
      setChosenCharacter2(AvailableCharacters[random2]);
    }
      setResult(true);

  }


  useChain([titleIntro, springupIntro], [0,0]);
  return (
    <>
      <globalContext.Provider value={SelectCharacter, springup, titletransition, Result}>
        <div className="App">
            <animated.form style = {titletransition}>
              <label className="form-label">
                POSSIBLE MIRROR MATCHES?
                <input
                  name="MirrorMatch"
                  type="checkbox"
                  className="checkbox"
                  onChange = {updateMirrorMatch}
                />
              </label>
              <br />
              <br />
              PACKS
              <br />
              <br />
              <label className="form-label">
                Cobble of Fog
                <input
                  name="Cobble"
                  type="checkbox"
                  className="checkbox"
                  onChange = {updateCobbleofFog}
                />
              </label>
              <label className="form-label">
                Battle of Legends Vol. One
                <input
                  name="Legends"
                  type="checkbox"
                  className="checkbox"
                  onChange = {updateLegendsVolOne}
                />
              </label>
              
              <br />
              <label className="form-label">
                Red VS. Beowulf
                <input
                  name="Red"
                  type="checkbox"
                  className="checkbox"
                  onChange = {updateRedVBeowulf}
                />
              </label>
              <label className="form-label">
                Robin Hood VS. Bigfoot
                <input
                  name="Hood"
                  type="checkbox"
                  className="checkbox"
                  onChange = {updateRobinVBigfoot}
                />
              </label>
              <label className="form-label">
                Bruce Lee
                <input
                  name="Hood"
                  type="checkbox"
                  className="checkbox"
                  onChange = {updateBruceLee}
                />
              </label>
            </animated.form>
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
