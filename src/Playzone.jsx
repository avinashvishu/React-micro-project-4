import React from "react";
import { useState } from "react";
import { Invite } from "./Invite";

function Playzone() {


  return (
    <>
      <div className="playzone">
        <div className="logo">
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
        <div className="pickPlayer">
          <h2>PICK PLAYER</h2>
          <ChoosePlayer />
        </div>
        <div className="startgame">
          <div className="newGame">
            <h2>NEW GAME (VS CPU)</h2>
          </div>
          <div className="comingSoon">
            <h2>NEW GAME (VS HUMAN) Coming soon</h2>
          </div>
        </div>
        <Invite />
      </div>
    </>
  );
}

function ChoosePlayer() {
  const [toggle, setToggle] = useState(true);
  function togglePick(userchoice) {
    if (userchoice == "circle") {
      setToggle(true);
    } else {
      setToggle(false);
    }
    console.log(userchoice);
  }
  return (
    <>
      {toggle ? (
        <div className="select-btn">
          <div className="cross" onClick={() => togglePick("cross")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
            >
              <path
                d="M19.4375 4L4 19.4375M4 4L19.4375 19.4375"
                stroke="#D9D9D9"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="circle circleActive" onClick={() => togglePick("circle")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
            >
              <path
                d="M7.69324 18.0255C9.02609 19.3584 10.8338 20.1071 12.7188 20.1071C14.6037 20.1071 16.4114 19.3584 17.7443 18.0255C19.0771 16.6927 19.8259 14.8849 19.8259 13C19.8259 11.1151 19.0771 9.30734 17.7443 7.97449C16.4114 6.64164 14.6037 5.89286 12.7188 5.89286C10.8338 5.89286 9.02609 6.64164 7.69324 7.97449C6.36039 9.30734 5.61161 11.1151 5.61161 13C5.61161 14.8849 6.36039 16.6927 7.69324 18.0255ZM21.0273 4.6915C23.2308 6.89505 24.4688 9.88371 24.4688 13C24.4688 16.1163 23.2308 19.105 21.0273 21.3085C18.8237 23.5121 15.835 24.75 12.7188 24.75C9.60246 24.75 6.6138 23.5121 4.41024 21.3085C2.20669 19.105 0.96875 16.1163 0.96875 13C0.96875 9.88371 2.20669 6.89505 4.41024 4.6915C6.6138 2.48794 9.60246 1.25 12.7188 1.25C15.835 1.25 18.8237 2.48794 21.0273 4.6915Z"
                fill="#192A32"
                stroke="#192A32"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        </div>
      ) : (<div className="select-btn">
          <div className="cross crossActive" onClick={() => togglePick("cross")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
            >
              <path
                d="M19.4375 4L4 19.4375M4 4L19.4375 19.4375"
                stroke="#192A32"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="circle" onClick={() => togglePick("circle")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
            >
              <path
                d="M7.69324 18.0255C9.02609 19.3584 10.8338 20.1071 12.7188 20.1071C14.6037 20.1071 16.4114 19.3584 17.7443 18.0255C19.0771 16.6927 19.8259 14.8849 19.8259 13C19.8259 11.1151 19.0771 9.30734 17.7443 7.97449C16.4114 6.64164 14.6037 5.89286 12.7188 5.89286C10.8338 5.89286 9.02609 6.64164 7.69324 7.97449C6.36039 9.30734 5.61161 11.1151 5.61161 13C5.61161 14.8849 6.36039 16.6927 7.69324 18.0255ZM21.0273 4.6915C23.2308 6.89505 24.4688 9.88371 24.4688 13C24.4688 16.1163 23.2308 19.105 21.0273 21.3085C18.8237 23.5121 15.835 24.75 12.7188 24.75C9.60246 24.75 6.6138 23.5121 4.41024 21.3085C2.20669 19.105 0.96875 16.1163 0.96875 13C0.96875 9.88371 2.20669 6.89505 4.41024 4.6915C6.6138 2.48794 9.60246 1.25 12.7188 1.25C15.835 1.25 18.8237 2.48794 21.0273 4.6915Z"
                fill="#D9D9D9"
                stroke="#D9D9D9"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        </div>
      )}
    </>
  );
}

export default Playzone;
