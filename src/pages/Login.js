import { Outlet } from "react-router-dom";
import React from "react";
import img from '../assets/lognImg.png'
import SignUp from "./SignUp";
const Login=()=>{
    return(
        <>
      <div className='loginWrapper'>
         <div className='loginImageWrapper'>
          <img className='loginImg' src={img}/>
         </div>
         <Outlet/>
      </div>
      <div>
        <button className='loginBtn'>continue</button>
      </div>
      <div className='logintext'>
        <p>Already have an account? <span>sign in</span></p>
      </div>
    </>
    )
}
export default Login