import React from "react";
const SignUp =()=>{
    return(
    <div className='loginInputwrapper'>
        <h2>Create account</h2>
        <h5>Enter your details below </h5>
        <form>
          <input type='text' placeholder='full name'/><br/>
          <input type='email' placeholder='email'/><br/>
           <select><option value='gender'>Gender</option>
           <option value='male'>Male</option>
           <option value='female'>Female</option>
           </select><br/>
           <select><option value='gender'>Occupation</option>
           <option value='male'>tech</option>
           <option value='female'>coder</option>
           </select>
            <div className='inputWrapper'>
            <input type='password' placeholder='password'/>
            <input type='password' placeholder='confirm password'/>
            </div>
        </form>
     </div>
    )
}
export default SignUp