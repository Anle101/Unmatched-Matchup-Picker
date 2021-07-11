import logo from './logo.png';
import { useState, useEffect, useContext } from 'react';
import './App.css';

import {useSpring,animated, useChain, useSpringRef, config} from 'react-spring';

import {globalContext} from './context/globalContext';
import {inputContext} from './context/inputContext';

import CharacterCard from './components/CharacterCard';
import InputSection from './components/InputSection';

const Characters = [
  {name:"MEDUSA",CombatRange:"/ranged.svg", minion: "HARPIES (3)", minionRange:"/melee.svg", health: "16", move:"3", characterImg:"/medusa.png", Set:"Battle of Legends Vol. One"},
  {name:"SINBAD",CombatRange:"/melee.svg", minion: "THE PORTER", minionRange:"/melee.svg", health: "16",move:"2", characterImg:"/sinbad.png", Set:"Battle of Legends Vol. One"},
  {name:"ALICE",CombatRange:"/melee.svg", minion: "JABBERWOCK", minionRange:"/melee.svg", health: "13", move: "2",characterImg:"/alice.png", Set:"Battle of Legends Vol. One"},
  {name:"KING AUTHUR",CombatRange:"/melee.svg", minion: "MERLIN", minionRange:"/ranged.svg", health: "16", move:"2",characterImg:"/authur.png", Set:"Battle of Legends Vol. One"},

  {name:"SHERLOCK HOLMES",CombatRange:"/melee.svg", minion: "DR. WATSON", minionRange:"/ranged.svg", health: "16",move:"2",characterImg:"/sherlock.png", Set:"Cobble of Fog"},
  {name:"JEKYLL & HYDE",CombatRange:"/melee.svg", minion: "None", minionRange:"", health: "16", move:"2",characterImg:"/jekyll.png", Set:"Cobble of Fog"} ,
  {name:"INVISIBLE MAN",CombatRange:"/melee.svg", minion: "None", minionRange:"", health: "15", move:"2", characterImg:"/invisibleman.png", Set:"Cobble of Fog"},
  {name:"DRACULA",CombatRange:"/melee.svg", minion: "SISTERS (3)", minionRange:"/melee.svg", health: "13", move:"2",characterImg:"/dracula.png", Set:"Cobble of Fog"},

  {name:"BUFFY",CombatRange:"/melee.svg", minion: "XANDER OR GILES", minionRange:"/melee.svg", health: "14", move:"3", characterImg:"/buffy.png", Set:"Buffy"},
  {name:"SPIKE",CombatRange:"/melee.svg", minion: "DRUSILLA", minionRange:"/melee.svg", health: "15",move:"2", characterImg:"/spike.png", Set:"Buffy"},
  {name:"WILLOW",CombatRange:"/ranged.svg", minion: "TARA", minionRange:"/ranged.svg", health: "14", move: "2",characterImg:"/willow.png", Set:"Buffy"},
  {name:"ANGEL",CombatRange:"/melee.svg", minion: "FAITH", minionRange:"/melee.svg", health: "16", move:"2",characterImg:"/angel.png", Set:"Buffy"},

  {name:"Muldoon",CombatRange:"/ranged.svg", minion: "INGEN WORKERS (3)", minionRange:"/ranged.svg", health: "14", move:"3",characterImg:"/ingen.png", Set:"Ingen VS. Raptors"},
  {name:"The Raptors",CombatRange:"/melee.svg", minion: "None", minionRange:"", health: "7 (3)", move:"3",characterImg:"/raptors.png", Set:"Ingen VS. Raptors"},

  {name:"ROBIN HOOD",CombatRange:"/ranged.svg", minion: "OUTLAWS (4)", minionRange:"/melee.svg", health: "13", move:"2",characterImg:"/robinhood.png", Set:"Robin Hood VS. Bigfoot"},
  {name:"BIGFOOT",CombatRange:"/melee.svg", minion: "JACKALOPE", minionRange:"/melee.svg", health: "16", move:"3",characterImg:"/bigfoot.png", Set:"Robin Hood VS. Bigfoot"},


  {name:"LITTLE RED",CombatRange:"/melee.svg", minion: "HUNTSMAN", minionRange:"/ranged.svg", health: "14", move:"2",characterImg:"/littlered.png", Set:"Red VS. Beowulf"},
  {name:"BEOWULF",CombatRange:"/melee.svg", minion: "WIGLAF", minionRange:"/melee.svg", health: "17", move:"2",characterImg:"/beowulf.png", Set:"Red VS. Beowulf"},

  {name:"BRUCE LEE",CombatRange:"/melee.svg", minion: "None", minionRange:"", health: "14", move:"3",characterImg:"/brucelee.png", Set:"Bruce Lee"},
];

