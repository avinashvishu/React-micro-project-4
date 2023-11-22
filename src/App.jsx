import "./sass/App.css";
import Playzone from "./Playzone";
import Quote from "./Quote";
import { Playboard } from "./Playboard";
import { useEffect, useState } from "react";


function App() {
  const[checkstart,setStart]=useState(true)
  const [toggle, setToggle] = useState(true);
  const [player,setPlayer] = useState("O");
  const [playerChoice,setplayerChoice]= useState("O")
  const [score,setScore]=useState({
    user:0,
    pc:0,
    tie:0
  })
  console.log(score)
  const handleClick=()=>{
    setStart(!checkstart)
    localStorage.setItem("started","true")
    setScore({
      user:0,
      pc:0,
      tie:0
    })
    let scoreValue=JSON.stringify({
      user:0,
      pc:0,
      tie:0
    })
    localStorage.setItem("scores",scoreValue)
  }
   

   


  useEffect(
    ()=>{
      
      if(!(localStorage.getItem("scores"))){
        let scoreValue=JSON.stringify(score)
        localStorage.setItem("scores",scoreValue)
    }else{
        let scoreValue=JSON.parse(localStorage.getItem("scores"))
        setScore(scoreValue)
    }
    },[]
  )

  function togglePick(userchoice) {
    if (userchoice == "circle") {
      setToggle(true);
      setPlayer("O");
      setplayerChoice("O")
    } else {
      setToggle(false);
      setPlayer("X")
      setplayerChoice("X")
    }
  }
  return (
    <>
   
    <div> <div className="Container">
      <Quote />
    {JSON.parse(localStorage.getItem("started"))?<Playboard playerChoice={playerChoice} player={player} setPlayer={setPlayer} score={score} setScore={setScore} setStart={setStart} />:<Playzone togglecheck={()=>{handleClick()}} toggle={toggle} togglePick={togglePick}/>}   
      <div className="filler" style={{height: "300px",width: "300px"}}>
      </div>
      </div>
    </div>
   
    </>
  );
}

export default App;
