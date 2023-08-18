import { Outlet,useLocation ,useNavigate} from "react-router-dom";
import React from "react";
import img from '../assets/lognImg.png'
import SignUp from "./SignUp";

const Login=()=>{
    const location = useLocation()
    const navigate=useNavigate()
    const {pathname}= location
    let slitPath=pathname.split('/')[1]
    const handleSignIn=()=>{
    navigate('in')
    }
    return(
        <>
      <div className='loginWrapper'>
         <div className='loginImageWrapper'>
          <img className='loginImg' src={img}/>
         </div>
         <Outlet/>
      </div>
      <div className="btnwrapper">
        { slitPath==='in'?<button className='loginBtn'>continue</button>:
        <button onClick={handleSignIn} className='loginBtn'>continue</button>
        }
        
      </div>
    </>
    )
}
export default Login