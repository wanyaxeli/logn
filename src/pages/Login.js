import { Outlet,useLocation } from "react-router-dom";
import React from "react";
import img from '../assets/lognImg.png'
import SignUp from "./SignUp";
const Login=()=>{
    const location = useLocation()
    const {pathname}= location
    let slitPath=pathname.split('/')[1]
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
       {
        slitPath==='in'? <p>Don't have an account? <span><a href="up">sign up</a></span></p>:
        <p>Already have an account? <span><a href="in">sign in</a></span></p>
       }
      </div>
    </>
    )
}
export default Login