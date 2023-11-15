import React,{useEffect,useState} from 'react'
import "./sass/Quote.css"
import axios from 'axios';
import { ToastContainer } from 'react-toastify';

function Quote(){

    const [data,setData]=useState(false)

    const MINUTE_MS = 1000;
    useEffect(() => {
        const interval = setInterval(() => {
            axios.get('https://api.adviceslip.com/advice')
  .then(function (response) {
    // handle success
    setData(response.data.slip)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });}, MINUTE_MS);
      
        return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
      }, [data])
 
    return(
        <>
        {data?(<div className="Quote-container">
              <h1>Quote #{data.id}</h1>
              <div className="random-quote"><p>“{data.advice}”</p></div>
              <div className="quote-logo">                <div className="innerLogoSqr">
                    <div className="upperpart"><div className='dark'></div><div className='light'></div></div>
                    <div className="lowerpart"><div className='light'></div><div className='dark'></div></div>
                </div>
              </div>
        </div>):(<div className="Quote-container"></div>)}
        
      
        </>
    )
}

export default Quote;