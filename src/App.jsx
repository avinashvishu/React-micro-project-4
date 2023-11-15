import "./sass/App.css";
import Playzone from "./Playzone";
import Quote from "./Quote";
import { Playboard } from "./Playboard";


function App() {
  return (
    <>
   
    <div> <div className="Container">
      <Quote />
      {/* <Playzone /> */}
      <Playboard />
      <div className="filler" style={{height: "300px",width: "300px"}}></div>
      </div></div>
   
    </>
  );
}

export default App;
