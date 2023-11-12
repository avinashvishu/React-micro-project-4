import React from 'react'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
export const Invite = () => {
    const notify = () => toast("Invite link copied");

  return (
    <>
    <div className="invite" onClick={notify}>
    <h1>Invite your friend</h1>
  </div>
  <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
  </>
   
  )
}
