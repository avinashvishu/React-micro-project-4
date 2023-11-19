import "./sass/App.css";
import Playzone from "./Playzone";
import Quote from "./Quote";
import { Playboard } from "./Playboard";
import { useState } from "react";


function App() {
  const[checkstart,setStart]=useState(true)
  const handleClick=()=>{
    setStart(!setStart)
  }
  const [toggle, setToggle] = useState(true);
  const [player,setPlayer] = useState("O")
  function togglePick(userchoice) {
    if (userchoice == "circle") {
      setToggle(true);
      setPlayer("O")
    } else {
      setToggle(false);
      setPlayer("X")
    }
  }
  return (
    <>
   
    <div> <div className="Container">
      <Quote />
      {checkstart?<Playzone checkStart={checkstart} togglecheck={()=>{handleClick()}} toggle={toggle} togglePick={togglePick}/>:<Playboard player={player} setPlayer={setPlayer} />  }   
      <div className="filler" style={{height: "300px",width: "300px"}}>
      </div>
      </div>
    </div>
   
    </>
  );
}

export default App;
