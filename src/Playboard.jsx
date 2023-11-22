import React, { useEffect,useState } from 'react'
import "./sass/board.css"
import { layer } from '@fortawesome/fontawesome-svg-core'

export const Playboard = ({player,setPlayer,playerChoice,score,setScore,setStart}) => {
  const [squareSign,setsquareSign]=useState(Array(9).fill(null))
  const [squares,setsquares]=useState(Array(9).fill(null))
  const [isRefresh,setRefresh]=useState(false)
  const [disabled,setDisabled] = useState(true)
  const [isMessage,setMessage] = useState(false)
  const [winner,setWinner]=useState(null)
  const [iftie,setTie]=useState(false)
  


  useEffect(()=>{setStart(JSON.parse(localStorage.getItem("started")))},[])
   
  useEffect(
    ()=>{
      let matchfinal = JSON.parse(localStorage.getItem("scores"))
      if(winner){winner==playerChoice?matchfinal.user=matchfinal.user+1:matchfinal.pc=matchfinal.pc+1;}
      let value = JSON.stringify(matchfinal);
      localStorage.setItem("scores",value);
      setScore(matchfinal)
    },[winner]
  )

  function refresh(){
    setMessage(true)
   
  }
  
  function quite(){
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
    playAgain()
    setRefresh(false)
    localStorage.removeItem("started")
   
  }

  console.log(score,"from board")
  function playAgain(){
    setsquareSign(Array(9).fill(null))
    setsquares(Array(9).fill(null))
    setDisabled(true)
    setMessage(false)
    setWinner(null)
    setTie(false)
    playerChoice=="X"?setPlayer("X"):setPlayer("O")
  }
  return (
    <div className="playzone">
      <div className="feature">
      <div className="logo-board">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="24"
            viewBox="0 0 23 24"
            fill="none"
          >
            <path
              d="M19.4375 4.28125L4 19.7188M4 4.28125L19.4375 19.7188"
              stroke="#32C4C3"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
          >
            <path
              d="M7.69324 18.0255C9.02609 19.3584 10.8338 20.1071 12.7188 20.1071C14.6037 20.1071 16.4114 19.3584 17.7443 18.0255C19.0771 16.6927 19.8259 14.8849 19.8259 13C19.8259 11.1151 19.0771 9.30734 17.7443 7.97449C16.4114 6.64164 14.6037 5.89286 12.7188 5.89286C10.8338 5.89286 9.02609 6.64164 7.69324 7.97449C6.36039 9.30734 5.61161 11.1151 5.61161 13C5.61161 14.8849 6.36039 16.6927 7.69324 18.0255ZM21.0273 4.6915C23.2308 6.89505 24.4688 9.88371 24.4688 13C24.4688 16.1163 23.2308 19.105 21.0273 21.3085C18.8237 23.5121 15.835 24.75 12.7188 24.75C9.60246 24.75 6.6138 23.5121 4.41024 21.3085C2.20669 19.105 0.96875 16.1163 0.96875 13C0.96875 9.88371 2.20669 6.89505 4.41024 4.6915C6.6138 2.48794 9.60246 1.25 12.7188 1.25C15.835 1.25 18.8237 2.48794 21.0273 4.6915Z"
              fill="#F7B336"
              stroke="#F7B336"
              strokeWidth="1.5"
            />
          </svg>
        </div>
        <div className="Turn"><span>{player}</span><span>TURN</span> </div>
        {isRefresh? <div className="refresh" onClick={refresh}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M7.32 0.0289756C8.70071 -0.0888534 10.0884 0.153982 11.347 0.733693C12.6056 1.31341 13.6921 2.21011 14.5 3.33598V1.74998C14.5 1.55106 14.579 1.3603 14.7197 1.21965C14.8603 1.07899 15.0511 0.999976 15.25 0.999976C15.4489 0.999976 15.6397 1.07899 15.7803 1.21965C15.921 1.3603 16 1.55106 16 1.74998V5.99998H11.75C11.5511 5.99998 11.3603 5.92096 11.2197 5.78031C11.079 5.63965 11 5.44889 11 5.24998C11 5.05106 11.079 4.8603 11.2197 4.71965C11.3603 4.57899 11.5511 4.49998 11.75 4.49998H13.477C12.7931 3.42988 11.8107 2.58356 10.6512 2.06556C9.4917 1.54757 8.20584 1.38058 6.95248 1.58524C5.69912 1.7899 4.53316 2.35723 3.59864 3.21715C2.66412 4.07708 2.00198 5.19192 1.694 6.42398C1.67128 6.52076 1.62955 6.61206 1.57123 6.69257C1.51291 6.77308 1.43917 6.84119 1.35429 6.89294C1.26942 6.9447 1.1751 6.97906 1.07682 6.99403C0.97854 7.00901 0.878265 7.0043 0.781825 6.98017C0.685385 6.95604 0.594703 6.91298 0.515053 6.8535C0.435404 6.79401 0.368375 6.71928 0.317865 6.63366C0.267355 6.54803 0.234371 6.45322 0.220832 6.35473C0.207293 6.25625 0.213469 6.15605 0.239 6.05998C0.643544 4.4424 1.5434 2.99166 2.81279 1.91052C4.08218 0.82939 5.65766 0.171906 7.319 0.0299756L7.32 0.0289756ZM3.92 14.881C4.99199 15.5164 6.19758 15.8925 7.44068 15.9795C8.68378 16.0665 9.93001 15.8618 11.08 15.3819C12.23 14.902 13.252 14.1601 14.0646 13.2153C14.8771 12.2704 15.4577 11.1489 15.76 9.93997C15.805 9.74817 15.7728 9.54635 15.6702 9.37814C15.5676 9.20993 15.403 9.08883 15.2119 9.04101C15.0207 8.9932 14.8185 9.02251 14.6488 9.12261C14.4791 9.22271 14.3556 9.38557 14.305 9.57598C13.9969 10.8078 13.3347 11.9223 12.4002 12.782C11.4658 13.6417 10.3 14.2089 9.04688 14.4136C7.79373 14.6182 6.50809 14.4513 5.34871 13.9336C4.18933 13.4158 3.20699 12.5698 2.523 11.5H4.25C4.44891 11.5 4.63968 11.421 4.78033 11.2803C4.92098 11.1397 5 10.9489 5 10.75C5 10.5511 4.92098 10.3603 4.78033 10.2196C4.63968 10.079 4.44891 9.99998 4.25 9.99998H0V14.25C0 14.4489 0.0790176 14.6397 0.21967 14.7803C0.360322 14.921 0.551088 15 0.75 15C0.948912 15 1.13968 14.921 1.28033 14.7803C1.42098 14.6397 1.5 14.4489 1.5 14.25V12.664C2.14478 13.5623 2.96879 14.3172 3.92 14.881Z" fill="#3F5560"/>
</svg>
      </div>:<div style={{width: "30px",height: "30px"}}></div>}
       
      </div>
      <div className="board">
      <Board player={player} setPlayer={setPlayer} squareSign={squareSign} setsquareSign={setsquareSign} squares={squares} setsquares={setsquares} setRefresh={setRefresh} isRefresh={isRefresh} disabled={disabled} setWinner={setWinner} setTie={setTie} setDisabled={setDisabled} score={score} setScore={setScore} />
      </div>

      {isRefresh?<div className="score-board">
        <div className='YouWin'><h3>{playerChoice=="X"?"X":"O"} (YOU)</h3><div className="score">{score.user}</div></div>
        <div className='BothTie'><h3>TIES</h3><div className="score">{score.tie}</div></div>
        <div className='PcWin'><h3>{playerChoice=="O"?"X":"O"} (CPU)</h3><div className="score">{score.pc}</div></div>
      </div>:null}




      {isMessage?<div className='message'>
        <div className="messageBox">
          <div className="statement"><span>Do you want to quit ?</span></div>
          <div className="button">           
            <button className='playAgain' onClick={()=>{playAgain()}} >PLAY AGAIN</button>
            <button className='quit' onClick={()=>{quite()}} >QUIT</button>
          </div>
        </div>
      </div>:null}
      {iftie?<div className='message'>
        <div className="messageBox">
          <div className="statement"><span>The Match is Tie <br /> Try Again?</span></div>
          <div className="button">           
            <button className='playAgain' onClick={()=>{playAgain()}} >PLAY AGAIN</button>
            <button className='quit' onClick={()=>{quite()}} >QUIT</button>
          </div>
        </div>
      </div>:null}
      {winner?winner==playerChoice?
      <div className='message'>
        <div className="messageBox">
          <h3>YOU WON!</h3>
          <div className="statement">
            {winner=="X"?<svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="24"
            viewBox="0 0 23 24"
            fill="none"
          >
            <path
              d="M19.4375 4.28125L4 19.7188M4 4.28125L19.4375 19.7188"
              stroke="#32C4C3"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>:<svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
          >
            <path
              d="M7.69324 18.0255C9.02609 19.3584 10.8338 20.1071 12.7188 20.1071C14.6037 20.1071 16.4114 19.3584 17.7443 18.0255C19.0771 16.6927 19.8259 14.8849 19.8259 13C19.8259 11.1151 19.0771 9.30734 17.7443 7.97449C16.4114 6.64164 14.6037 5.89286 12.7188 5.89286C10.8338 5.89286 9.02609 6.64164 7.69324 7.97449C6.36039 9.30734 5.61161 11.1151 5.61161 13C5.61161 14.8849 6.36039 16.6927 7.69324 18.0255ZM21.0273 4.6915C23.2308 6.89505 24.4688 9.88371 24.4688 13C24.4688 16.1163 23.2308 19.105 21.0273 21.3085C18.8237 23.5121 15.835 24.75 12.7188 24.75C9.60246 24.75 6.6138 23.5121 4.41024 21.3085C2.20669 19.105 0.96875 16.1163 0.96875 13C0.96875 9.88371 2.20669 6.89505 4.41024 4.6915C6.6138 2.48794 9.60246 1.25 12.7188 1.25C15.835 1.25 18.8237 2.48794 21.0273 4.6915Z"
              fill="#F7B336"
              stroke="#F7B336"
              strokeWidth="1.5"
            />
          </svg>}
          <span>TAKED THE ROUND</span></div>
          <div className="button">
            <button className='quit' onClick={()=>{quite()}} >QUIT</button>
            <button className='playAgain'onClick={()=>{playAgain()}}  >NEXT ROUND</button>
          </div>
        </div>
      </div>:<div className='message'>
        <div className="messageBox">
          <h3>YOU LOST!</h3>
          <div className="statement">
          {winner=="X"?<svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="24"
            viewBox="0 0 23 24"
            fill="none"
          >
            <path
              d="M19.4375 4.28125L4 19.7188M4 4.28125L19.4375 19.7188"
              stroke="#32C4C3"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>:<svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
          >
            <path
              d="M7.69324 18.0255C9.02609 19.3584 10.8338 20.1071 12.7188 20.1071C14.6037 20.1071 16.4114 19.3584 17.7443 18.0255C19.0771 16.6927 19.8259 14.8849 19.8259 13C19.8259 11.1151 19.0771 9.30734 17.7443 7.97449C16.4114 6.64164 14.6037 5.89286 12.7188 5.89286C10.8338 5.89286 9.02609 6.64164 7.69324 7.97449C6.36039 9.30734 5.61161 11.1151 5.61161 13C5.61161 14.8849 6.36039 16.6927 7.69324 18.0255ZM21.0273 4.6915C23.2308 6.89505 24.4688 9.88371 24.4688 13C24.4688 16.1163 23.2308 19.105 21.0273 21.3085C18.8237 23.5121 15.835 24.75 12.7188 24.75C9.60246 24.75 6.6138 23.5121 4.41024 21.3085C2.20669 19.105 0.96875 16.1163 0.96875 13C0.96875 9.88371 2.20669 6.89505 4.41024 4.6915C6.6138 2.48794 9.60246 1.25 12.7188 1.25C15.835 1.25 18.8237 2.48794 21.0273 4.6915Z"
              fill="#F7B336"
              stroke="#F7B336"
              strokeWidth="1.5"
            />
          </svg>}<span>TAKED THE ROUND</span></div>
          <div className="button">
            <button className='quit' onClick={()=>{quite()}} >QUIT</button>
            <button className='playAgain'onClick={()=>{playAgain()}}  >NEXT ROUND</button>
          </div>
        </div>
      </div>:null}
    </div>
  )
}