const Maps = [
  {map:"Marmoreal", mapImg:"/marmoreal.jpg", Set:"Battle of Legends Vol. One"},
  {map:"Sarpedon", mapImg:"/sarpedon.jpg", Set: "Battle of Legends Vol. One"},
  {map:"SoHo", mapImg:"/soho.jpg", Set:"Cobble of Fog"},
  {map:"Baskerville Manor", mapImg:"/baskerville-manor.jpg", Set:"Cobble of Fog"},
  {map:"Sunnydale High", mapImg:"/sunnydale-high.jpg", Set:"Buffy"},
  {map:"The Bronze", mapImg:"/the-bronze.jpg", Set:"Buffy"},
  {map:"Yukon", mapImg:"/yukon.jpg", Set:"Robin Hood VS. Bigfoot"},
  {map:"Sherwood Forest", mapImg:"/sherwood-forest.jpg", Set:"Robin Hood VS. Bigfoot"},
  {map:"Raptor Paddock", mapImg:"/raptor-paddock.jpg", Set:"Ingen VS. Raptors"},
  {map:"Heorot", mapImg:"/heorot.jpg", Set:"Red VS. Beowulf"},
]

const AvailableCharacters = [
  
];

const AvailableMaps = [

];
function App() {
  
  const [Result, setResult] = useState(false);
  const [Team, setTeam] = useState(false);

  const [ChosenCharacter1, setChosenCharacter1] = useState({name:"",CombatRange:"", minion: "", minionRange:"", health: "", move:"", characterImg:"", Set: ""});
  const [ChosenCharacter2, setChosenCharacter2] = useState({name:"",CombatRange:"", minion: "", minionRange:"", health: "", move:"", characterImg:"", Set: ""});
  const [ChosenMap, setChosenMap] = useState({map:"", mapImg:"", Set:""});
  const titleIntro = useSpringRef();

  const titletransition = useSpring({
    ref:titleIntro,
    to: {opacity:1,y: 0},
    from: {opacity:0,y: -200},

    config: config.stiff,
  });

  const springupIntro = useSpringRef();
  const springup = useSpring({
    ref:springupIntro,
    to: {y:320},
    from: {y:700},
 
    config: config.default,
  });
 
  useChain([titleIntro, springupIntro], [0,0]);
  return (
    <>
      <globalContext.Provider value= {{springup, titletransition, Result, setResult}}>
        <div className="App">
          <animated.img src={logo} style={titletransition} className="App-logo front" alt="logo" />
          <animated.p style={titletransition} className="front slogan">
            IN BATTLE, THERE ARE <b>NO EQUALS.</b>
          </animated.p>
    
          <inputContext.Provider value= {{setChosenCharacter1, setChosenCharacter2, setChosenMap, AvailableCharacters, Characters, AvailableMaps, Maps}}>
              <InputSection />
          </inputContext.Provider>

          {Result && 
          
            <>
            
              <CharacterCard character={ChosenCharacter1} card={1}/>
              <img src={process.env.PUBLIC_URL + ChosenMap.mapImg} className="map" alt="chosen map"></img>
              <h5 className="map-title">Map: {ChosenMap.map}</h5>
              <h1 className="middle">VS.</h1>
              <CharacterCard character={ChosenCharacter2} card={2}/>
            </>
          }
        </div>
      </globalContext.Provider>
    </>
  );
}

export default App;
