import React,{useContext,useMemo} from "react";
import { UserContext } from "../context/UsersContext";
function Profile({setPage}){
    const{user}=useContext(UserContext);
    const habits=JSON.parse(localStorage.getItem("habits")||[]);
    const completedHabits=useMemo(()=>habits.filter((habit)=>habit.completed).length,[habits]);
    return(
        <div>
            <h1>Profile</h1>
            <h2>Username: {user?.username}</h2>
            <h3>Completed Habits: {completedHabits}</h3>
            <button onClick={()=>setPage("dashboard")}>Dashboard</button>
        </div>
    );
}
export default Profile;