//                                  SQUARE



function Square({value,onsquareClicked}){
  
  return(
    <div className="square" onClick={onsquareClicked}>{value}</div>
  )
}





//                                    BOARD






function Board({player,setPlayer,squareSign,setsquareSign,squares,setsquares,setRefresh,isRefresh,disabled,setDisabled,setWinner,setTie,score,setScore}){

  const [playerChoice]=useState(player)
  const [pcChoice]=useState(player=="X"?"O":"X")
  const [autoPlay,toggleAutoplay]=useState(false)
  
  
  function squareClicked(i){
    if(squares[i]===null){
    if (calculateWiner(squares)) {
      let gameWinner= calculateWiner(squares);
      return;
}else{
      if(playerChoice=="X"){
        const tempsqr=squares.slice();
        tempsqr[i]="X";
        setsquares(tempsqr);
        const xSignsqr=squareSign.slice();
        xSignsqr[i]= <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="24"
          viewBox="0 0 23 24"
          fill="none"
        >
          <path
            d="M19.4375 4.28125L4 19.7188M4 4.28125L19.4375 19.7188"
            stroke="#32C4C3"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        setsquareSign(xSignsqr)
      }else{
        const tempsqr=squares.slice();
        tempsqr[i]="O";
        setsquares(tempsqr);
        const xSignsqr=squareSign.slice();
        xSignsqr[i]=  <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
      >
        <path
          d="M7.69324 18.0255C9.02609 19.3584 10.8338 20.1071 12.7188 20.1071C14.6037 20.1071 16.4114 19.3584 17.7443 18.0255C19.0771 16.6927 19.8259 14.8849 19.8259 13C19.8259 11.1151 19.0771 9.30734 17.7443 7.97449C16.4114 6.64164 14.6037 5.89286 12.7188 5.89286C10.8338 5.89286 9.02609 6.64164 7.69324 7.97449C6.36039 9.30734 5.61161 11.1151 5.61161 13C5.61161 14.8849 6.36039 16.6927 7.69324 18.0255ZM21.0273 4.6915C23.2308 6.89505 24.4688 9.88371 24.4688 13C24.4688 16.1163 23.2308 19.105 21.0273 21.3085C18.8237 23.5121 15.835 24.75 12.7188 24.75C9.60246 24.75 6.6138 23.5121 4.41024 21.3085C2.20669 19.105 0.96875 16.1163 0.96875 13C0.96875 9.88371 2.20669 6.89505 4.41024 4.6915C6.6138 2.48794 9.60246 1.25 12.7188 1.25C15.835 1.25 18.8237 2.48794 21.0273 4.6915Z"
          fill="#F7B336"
          stroke="#F7B336"
          strokeWidth="1.5"
        />
      </svg>
        setsquareSign(xSignsqr)
      }
     
      player=="X"?setPlayer("O"):setPlayer("X")
      toggleAutoplay(!autoPlay)
      setRefresh(true)
    }
  }
  }



 function pcPlay(idy){
  if (calculateWiner(squares)) {
    return;
}else{
  console.log(idy,"is index")
  if(pcChoice=="X"){
    const tempsqr=squares.slice();
        tempsqr[idy]="X";
        setsquares(tempsqr);
        const xSignsqr=squareSign.slice();
        xSignsqr[idy]= <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="24"
          viewBox="0 0 23 24"
          fill="none"
        >
          <path
            d="M19.4375 4.28125L4 19.7188M4 4.28125L19.4375 19.7188"
            stroke="#32C4C3"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        setsquareSign(xSignsqr)
  }else{
    const tempsqr=squares.slice();
    tempsqr[idy]="O";
    setsquares(tempsqr);
    const xSignsqr=squareSign.slice();
    xSignsqr[idy]=  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
  >
    <path
      d="M7.69324 18.0255C9.02609 19.3584 10.8338 20.1071 12.7188 20.1071C14.6037 20.1071 16.4114 19.3584 17.7443 18.0255C19.0771 16.6927 19.8259 14.8849 19.8259 13C19.8259 11.1151 19.0771 9.30734 17.7443 7.97449C16.4114 6.64164 14.6037 5.89286 12.7188 5.89286C10.8338 5.89286 9.02609 6.64164 7.69324 7.97449C6.36039 9.30734 5.61161 11.1151 5.61161 13C5.61161 14.8849 6.36039 16.6927 7.69324 18.0255ZM21.0273 4.6915C23.2308 6.89505 24.4688 9.88371 24.4688 13C24.4688 16.1163 23.2308 19.105 21.0273 21.3085C18.8237 23.5121 15.835 24.75 12.7188 24.75C9.60246 24.75 6.6138 23.5121 4.41024 21.3085C2.20669 19.105 0.96875 16.1163 0.96875 13C0.96875 9.88371 2.20669 6.89505 4.41024 4.6915C6.6138 2.48794 9.60246 1.25 12.7188 1.25C15.835 1.25 18.8237 2.48794 21.0273 4.6915Z"
      fill="#F7B336"
      stroke="#F7B336"
      strokeWidth="1.5"
    />
  </svg>
    setsquareSign(xSignsqr)
  }
  player=="X"?setPlayer("O"):setPlayer("X")
  setDisabled(true)
}
 }



  




useEffect(()=>{
  if (calculateWiner(squares)) {
    let gameWinner= calculateWiner(squares);
    console.log(gameWinner,' from useEffect')
    gameWinner==="X"?setWinner("X"):setWinner("O")
    return;
}
},[squares])

 useEffect(()=>{
  if(isRefresh){
    setDisabled(false)
    let idy=checkPcwin()
    if(idy!==9){setTimeout(()=>{pcPlay(idy);},1000)}
    else{
      setTie(true)
      console.log('its a tie')
    }
    
  }
},[autoPlay])

  function checkPcwin(){
    const winline = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (var j = 0; j < winline.length; j++) {
      const [a, b, c] = winline[j];
      let temp=[squares[a],squares[b],squares[c]]
    if(temp.filter((pc)=>{return pc==pcChoice}).length==2 && temp.filter((uc)=>{return uc==playerChoice}).length==0)
    {
      let nullindex=temp.indexOf(null)
      console.log(temp,'from pc dec')
      switch(nullindex)
      {
        case 0:
          return a
        case 1:
          return b;
        case 2:
          return c;
        default:
            break;
      }
    }
    }
   
    for (var i = 0; i < winline.length; i++) {
      const [a, b, c] = winline[i];
      let temp=[squares[a],squares[b],squares[c]]
      console.log(temp)
      if (temp.filter((uc)=>{return uc==playerChoice}).length==2 && temp.filter((pc)=>{return pc==pcChoice}).length==0) {
        let nullindex=temp.indexOf(null)
        console.log(temp,'from I dec')
        switch(nullindex)
        {
          case 0:
            return a
          case 1:
            return b;
          case 2:
            return c;
        }
       
      }
            
     
    }

    if(squares.filter((isNull)=>{return isNull===null})[0]===null){
    //  let randomval= reccursion();
    let randomval=Math.floor(Math.random()*9);
     console.log('randomval is ', randomval)
     while (squares[randomval]!==null) {

      randomval=Math.floor(Math.random()*9);

    }
    console.log(randomval,"returned for while loop")
    return randomval;

    //  if(randomval===undefined) {
    //   do{
    //     randomval=reccursion()
    // }while(randomval!==undefined);
    //   console.log(randomval,'is randomval')
    // }
      
    //   return randomval;
    // 
  }else{
      let tiematch = JSON.parse(localStorage.getItem("scores"))
      tiematch.tie = tiematch.tie+1;
      let value = JSON.stringify(tiematch);
      localStorage.setItem("scores",value);
      setScore(tiematch)
      console.log(tiematch,'is null')
      return 9;
    }
  }

 

   return(
    <div className="board-column">
    <div className="board-row">
      <Square value={squareSign[0]} onsquareClicked={disabled?()=>squareClicked(0):null}/>
      <Square value={squareSign[1]} onsquareClicked={disabled?()=>squareClicked(1):null}/>
      <Square value={squareSign[2]} onsquareClicked={disabled?()=>squareClicked(2):null}/>
    </div>
    <div className="board-row">
      <Square value={squareSign[3]} onsquareClicked={disabled?()=>squareClicked(3):null}/>
      <Square value={squareSign[4]} onsquareClicked={disabled?()=>squareClicked(4):null}/>
      <Square value={squareSign[5]} onsquareClicked={disabled?()=>squareClicked(5):null}/>
    </div>
    <div className="board-row">
      <Square value={squareSign[6]} onsquareClicked={disabled?()=>squareClicked(6):null}/>
      <Square value={squareSign[7]} onsquareClicked={disabled?()=>squareClicked(7):null}/>
      <Square value={squareSign[8]} onsquareClicked={disabled?()=>squareClicked(8):null}/>
    </div>
    </div>
   )
  
}

