import React,{useState,useContext} from "react";
import { UserContext } from "../context/UsersContext";
function Login({setPage}){
    const{setUser}=useContext(UserContext);
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const handleLogin=()=>{
        if(!username.trim())
            return;
        setUser({
            username,
        });
        setPage("dashboard")
    };
    return(
        <div>
            <h1>Habit Tracker Login</h1>
            <input type="text" placeholder="Enter Username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
            <input type="text" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}
export default Login;