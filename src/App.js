import logo from './logo.png';
import { useState, useEffect, useContext } from 'react';
import './App.css';

import {useSpring,animated, useChain, useSpringRef, config, a} from 'react-spring';

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

  const [Buffy, setBuffy] = useState(false);
  const updateBuffy = () => setBuffy(!Buffy);
  
  const [IngenVRaptors, setIngenVRaptors] = useState(false);
  const updateIngenVRaptors = () => setIngenVRaptors(!IngenVRaptors);

  const [RobinVBigfoot, setRobinVBigfoot] = useState(false);
  const updateRobinVBigfoot = () => setRobinVBigfoot(!RobinVBigfoot);

  const [RedVBeowulf, setRedVBeowulf] = useState(false);
  const updateRedVBeowulf = () => setRedVBeowulf(!RedVBeowulf);

  const [BruceLee, setBruceLee] = useState(false);
  const updateBruceLee = () => setBruceLee(!BruceLee);
  

  const [containsCobbleofFog, setcontainsCobbleofFog] = useState(false);
  const [containsLegendsVolOne, setcontainsLegendsVolOne] = useState(false);
  const [containsBuffy, setcontainsBuffy] = useState(false);
  const [containsIngenVRaptors, setcontainsIngenVRaptors] = useState(false);
  const [containsRobinVBigfoot, setcontainsRobinVBigfoot] = useState(false);
  const [containsRedVBeowulf, setcontainsRedVBeowulf] = useState(false);
  const [containsBruceLee, setcontainsBruceLee] = useState(false);
  

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

  useEffect(() => {
    if (CobbleofFog) {
      for (var i = 0; i < AvailableCharacters.length; i++) {
        if (AvailableCharacters[i].Set=="Cobble of Fog") {
          setcontainsCobbleofFog(true);
        }
      }
      if (!containsCobbleofFog) {
        for (var i = 0; i < Characters.length ;i++) {
          if (Characters[i].Set=="Cobble of Fog") {
            AvailableCharacters.push(Characters[i]); //Include cobble of fog characters
          }
        } 
        setcontainsCobbleofFog(true);
      }
    }
    else { // remove the cobble of fog characters
      if (containsCobbleofFog) {
        for (var i = AvailableCharacters.length- 1; i >= 0; i--) {
          if (AvailableCharacters[i].Set=="Cobble of Fog") {
              console.log(AvailableCharacters[i]);
              AvailableCharacters.splice(i,1);
          }
        }
        setcontainsCobbleofFog(false);        
      }
      
    }
    console.log(AvailableCharacters.length);
  }, [CobbleofFog]);

  useEffect(() => {
    if (LegendsVolOne) {
      for (var i = 0; i < AvailableCharacters.length; i++) {
        if (AvailableCharacters[i].Set=="Battle of Legends Vol. One") {
          setcontainsLegendsVolOne(true);
        }
      }
      if (!containsLegendsVolOne) {
        for (var i = 0; i < Characters.length ;i++) {
          if (Characters[i].Set=="Battle of Legends Vol. One") {
            AvailableCharacters.push(Characters[i]); //Include Legends Vol One Characters
          }
        }
        setcontainsLegendsVolOne(true);
      }
    }
    else { // remove the legends Vol One characters
      if (containsLegendsVolOne) {
        for (var i = AvailableCharacters.length- 1; i >= 0; i--) {
          if (AvailableCharacters[i].Set=="Battle of Legends Vol. One") {
              console.log(AvailableCharacters[i]);
              AvailableCharacters.splice(i,1);
          }
        }
        setcontainsLegendsVolOne(false);        
      }
      
    }
    console.log(AvailableCharacters.length);
  }, [LegendsVolOne]);

  useEffect(() => {
    if (Buffy) {
      for (var i = 0; i < AvailableCharacters.length; i++) {
        if (AvailableCharacters[i].Set=="Buffy") {
          setcontainsBuffy(true);
        }
      }
      if (!containsBuffy) {
        for (var i = 0; i < Characters.length ;i++) {
          if (Characters[i].Set=="Buffy") {
            AvailableCharacters.push(Characters[i]); //Include Legends Vol One Characters
          }
        }
        setcontainsBuffy(true);
      }
    }
    else { // remove the legends Vol One characters
      if (containsBuffy) {
        for (var i = AvailableCharacters.length- 1; i >= 0; i--) {
          if (AvailableCharacters[i].Set=="Buffy") {
              console.log(AvailableCharacters[i]);
              AvailableCharacters.splice(i,1);
          }
        }
        setcontainsBuffy(false);        
      }
      
    }
    console.log(AvailableCharacters.length);
  }, [Buffy]);
 
  useEffect(() => {
    if (IngenVRaptors) {
      for (var i = 0; i < AvailableCharacters.length; i++) {
        if (AvailableCharacters[i].Set=="Ingen VS. Raptors") {
          setcontainsIngenVRaptors(true);
        }
      }
      if (!containsIngenVRaptors) {
        for (var i = 0; i < Characters.length ;i++) {
          if (Characters[i].Set=="Ingen VS. Raptors") {
            AvailableCharacters.push(Characters[i]); //Include Muldoon and the raptors
          }
        }
        setcontainsIngenVRaptors(true);
      }
    }
    else { // remove the Muldoon and the raptors
      if (containsIngenVRaptors) {
        for (var i = AvailableCharacters.length- 1; i >= 0; i--) {
          if (AvailableCharacters[i].Set=="Ingen VS. Raptors") {
              console.log(AvailableCharacters[i]);
              AvailableCharacters.splice(i,1);
          }
        }
        setcontainsIngenVRaptors(false);        
      }
      
    }
    console.log(AvailableCharacters.length);
  }, [IngenVRaptors]);


  useEffect(() => {
    if (RobinVBigfoot) {
      for (var i = 0; i < AvailableCharacters.length; i++) {
        if (AvailableCharacters[i].Set=="Robin Hood VS. Bigfoot") {
          setcontainsRobinVBigfoot(true);
        }
      }
      if (!containsRobinVBigfoot) {
        for (var i = 0; i < Characters.length ;i++) {
          if (Characters[i].Set=="Robin Hood VS. Bigfoot") {
            AvailableCharacters.push(Characters[i]); //Include Robin Hood and Bigfoot
          }
        }
        setcontainsRobinVBigfoot(true);
      }
    }
    else { // remove the Robin Hood and Bigfoot
      if (containsRobinVBigfoot) {
        for (var i = AvailableCharacters.length- 1; i >= 0; i--) {
          if (AvailableCharacters[i].Set=="Robin Hood VS. Bigfoot") {
              console.log(AvailableCharacters[i]);
              AvailableCharacters.splice(i,1);
          }
        }
        setcontainsRobinVBigfoot(false);        
      }
      
    }
    console.log(AvailableCharacters.length);
  }, [RobinVBigfoot]);

  useEffect(() => {
    if (RedVBeowulf) {
      for (var i = 0; i < AvailableCharacters.length; i++) {
        if (AvailableCharacters[i].Set=="Red VS. Beowulf") {
          setcontainsRedVBeowulf(true);
        }
      }
      if (!containsRedVBeowulf) {
        for (var i = 0; i < Characters.length ;i++) {
          if (Characters[i].Set=="Red VS. Beowulf") {
            AvailableCharacters.push(Characters[i]); //Include Beowulf and Little Red
          }
        }
        setcontainsRedVBeowulf(true);
      }
    }
    else { // remove Red and Beowulf
      if (containsRedVBeowulf) {
        for (var i = AvailableCharacters.length- 1; i >= 0; i--) {
          if (AvailableCharacters[i].Set=="Red VS. Beowulf") {
              console.log(AvailableCharacters[i]);
              AvailableCharacters.splice(i,1);
          }
        }
        setcontainsRedVBeowulf(false);
      }
      
    }
    console.log(AvailableCharacters.length);
  }, [RedVBeowulf]);
  
  
  useEffect(() => {
    if (BruceLee) {
      for (var i = 0; i < AvailableCharacters.length; i++) {
        if (AvailableCharacters[i].Set=="Bruce Lee") {
          setcontainsBruceLee(true);
        }
      }
      if (!containsBruceLee) {
        for (var i = 0; i < Characters.length ;i++) {
          if (Characters[i].Set=="Bruce Lee") {
            AvailableCharacters.push(Characters[i]); //Include Bruce Lee
          }
        }
        setcontainsBruceLee(true);
      }
    }
    else { // remove Bruce Lee
      if (containsBruceLee) {
        for (var i = AvailableCharacters.length- 1; i >= 0; i--) {
          if (AvailableCharacters[i].Set=="Bruce Lee") {
              console.log(AvailableCharacters[i]);
              AvailableCharacters.splice(i,1);
          }
        }
        setcontainsBruceLee(false);        
      }
      
    }
    console.log(AvailableCharacters.length);
  }, [BruceLee]);

  function SelectCharacter() { 
    var random;
    var random2;
   
    if (AvailableCharacters.length > 1) { //If there is a checkbox enabled || Special case, only solo fighters have been selected
      if (!MirrorMatch) {
        console.log("hi");
        while (random == random2) {
          random = getRndInteger(0,(AvailableCharacters.length - 1));
          random2 = getRndInteger(0,(AvailableCharacters.length - 1));
        }
      }
      else {
          random = getRndInteger(0,(AvailableCharacters.length - 1));
          random2 = getRndInteger(0,(AvailableCharacters.length - 1)); 
      }   
    }
    else { // If all checkboxes are blank
      if (!MirrorMatch) {
      
        while (random == random2) {
          random = getRndInteger(0,(Characters.length - 1));
          random2 = getRndInteger(0,(Characters.length - 1));
        }
      }
      else {
          random = getRndInteger(0,(Characters.length - 1));
          random2 = getRndInteger(0,(Characters.length - 1)); 
      }
    }
    

    

    if (!CobbleofFog && !LegendsVolOne && !Buffy && !IngenVRaptors && !RedVBeowulf && !RobinVBigfoot) { //Theoretically all checkboxes should be empty, in this case choose any character
      
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
            <animated.form style = {titletransition} className = "input-section">
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
  
              <label className="form-label">
                Cobble of Fog
                <input
                  name="Cobble"
                  type="checkbox"
                  className="checkbox"
                  onChange = {updateCobbleofFog}
                />
              </label>
              <br />
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
                Buffy: The Vampire Slayer
                <input
                  name="Buffy"
                  type="checkbox"
                  className="checkbox"
                  onChange = {updateBuffy}
                />
              </label>
              <br />
              <label className="form-label">
                InGen VS. The Raptors
                <input
                  name="JurassicPark"
                  type="checkbox"
                  className="checkbox"
                  onChange = {updateIngenVRaptors}
                />
              </label>
              <br />
              <label className="form-label">
                Robin Hood VS. Bigfoot
                <input
                  name="Hood"
                  type="checkbox"
                  className="checkbox"
                  onChange = {updateRobinVBigfoot}
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
              <br />
              <label className="form-label">
                Bruce Lee
                <input
                  name="Bruce"
                  type="checkbox"
                  className="checkbox"
                  onChange = {updateBruceLee}
                />
              </label>
            </animated.form>
            <animated.img src={logo} style={titletransition} className="App-logo front" alt="logo" />
            <animated.p style={titletransition} className="front slogan">
              IN BATTLE, THERE ARE <b>NO EQUALS.</b>
            </animated.p>

            {!Result && 
              <>
                <animated.button style={springup} className="start-button front" onClick={SelectCharacter}>GIVE ME MY MATCHUP </animated.button>
              </>  
            }
            

            {Result && 
              <>
        
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
