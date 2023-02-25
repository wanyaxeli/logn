import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
const Links =()=>{
    return(
        <Routes>
            <Route path="/" exact element={<Login/>}>
                {/* put the sign in page here 
                 <Route index element={<signIn/>}
                 for it to be  displayed as the first one on render
                */}
               <Route path="up"  element={<SignUp/>}/>
            </Route>
        </Routes>
    )
}
export default Links