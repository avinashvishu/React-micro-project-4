import "./sass/App.css";
import Playzone from "./Playzone";
import Quote from "./Quote";



function App() {
  return (
    <>
   
    <div> <div className="Container">
      <Quote />
      {/* <Playzone /> */}
      <div className="filler" style={{height: "300px",width: "300px"}}></div>
      </div></div>
   
    </>
  );
}

export default App;
