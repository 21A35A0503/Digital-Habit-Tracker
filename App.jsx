import React,{useState} from "react";
import Login from "./Component/Digital Habit Tracker/Login";
import Dashboard from "./Component/Digital Habit Tracker/Dashboard";
import Profile from "./Component/Digital Habit Tracker/Profile";
import { UserProvider } from "./Component/context/UsersContext";
function App(){
    const[page,setPage]=useState("login");
    return(
        <UserProvider>
            {page==="login" &&(<Login setPage={setPage} />
            )}
            {page==="dashboard" && (<Dashboard setPage={setPage}/>)}
            {page==="profile" && (<Profile setPage={setPage}/>)}
        </UserProvider>
    );
}
export default App;