function calculateWiner(square) {
  const line = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (var i = 0; i < line.length; i++) {
    const [a, b, c] = line[i];
    if (square[a] && square[a] === square[b] && square[a] === square[c]) {
      return square[a];
    }
  }
  return null;
}



// X logo
// {/* <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="23"
//             height="24"
//             viewBox="0 0 23 24"
//             fill="none"
//           >
//             <path
//               d="M19.4375 4.28125L4 19.7188M4 4.28125L19.4375 19.7188"
//               stroke="#32C4C3"
//               strokeWidth="7"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg> */}

          // O logo 
          // <svg
          //   xmlns="http://www.w3.org/2000/svg"
          //   width="26"
          //   height="26"
          //   viewBox="0 0 26 26"
          //   fill="none"
          // >
          //   <path
          //     d="M7.69324 18.0255C9.02609 19.3584 10.8338 20.1071 12.7188 20.1071C14.6037 20.1071 16.4114 19.3584 17.7443 18.0255C19.0771 16.6927 19.8259 14.8849 19.8259 13C19.8259 11.1151 19.0771 9.30734 17.7443 7.97449C16.4114 6.64164 14.6037 5.89286 12.7188 5.89286C10.8338 5.89286 9.02609 6.64164 7.69324 7.97449C6.36039 9.30734 5.61161 11.1151 5.61161 13C5.61161 14.8849 6.36039 16.6927 7.69324 18.0255ZM21.0273 4.6915C23.2308 6.89505 24.4688 9.88371 24.4688 13C24.4688 16.1163 23.2308 19.105 21.0273 21.3085C18.8237 23.5121 15.835 24.75 12.7188 24.75C9.60246 24.75 6.6138 23.5121 4.41024 21.3085C2.20669 19.105 0.96875 16.1163 0.96875 13C0.96875 9.88371 2.20669 6.89505 4.41024 4.6915C6.6138 2.48794 9.60246 1.25 12.7188 1.25C15.835 1.25 18.8237 2.48794 21.0273 4.6915Z"
          //     fill="#F7B336"
          //     stroke="#F7B336"
          //     strokeWidth="1.5"
          //   />
          // </svg>




          //             recursion logic →↓  
          
          
        //if(realsqr.filter((isNull)=>{return isNull==null})[0]===null){
        //   (function reccursion(){
        //     let random=Math.floor(Math.random()*9);
        //       console.log(squares[random],random)
        //     if(realsqr[random]===null){
        //       realsqr[random]=pcPlayer;
        //       setsquares(realsqr)
        //       if(pcPlayer=="X"){
        //         let nextSquare=squareSign.slice();
        //   if (squares[random] || calculateWiner(squares)) {
        //     let gameWinner= calculateWiner(squares);
        //     console.log(gameWinner)
        //     return;
        //   }else{
        //     nextSquare[random]= <svg
        //     xmlns="http://www.w3.org/2000/svg"
        //     width="23"
        //     height="24"
        //     viewBox="0 0 23 24"
        //     fill="none"
        //   >
        //     <path
        //       d="M19.4375 4.28125L4 19.7188M4 4.28125L19.4375 19.7188"
        //       stroke="#32C4C3"
        //       strokeWidth="7"
        //       strokeLinecap="round"
        //       strokeLinejoin="round"
        //     />
        //   </svg>;
        //   setsquareSign(nextSquare)
        //   }
        // }else{
        //   let nextSquare=squareSign.slice();
        //       if (squares[random] || calculateWiner(squares)) {
        //         let gameWinner= calculateWiner(squares);
        //         console.log(gameWinner)
        //         return;
        //       }else{
        //         nextSquare[random]= <svg
        //               xmlns="http://www.w3.org/2000/svg"
        //               width="26"
        //               height="26"
        //               viewBox="0 0 26 26"
        //               fill="none"
        //             >
        //               <path
        //                 d="M7.69324 18.0255C9.02609 19.3584 10.8338 20.1071 12.7188 20.1071C14.6037 20.1071 16.4114 19.3584 17.7443 18.0255C19.0771 16.6927 19.8259 14.8849 19.8259 13C19.8259 11.1151 19.0771 9.30734 17.7443 7.97449C16.4114 6.64164 14.6037 5.89286 12.7188 5.89286C10.8338 5.89286 9.02609 6.64164 7.69324 7.97449C6.36039 9.30734 5.61161 11.1151 5.61161 13C5.61161 14.8849 6.36039 16.6927 7.69324 18.0255ZM21.0273 4.6915C23.2308 6.89505 24.4688 9.88371 24.4688 13C24.4688 16.1163 23.2308 19.105 21.0273 21.3085C18.8237 23.5121 15.835 24.75 12.7188 24.75C9.60246 24.75 6.6138 23.5121 4.41024 21.3085C2.20669 19.105 0.96875 16.1163 0.96875 13C0.96875 9.88371 2.20669 6.89505 4.41024 4.6915C6.6138 2.48794 9.60246 1.25 12.7188 1.25C15.835 1.25 18.8237 2.48794 21.0273 4.6915Z"
        //                 fill="#F7B336"
        //                 stroke="#F7B336"
        //                 strokeWidth="1.5"
        //               />
        //             </svg>
        //             setsquareSign(nextSquare)
        // }
        //       }
        //     }else{
        //       reccursion();
        //     }
          
        //   })();
