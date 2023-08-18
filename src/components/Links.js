import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
const Links =()=>{
    return(
        <Routes>
            <Route path="/" exact element={<Login/>}>
                <Route index element={<SignUp/>}/>
                <Route path="up"  element={<SignUp/>}/>
                <Route path="in" element={<SignIn/>}/>
            </Route>
        </Routes>
    )
}
export default Links