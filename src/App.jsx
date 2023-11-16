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

  return (
    <>
   
    <div> <div className="Container">
      <Quote />
      {checkstart?<Playzone checkStart={checkstart} togglecheck={()=>{handleClick()}} />:<Playboard /> }   
      <div className="filler" style={{height: "300px",width: "300px"}}>
      </div>
      </div>
    </div>
   
    </>
  );
}

export default App;