// }







// function squareClicked(i){
//   let realsqr= squares.slice();
//   console.log(player," is player inside squareClicked function")
//   let pcChoice;
//   if(player==playerChoice){
//     if(player=="X")
//     {
//     realsqr[i]="X"
//     setsquares(realsqr)
//     setPlayer("O")
//     pcChoice="O"
//     console.log(playerChoice," if X is selected")
//     let nextSquare=squareSign.slice();
//     if (squares[i] || calculateWiner(squares)) {
//       let gameWinner= calculateWiner(squares);
//       console.log(gameWinner)
//       return;
//     }else{
//       nextSquare[i]= <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="23"
//       height="24"
//       viewBox="0 0 23 24"
//       fill="none"
//     >
//       <path
//         d="M19.4375 4.28125L4 19.7188M4 4.28125L19.4375 19.7188"
//         stroke="#32C4C3"
//         strokeWidth="7"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>;
//     setsquareSign(nextSquare)
//     }
//   }
//     else{
//         pcChoice="X"
//         realsqr[i]="O"
//         setsquares(realsqr)
//         setPlayer("X")
//         console.log(player," if O is selected")
//         let nextSquare=squareSign.slice();
//         if (squares[i] || calculateWiner(squares)) {
//           let gameWinner= calculateWiner(squares);
//           console.log(gameWinner)
//           return;
//         }else{
//           nextSquare[i]= <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="26"
//                 height="26"
//                 viewBox="0 0 26 26"
//                 fill="none"
//               >
//                 <path
//                   d="M7.69324 18.0255C9.02609 19.3584 10.8338 20.1071 12.7188 20.1071C14.6037 20.1071 16.4114 19.3584 17.7443 18.0255C19.0771 16.6927 19.8259 14.8849 19.8259 13C19.8259 11.1151 19.0771 9.30734 17.7443 7.97449C16.4114 6.64164 14.6037 5.89286 12.7188 5.89286C10.8338 5.89286 9.02609 6.64164 7.69324 7.97449C6.36039 9.30734 5.61161 11.1151 5.61161 13C5.61161 14.8849 6.36039 16.6927 7.69324 18.0255ZM21.0273 4.6915C23.2308 6.89505 24.4688 9.88371 24.4688 13C24.4688 16.1163 23.2308 19.105 21.0273 21.3085C18.8237 23.5121 15.835 24.75 12.7188 24.75C9.60246 24.75 6.6138 23.5121 4.41024 21.3085C2.20669 19.105 0.96875 16.1163 0.96875 13C0.96875 9.88371 2.20669 6.89505 4.41024 4.6915C6.6138 2.48794 9.60246 1.25 12.7188 1.25C15.835 1.25 18.8237 2.48794 21.0273 4.6915Z"
//                   fill="#F7B336"
//                   stroke="#F7B336"
//                   strokeWidth="1.5"
//                 />
//               </svg>
//               setsquareSign(nextSquare)
    
