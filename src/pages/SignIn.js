import React from "react";
const SignIn = ()=>{
    return(
        <div className='loginInputwrapper signInwrapper'>
            <h2>sign in</h2>
        <h5>Enter your details below </h5>
        <form>
          <input type='text' placeholder='full name'/><br/>
          <input type='email' placeholder='email'/><br/>
          <input  type='password' placeholder='password'/>
        </form>
        </div>
    )
}
export default SignIn