//         }
//     }
//   }

//     setRefresh(true)
//     setTimeout(()=>{pcPlay(realsqr,pcChoice)},3000) 
//     console.log(playerChoice,"player choice")
// }
  
// // PC player function

//     function pcPlay(realsqr,pcChoice){
//           console.log(pcChoice,"is pc choice")
//           // console.log(realsqr,"realsrq")
//           // console.log(squares,"squares")
//           // // pcPlayer=="X"?setPlayer("O"):setPlayer("X");
//           // if(realsqr.filter((isNull)=>{return isNull==null})[0]===null){
//           //   (function recursion(){

//           //     console.log("recursion")
//           //   })();
//           // }else{
//           //   console.log("no null value present")
//           // }

// }


// function reccursion(){
//   let random=Math.floor(Math.random()*9);
//   if(squares[random]===null){
//     console.log(random,'random value generated');
//     switch(random){
//       case 0:
//         console.log('0 is returned')
//         return 0
//       case 1:
//         console.log('1 is returned')
//         return 1
//       case 2:
//         console.log('2 is returned')
//         return 2
//       case 3:
//         console.log('3 is returned')
//         return 3
//       case 4:
//         console.log('4 is returned')
//         return 4
//       case 5:
//         console.log('5 is returned')
//         return 5
//       case 6:
//         console.log('6 is returned')
//         return 6
//       case 7:
//         console.log('7 is returned')
//         return 7
//       case 8:
//         console.log('8 is returned')
//         return 8
//     }
//   }else{
//     reccursion();
//   }
// }
